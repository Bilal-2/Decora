import { OrbitControls } from "@react-three/drei";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState } from "react";
import Model from "./Model";
import { useThree } from "@react-three/fiber";

export default function XRModel() {
  const reticleRef = useRef();
  const [model,setModel] = useState([]);
  const {isPresenting} = useXR();
  useThree(({camera}) => {
    if(!isPresenting){
        camera.position.z=3;
    }
  })


  useHitTest((hitMatrix) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale
    );

    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  const placeCube = (e) => {
    let position = e.intersection.object.position.clone();
    let id = Date.now();
    setModel([...model,{position,id}]);

  }

  return (
    <>
      <OrbitControls />
      <ambientLight />
      {isPresenting &&
        model.map(({position,id}) => {
          return <Model key={id} position={position} />;
        })
        }
      {isPresenting && (
        // eslint-disable-next-line react/jsx-props-no-spreading
      <Interactive onSelect={placeCube}> 
        <mesh ref={reticleRef} rotation={[ -Math.PI / 2, 0, 0 ]}>
          <ringGeometry {...{ args: [0.1, 0.25, 32] }} />
          {/* <RingGeometry /> */}
          <meshBasicMaterial color={"white"} />
        </mesh>
      </Interactive>)}
      {
        !isPresenting && <Model  />
      }
    </>
  );
}



// import Model from "./Model"
// export default function XRModel() {
//   return (
//     <>
//     <Model />
//     </>
//   )
// }



// --------------------------------------------------------------------------//
