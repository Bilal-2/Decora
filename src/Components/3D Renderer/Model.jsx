import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Model() {
    const modleRef = useRef();
    useFrame((state,delta) => {
        modleRef.current.rotation.y += delta ;

    });
  return (
    <>
        <OrbitControls />
        <ambientLight/>
        <mesh ref={modleRef}>
            <boxGeometry />
            <meshStandardMaterial color={"mediumpurple"}/>
        </mesh>
    </>
  )
}
