// // // import { useLoader } from '@react-three/fiber';
// // // import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// // // import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// // // import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// // // import { Suspense, useEffect, useState } from 'react';
// // // import { useParams } from 'react-router-dom';
// // // import { useRef } from 'react';


// // // export default function Model({ position }) {
// // //   let { _id } = useParams();
// // //   const [product, setProduct] = useState(null);
// // //   const { model } = product || {};

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         const response = await fetch(`http://decora-backend.vercel.app/api/ARpage/${_id}`).then(res => res.json());
// // //         setProduct(response);
// // //       } catch (error) {
// // //         console.error('Error fetching product:', error);
// // //       }
// // //     };

// // //     fetchData();
// // //   }, [_id]);

// // //   if (!product) {
// // //     // Handle loading state or show an error message
// // //     return null;
// // //   }

// // //   const modelUrl = model;
// // // //   let loader;

// // // //   if (modelUrl.endsWith('.gltf')) {
// // // //     loader = useLoader(GLTFLoader, modelUrl);
// // // //   } else if (modelUrl.endsWith('.obj')) {
// // // //     loader = useLoader(OBJLoader, modelUrl);
// // // //     const loader = new OBJLoader();

// // // //     // load a resource
// // // //     loader.load(
// // // //       // resource URL
// // // //       modelUrl,
// // // //       // called when resource is loaded
// // // //       function (object) {

// // // //         scene.add(object);

// // // //       },
// // // //       // called when loading is in progresses
// // // //       function (xhr) {

// // // //         console.log((xhr.loaded / xhr.total * 100) + '% loaded');

// // // //       },
// // // //       // called when loading has errors
// // // //       function (error) {

// // // //         console.log('An error happened');

// // // //       }
// // // //     );

// // // //   } else if (modelUrl.endsWith('.FBX')) {
// // // //     loader = useLoader(FBXLoader, modelUrl);
// // // //   } else if (modelUrl.endsWith('.glb')) {
// // // //     loader = useLoader(GLTFLoader, modelUrl); // GLB is essentially a binary format of GLTF
// // // //   } else {
// // // //     console.error('Unsupported model format:', modelUrl);
// // // //     return null;
// // // //   }

// // // //   return (
// // // //     <Suspense fallback={null}>
// // // //       {/* Instead of using <primitive>, directly use the loaded object */}
// // // //       <primitive object={loader.scene} position={position} />
// // // //     </Suspense>
// // // //   );
// // // // }





// // //   const objRef = useRef();
// // //   const objModel = useLoader(OBJLoader, modelUrl);

// // //   return <primitive object={objModel} ref={objRef} />;
// // // }


// import React, { Suspense, useEffect, useState, useRef } from 'react';
// import { useLoader } from '@react-three/fiber';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { useParams } from 'react-router-dom';

// export default function Model({ position }) {
//   let { _id } = useParams();
//   const [product, setProduct] = useState(null);
//   const { model } = product || {};

//    const objRef = useRef(); // Move useRef outside of useEffect

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://decora-backend.vercel.app/api/ARpage/${_id}`).then(res => res.json());
//         setProduct(response);
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       }
//     };

//     fetchData();
//   }, [_id]);

//   if (!product) {
//     // Handle loading state or show an error message
//     return null;
//   }

//   const modelUrl = model;
//   const objModel = useLoader(OBJLoader, modelUrl);
//   console.log('Model URL:', modelUrl);
//   console.log('OBJ Model:', objModel);


//   return (
//     <Suspense fallback={null}>
//       {/* Instead of using <primitive>, directly use the loaded object */}
//       {/* <primitive object={objModel} position={[0,0,0]} /> */}
//       <group ref={objRef}>
//       <primitive object={objModel} />
//     </group>
//     </Suspense>
//   );
// }





import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Model({ position }) {
  let { _id } = useParams();
  const [product, setProduct] = useState(null);
  const { model } = product || {};
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://decora-backend.vercel.app/api/ARpage/${_id}`).then(res => res.json());
        setProduct(response);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchData();
  }, [_id]);

  if (!product) {
    // Handle loading state or show an error message
    return null;
  }

  const modelUrl = model;
  const gltf = useLoader(GLTFLoader, modelUrl);

  return (
    <Suspense fallback={null}>
      <primitive position={position} object={gltf.scene} />
    </Suspense>
  );
}