// import { useFrame } from "@react-three/fiber";
// import { useRef } from "react";

// export default function Model({position}) {
//     const modleRef = useRef();
//     useFrame((state,delta) => {
//         modleRef.current.rotation.y += delta ;

//     });
//   return (
//     <>
       
//         <mesh ref={modleRef} position={position}>
//             <boxGeometry />
//             <meshStandardMaterial color={"mediumpurple"}/>
//         </mesh>
//     </>
//   )
// }



 import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from 'react'



export default function Model({position}) {
    //new line 
    const modelUrl = "http://localhost:5000/uploads/1708109189543-Chair0.glb";
    const gltf = useLoader(GLTFLoader,modelUrl)
    // const gltf = useLoader(GLTFLoader, './models/Chair0.glb')

    return(
        <Suspense fallback={null}>
            <primitive position={position} object={gltf.scene} />
        </Suspense>
    );
     
  }