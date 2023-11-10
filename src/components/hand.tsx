"use client";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { CameraControls, useGLTF } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";

const cameraConfig = {
  fov: 75,
  near: 0.1,
  far: 1000,
  position: [0, 0, 5] as [number, number, number],
};

console.log(new THREE.PerspectiveCamera());

export default function Scene() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const canvasRef = useRef(null);

  return (
    <Canvas className="" ref={canvasRef}>
      <PerspectiveCamera {...cameraConfig} ref={cameraRef} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Hand />
      {/* <CameraControls /> */}
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
      console.log("group");
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

function Hand(props) {
  const gltf = useGLTF("/static/models/hand and chopsticks.glb");
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);
  const [test, setTest] = useState(0);
  const offset = [1.3, 0];

  useFrame((state) => {
    const damping = [0.8, 0.5];
    setPosition([
      state.pointer.x * damping[0] + offset[0],
      state.pointer.y * damping[1] + offset[1],
      3,
    ]);
  });

  useEffect(() => {
    console.log(gltf);
    function keyListener(e) {
      if (e.key === "d") {
        setTest((test) => test + 0.05);
      } else if (e.key === "a") {
        setTest((test) => test - 0.05);
      }
    }

    window.addEventListener("keydown", keyListener);
    return () => {
      window.removeEventListener("keydown", keyListener);
    };
  }, []);

  return (
    <group
      scale={[0.1, 0.1, 0.1]}
      rotation={[0, Math.PI, 0]}
      position={position}
    >
      {renderScene(gltf.scene)}
    </group>
  );
}
