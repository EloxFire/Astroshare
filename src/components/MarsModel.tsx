import React, { useRef } from 'react';

import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

interface MarsModelProps {
  scale: number[];
}

export default function MarsModel({ scale }: MarsModelProps) {
  const gltf = useLoader(GLTFLoader, '/images/mars.glb');
  const modelRef = useRef<any>();

  // console.log(gltf);

  if (gltf.scene) {
    gltf.scene.scale.set(0.0095, 0.0095, 0.0095);
  }
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.0015;
    }
  });

  return <primitive ref={modelRef} object={gltf.scene} scale={scale} />;
}