import  { useEffect, useState } from 'react';
import * as THREE from 'three';
import { ARButton } from 'three/examples/jsm/webxr/ARButton';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

import 'tailwindcss/tailwind.css';
import './ARApp.css';

const ARApp = () => {
  const [currentObject, setCurrentObject] = useState(null);
  const [isAR, setIsAR] = useState(false);

  useEffect(() => {
    let touchDown = false;
    let touchX, touchY, deltaX;

    const rotateObject = () => {
      if (currentObject && reticle.visible) {
        setCurrentObject((prevObject) => {
          prevObject.rotation.y += deltaX / 100;
          return prevObject;
        });
      }
    };

    const arPlace = () => {
      if (reticle.visible) {
        currentObject.position.setFromMatrixPosition(reticle.matrix);
        setCurrentObject((prevObject) => {
          prevObject.visible = true;
          return prevObject;
        });
      }
    };

    const loadModel = (model) => {
      new RGBELoader().setDataType(THREE.UnsignedByteType).setPath('textures/').load('photo_studio_01_1k.hdr', function (texture) {
        envmap = pmremGenerator.fromEquirectangular(texture).texture;
        scene.environment = envmap;
        texture.dispose();
        pmremGenerator.dispose();
        render();

        var loader = new GLTFLoader().setPath('3d/');
        loader.load(model + '.glb', function (glb) {
          setCurrentObject(glb.scene);
          scene.add(glb.scene);

          arPlace();

          var box = new THREE.Box3();
          box.setFromObject(glb.scene);
          box.center(controls.target);

          controls.update();
          render();
        });
      });
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      renderer.setAnimationLoop(render);
      requestAnimationFrame(animate);
      controls.update();
    };

    const render = (timestamp, frame) => {
      if (frame && isAR) {
        var referenceSpace = renderer.xr.getReferenceSpace();
        var session = renderer.xr.getSession();

        if (hitTestSourceRequested === false) {
          session.requestReferenceSpace('viewer').then(function (referenceSpace) {
            session.requestHitTestSource({ space: referenceSpace }).then(function (source) {
              hitTestSource = source;
            });
          });

          session.addEventListener('end', function () {
            hitTestSourceRequested = false;
            hitTestSource = null;

            setIsAR(false);
            reticle.visible = false;
            document.getElementById('place-button').style.display = 'none';
          });

          hitTestSourceRequested = true;
        }

        if (hitTestSource) {
          var hitTestResults = frame.getHitTestResults(hitTestSource);

          if (hitTestResults.length) {
            var hit = hitTestResults[0];

            document.getElementById('place-button').style.display = 'block';

            reticle.visible = true;
            reticle.matrix.fromArray(hit.getPose(referenceSpace).transform.matrix);
          } else {
            reticle.visible = false;
            document.getElementById('place-button').style.display = 'none';
          }
        }
      }

      renderer.render(scene, camera);
    };

    const openNav = () => {
      document.getElementById('mySidenav').style.width = '250px';
    };

    const closeNav = () => {
      document.getElementById('mySidenav').style.width = '0';
    };

    document.getElementById('ARButton').addEventListener('click', () => {
      setCurrentObject((prevObject) => {
        prevObject.visible = false;
        return prevObject;
      });
      setIsAR(true);
    });

    document.getElementById('place-button').addEventListener('click', arPlace);

    $(".ar-object").click(function () {
      if (currentObject !== null) {
        scene.remove(currentObject);
      }

      loadModel($(this).attr('id'));
    });

    renderer.domElement.addEventListener('touchstart', function (e) {
      e.preventDefault();
      touchDown = true;
      touchX = e.touches[0].pageX;
      touchY = e.touches[0].pageY;
    });

    renderer.domElement.addEventListener('touchend', function (e) {
      e.preventDefault();
      touchDown = false;
    });

    renderer.domElement.addEventListener('touchmove', function (e) {
      e.preventDefault();

      if (!touchDown) {
        return;
      }

      deltaX = e.touches[0].pageX - touchX;
      deltaY = e.touches[0].pageY - touchY;
      touchX = e.touches[0].pageX;
      touchY = e.touches[0].pageY;

      rotateObject();
    });

    // Initialize Three.js components

    const container = document.createElement('div');
    document.getElementById('container').appendChild(container);

    const scene = new THREE.Scene();
    window.scene = scene;

    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.001, 200);

    const directionalLight = new THREE.DirectionalLight(0xdddddd, 1);
    directionalLight.position.set(0, 0, 1).normalize();
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    container.appendChild(renderer.domElement);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', render);
    controls.minDistance = 2;
    controls.maxDistance = 10;
    controls.target.set(0, 0, -0.2);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // AR SETUP

    let options = {
      requiredFeatures: ['hit-test'],
      optionalFeatures: ['dom-overlay'],
    };

    options.domOverlay = { root: document.getElementById('content') };

    document.body.appendChild(ARButton.createButton(renderer, options));

    const reticle = new THREE.Mesh(
      new THREE.RingBufferGeometry(0.15, 0.2, 32).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial()
    );
    reticle.matrixAutoUpdate = false;
    reticle.visible = false;
    scene.add(reticle);

    window.addEventListener('resize', onWindowResize, false);

    animate();

    // Cleanup
    return () => {
      document.getElementById('ARButton').removeEventListener('click');
      document.getElementById('place-button').removeEventListener('click');
    };
  }, [currentObject, isAR]);

  return (
    <div id="content">
      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>
          &times;
        </a>
        <a className="ar-object" id="1" href="#">
          item_1
        </a>
        <a className="ar-object" id="2" href="#">
          item_2
        </a>
        <a className="ar-object" id="3" href="#">
          item_3
        </a>
        <a className="ar-object" id="4" href="#">
          item_4
        </a>
      </div>

      <div id="container" style={{ position: 'fixed' }}></div>

      <span style={{ fontSize: '30px', cursor: 'pointer', position: 'absolute' }} onClick={() => openNav()}>
        &#9776; open
      </span>

      <button type="button" id="place-button">
        PLACE
      </button>
    </div>
  );
};

export default ARApp;
