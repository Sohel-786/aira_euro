"use client";

import { Suspense, useState, useRef, useEffect } from "react";
import { Box3, Vector3 } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface Product3DViewerProps {
  modelPath: string;
  fallbackImage: string;
}

// Component to handle model loading and rotation
function Model({ modelPath, onLoaded, isDragging, setIsDragging }: { 
  modelPath: string; 
  onLoaded: () => void;
  isDragging: boolean;
  setIsDragging: (value: boolean) => void;
}) {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef<THREE.Group>(null);

  // Auto-rotate when not being dragged
  useFrame((state, delta) => {
    if (modelRef.current && !isDragging) {
      // Auto-rotate
      modelRef.current.rotation.y += delta * 0.5; // Rotate at 0.5 radians per second
    }
  });

  // Set up lighting and materials
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          // Enhance material properties
          if (child.material instanceof THREE.MeshStandardMaterial) {
            child.material.metalness = 0.7;
            child.material.roughness = 0.3;
            child.material.needsUpdate = true;
          }
        }
      });
      onLoaded();
    }
  }, [scene, onLoaded]);

  // Calculate scale based on model size to ensure it fits well
  useEffect(() => {
    if (scene && modelRef.current) {
      const box = new THREE.Box3().setFromObject(scene);
      const size = box.getSize(new THREE.Vector3() as Vector3);
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = maxDim > 0 ? 2.5 / maxDim : 1;
      modelRef.current.scale.set(scale, scale, scale);
    }
  }, [scene]);

  return (
    <group ref={modelRef}>
      <primitive object={scene} />
    </group>
  );
}

// Loading fallback component
function LoadingFallback({ imagePath }: { imagePath: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center p-8">
        <img
          src={imagePath}
          alt="Product loading"
          className="w-full h-full object-contain"
          style={{
            filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))',
            imageRendering: 'auto' as const
          }}
          onLoad={(e) => {
            // Ensure the image is displayed with transparent background handling
            const img = e.currentTarget;
            img.style.background = 'transparent';
          }}
        />
      </div>
    </div>
  );
}

export default function Product3DViewer({ modelPath, fallbackImage }: Product3DViewerProps) {
  const [modelLoaded, setModelLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.src = fallbackImage;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(true); // Show even if image fails to load
  }, [fallbackImage]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl overflow-hidden shadow-xl"
      style={{ width: '480px', maxWidth: '100%', height: '650px' }}
    >
      {/* Show fallback image until 3D model is loaded */}
      {(!modelLoaded || !imageLoaded) && (
        <LoadingFallback imagePath={fallbackImage} />
      )}

      {/* 3D Model Canvas */}
      <Suspense fallback={<LoadingFallback imagePath={fallbackImage} />}>
        <Canvas
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${modelLoaded ? 'opacity-100' : 'opacity-0'}`}
          shadows
          gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
        >
          {/* Professional lighting setup */}
          <ambientLight intensity={0.6} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <directionalLight position={[-5, 3, -5]} intensity={0.4} />
          <pointLight position={[0, 10, 0]} intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.3}
            penumbra={0.5}
            intensity={0.8}
            castShadow
          />

          {/* Environment for realistic reflections */}
          <Environment preset="studio" />

          {/* Camera - Adjusted for larger viewport */}
          <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={45} />

          {/* 3D Model */}
          <Model 
            modelPath={modelPath} 
            onLoaded={() => setModelLoaded(true)}
            isDragging={isDragging}
            setIsDragging={setIsDragging}
          />

          {/* Orbit Controls - Allow rotation but disable zoom */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={2 * Math.PI / 3}
            autoRotate={false}
            dampingFactor={0.05}
            rotateSpeed={0.8}
            onStart={() => setIsDragging(true)}
            onEnd={() => setIsDragging(false)}
          />
        </Canvas>
      </Suspense>

      {/* Instructions overlay */}
      <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg">
        <div className="flex items-center justify-between">
          <span>Drag to rotate • Auto-rotating</span>
          {!modelLoaded && <span className="text-primary">Loading 3D model...</span>}
        </div>
      </div>
    </div>
  );
}

