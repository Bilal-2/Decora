import { Canvas } from "@react-three/fiber"
import Model from "./model"
export default function ModelContainer() {
  return (
    <>
        <Canvas>
            <Model />
        </Canvas>

    </>
  )
}
