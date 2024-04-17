import { Canvas } from "@react-three/fiber";
import XRModel from "./XRModel";
import { XR, ARButton } from "@react-three/xr";
import QRCode from "qrcode.react";
export default function XRModelContainer() {
  const currentURL = window.location.href;
  // Split the URL by '/' and get the last part
  const parts = currentURL.split("/");
  const productId = parts[parts.length - 1];
  const ip = "192.168.10.11";
  const productUrl = `https://${ip}:5173/AR/${productId}`;

  return (
    <div className="lg:lg:p-[3rem]  lg:flex  lg:justify-evenly">
      <div className="lg:h-[30rem] h-screen lg:rounded-lg shadow-xl lg:w-[25rem] lg:bg-black">
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
      </div>

      <div className="h-[30rem] hidden lg:block  flex-col justify-center items-center">
        <h1 className="text-[2rem]"> View In Your Space. Scan It!</h1>
        <div className="h-[25rem] flex border-2 border-black rounded-xl justify-center items-center">
          <QRCode value={productUrl} size={250} />
        </div>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------//
