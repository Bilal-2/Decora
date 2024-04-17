import { Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { useParams } from 'react-router-dom';
import { useGetProductDetailsQuery } from '../redux/api/productApiSlice';

//import Loader from '../components/Loader';
import Message from '../components/Message';

export default function Model({ position }) {
  const { id: productId } = useParams();
  const { data: product, isLoading, error } = useGetProductDetailsQuery(productId);

  if (isLoading) return ; // Render loader while fetching data
  if (error) return <Message variant="danger">{error}</Message>; // Render error message if there's an error

  const model =product.model;
  console.log("model",model);
  if (!model) return <Message variant="danger">Model not found!{error}</Message>; // Render error message if model is not available

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
   return (

     <primitive 
      position={position}
      object={gltf.scene}
      position-y={0}
       />
     );
    
 // return <div>{modelUrl}</div>; // Just displaying modelUrl for demonstration
}




// --------------------------------------------------------------------------//
