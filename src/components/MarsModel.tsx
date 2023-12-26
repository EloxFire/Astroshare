import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
// import { useDrag } from 'react-use-gesture';

interface MarsModelProps {
  scale?: number[];
}

export default function MarsModel({ scale }: MarsModelProps) {
  const ref = useRef<any>();

  // const bind = useDrag(({ offset: [x, y] }) => {
  //   if (ref.current) {
  //     ref.current.rotation.x = y / 100;
  //   }
  // })

  const texture = useLoader(THREE.TextureLoader, '/images/model/4k_mars.webp');
  const normalMap = useLoader(THREE.TextureLoader, '/images/model/4k_mars_normal.jpg');

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0015;
    }
  })

  if (!texture && !normalMap) {
    return <>Loading model...</>;
  }

  return (
    <mesh ref={ref} position={[0, 0, 0]} >
      <sphereGeometry args={[.85, 200, 200]} />
      <meshStandardMaterial map={texture} normalMap={normalMap} />
    </mesh>
  )
}