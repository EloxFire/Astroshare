import { useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';

interface MarsModelProps {
  scale?: number[];
}

export default function MarsModel({ scale }: MarsModelProps) {

  const ref = useRef<any>();

  const texture = useLoader(THREE.TextureLoader, '/images/model/4k_mars.webp');
  const normalMap = useLoader(THREE.TextureLoader, '/images/model/test_normal.jpg');

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0015;
    }
  })

  return (
    <mesh
      ref={ref}
      position={[0, 0, 0]}
    >
      <sphereGeometry args={[.8, 200, 200]} />
      <meshStandardMaterial
        map={texture}
        normalMap={normalMap}
      />
    </mesh>
  )
}