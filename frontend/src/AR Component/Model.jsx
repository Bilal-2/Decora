// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { Suspense } from 'react';

// import { useParams, Link } from "react-router-dom";
// import { useGetProductDetailsQuery } from "../redux/api/productApiSlice";

// import Loader from "../components/Loader";
// import Message from "../components/Message";


// export default function Model({ position }) {
 
//   //const { model } = product || {};

//   const { id: productId } = useParams();
  

//   const { data: product, isLoading, error } = useGetProductDetailsQuery(
//     productId
//   );

 
  
//   const model = product?.model;
//   //const model = product?.model; // Optional chaining
//   console.log(model);
//   const modelUrl = model;
//   //const gltf = useLoader(GLTFLoader, modelUrl);
  

//   return (
//     // <Suspense fallback={null}>
//     //   <primitive position={position} object={gltf.scene} />
//     // </Suspense>
//      <div>{modelUrl}</div>  
    
//   );
// }

//------------------------------------------------4

// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { Suspense } from 'react';

// import { useParams, Link } from "react-router-dom";
// import { useGetProductDetailsQuery } from "../redux/api/productApiSlice";

// import Loader from "../components/Loader";
// import Message from "../components/Message";

// export default function Model({ position }) {
//   const { id: productId } = useParams();
//   const { data: product, isLoading, error } = useGetProductDetailsQuery(productId);
  
//   if (isLoading) return <Loader />; // Render loader while fetching data
//   if (error) return <Message variant="danger">{error}</Message>; // Render error message if there's an error
  
//   const model = product?.model;
//   console.log("1",model);
//   if (!model) return <Message variant="danger">Model not found!</Message>; // Render error message if model is not available

//   const modelUrl = model;
//    const gltf = useLoader(GLTFLoader, modelUrl);
//   console.log("2",model);
//   return (
//     // <Suspense fallback={null}>
//     //   <primitive position={position} object={gltf.scene} />
//     // </Suspense>
//     <div>{modelUrl}</div>  
//   );
// }

// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { useGetProductDetailsQuery } from "../redux/api/productApiSlice";
// import Loader from "../components/Loader";
// import Message from "../components/Message";
// import { model } from "mongoose";

// const Model = () => {
//   const { id: productId } = useParams();
//   const { data: product, isLoading, error } = useGetProductDetailsQuery(productId);
//   const model = product.model;

//   return (
//     <>
//       <div>
//         <Link to="/" className="text-white font-semibold hover:underline ml-[10rem]">
//           Go Back
//         </Link>
//       </div>
      

//       {isLoading ? (
//         <Loader />
//       ) : error ? (
//         <Message variant="danger">
//           {error?.data?.message || error.message}
//         </Message>
//       ) : (
//         <div className="ml-[10rem]">
//           <h2 className="text-2xl font-semibold">{model}</h2>
//         </div>
//       )}
//     </>
//   );
// };

// const Model = () => {
//   const { id: productId } = useParams();
//   const { data: product, isLoading, error } = useGetProductDetailsQuery(productId);
//   const model = product?.model; // Optional chaining

//   return (
//     <>
//       <div>
//         <Link to="/" className="text-white font-semibold hover:underline ml-[10rem]">
//           Go Back
//         </Link>
//       </div>
      

//       {isLoading ? (
//         <Loader />
//       ) : error ? (
//         <Message variant="danger">
//           {error?.data?.message || error.message}
//         </Message>
//       ) : (
//         <div className="ml-[10rem]">
//           <h2 className="text-2xl font-semibold">{model}</h2>
//         </div>
//       )}
//     </>
//   );
// };


// export default Model;





//----------------------------------5

import { Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { useParams } from 'react-router-dom';
import { useGetProductDetailsQuery } from '../redux/api/productApiSlice';

import Loader from '../components/Loader';
import Message from '../components/Message';

export default function Model({ position }) {
  const { id: productId } = useParams();
  const { data: product, isLoading, error } = useGetProductDetailsQuery(productId);

  if (isLoading) return ; // Render loader while fetching data
  if (error) return <Message variant="danger">{error}</Message>; // Render error message if there's an error

  const model = product?.model;
  if (!model) return <Message variant="danger">Model not found!</Message>; // Render error message if model is not available

  return (
    <Suspense fallback={null}>
      <ModelContent modelUrl={model} position={position} />
    </Suspense>
  );
}

function ModelContent({ modelUrl, position }) {
  const gltf = useLoader(GLTFLoader, modelUrl);

  // Render the 3D model here using gltf.scene
  // For example:
   return <primitive position={position} object={gltf.scene} />;
  return <div>{modelUrl}</div>; // Just displaying modelUrl for demonstration
}
