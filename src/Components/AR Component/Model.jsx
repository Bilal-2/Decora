import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Model({position}) {
    const modleRef = useRef();
    useFrame((state,delta) => {
        modleRef.current.rotation.y += delta ;

    });
  return (
    <>
       
        <mesh ref={modleRef} position={position}>
            <boxGeometry />
            <meshStandardMaterial color={"mediumpurple"}/>
        </mesh>
    </>
  )
}



// import { useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'



// export default function Model({position}) {
//     const gltf = useLoader(GLTFLoader, '/models/model.gltf')
//     return <primitive position={position} object={gltf.scene} />
//   }