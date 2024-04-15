import { Canvas } from "@react-three/fiber";
import XRModel from "./XRModel";
import { XR, ARButton } from "@react-three/xr";
export default function XRModelContainer() {
  return (
    <>
      <div className="md:hidden lg:hidden  block">
        <ARButton
          sessionInit={{
            requiredFeatures: ["hit-test"],
          }}
        />
      </div>
      <Canvas>
        <XR>
          <XRModel />
        </XR>
      </Canvas>
    </>
  );
}

// import XRModel from "./XRModel"

// export default function XRModelContainer() {
//   return (
//     <>
//       <XRModel />
//     </>
//   )
// }




// --------------------------------------------------------------------------//

