"use client";

import * as THREE from "three";
import { Vector3 } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { PerspectiveCamera, useGLTF } from "@react-three/drei";

const cameraConfig = {
  fov: 75,
  near: 0.1,
  far: 1000,
  position: [0, 0, 5] as [number, number, number],
};

export default function Scene() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMouseInside, setIsMouseInside] = useState(false);

  return (
    <Canvas
      className=""
      ref={canvasRef}
      onMouseEnter={() => setIsMouseInside(true)}
      onMouseLeave={() => setIsMouseInside(false)}
    >
      <PerspectiveCamera {...cameraConfig} ref={cameraRef} />
      <ambientLight />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <Hand shouldFollow={isMouseInside} />
    </Canvas>
  );
}

// this function should take in a group, and render all meshes inside that group.
// should also work recursively, so that it can render groups inside groups.
function renderScene(scene) {
  const meshes = [];
  for (let i = 0; i < scene.children.length; i++) {
    const child = scene.children[i];
    if (child.type === "Group") {
      meshes.push(<group key={i}>{renderScene(child)}</group>);
    } else if (
      child.type === "Mesh" ||
      child.type === "SkinnedMesh" ||
      child.type === "Object3D"
    ) {
      meshes.push(
        <mesh key={i} geometry={child.geometry} material={child.material} />
      );
    }
  }
  return meshes;
}

function Hand({ shouldFollow }: { shouldFollow: boolean }) {
  const gltf = useGLTF("/static/models/hand and chopsticks.glb");
  const ref = useRef<THREE.Group>(null);

  const damping = new Vector3(0.8, 0.5, 0);
  const restPosition = new Vector3(1.6, -0.4, 3);

  useFrame((state) => {
    if (!ref.current) return;

    if (shouldFollow) {
      const mouseOffset = new Vector3(1.3, 0, 3);
      const mouse = new Vector3(state.pointer.x, state.pointer.y, 0);
      const followOffset = new Vector3().copy(mouse).multiply(damping);
      const newPosition = new Vector3().copy(mouseOffset).add(followOffset);
      ref.current.position.lerp(newPosition, 0.1);
    } else {
      ref.current.position.lerp(restPosition, 0.1);
    }
  });

  return (
    <group scale={[0.1, 0.1, 0.1]} rotation={[0, Math.PI, 0]} ref={ref}>
      {renderScene(gltf.scene)}
    </group>
  );
}
