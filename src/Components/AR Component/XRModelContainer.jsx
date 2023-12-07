import { Canvas } from "@react-three/fiber"
import XRModel from "./XRModel"
import {XR,ARButton} from "@react-three/xr"
export default function XRModelContainer() {
  return (
    <>
        <ARButton />
        <Canvas>
            <XR>
            <XRModel />
            </XR>
                
        </Canvas>

    </>
  )
}
