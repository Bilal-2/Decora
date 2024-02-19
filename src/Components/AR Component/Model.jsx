

import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Model({ position }) {
  let { _id } = useParams();
  const [product, setProduct] = useState(null);
  const { model } = product || {};
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/ARpage/${_id}`).then(res => res.json());
        setProduct(response);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchData();
  }, [_id]);

  if (!product) {
    // Handle loading state or show an error message
    return null;
  }

  const modelUrl = model;
  const gltf = useLoader(GLTFLoader, modelUrl);

  return (
    <Suspense fallback={null}>
      <primitive position={position} object={gltf.scene} />
    </Suspense>
  );
}
