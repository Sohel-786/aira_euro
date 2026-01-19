"use client";

import { Suspense, useState, useRef, useEffect } from "react";
import { Box3, Vector3 } from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface Product3DViewerProps {
  modelPath: string;
  fallbackImage: string;
}

// Component to handle model loading and rotation
function Model({ 
  modelPath, 
  onLoaded, 
  isDragging, 
  setIsDragging,
  onModelClick 
}: { 
  modelPath: string; 
  onLoaded: () => void;
  isDragging: boolean;
  setIsDragging: (value: boolean) => void;
  onModelClick?: (point: Vector3) => void;
}) {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef<THREE.Group>(null);
  const { raycaster, camera, gl } = useThree();

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

  // Handle click on model for zoom-to-point
  useEffect(() => {
    if (!onModelClick || !modelRef.current) return;

    let dragStartTime = 0;
    let isDraggingClick = false;

    const handleMouseDown = () => {
      dragStartTime = Date.now();
      isDraggingClick = false;
    };

    const handleMouseMove = () => {
      if (Date.now() - dragStartTime > 50) {
        isDraggingClick = true;
      }
    };

    const handleClick = (event: MouseEvent) => {
      // Don't zoom if user was dragging
      if (isDraggingClick || isDragging) return;

      const rect = gl.domElement.getBoundingClientRect();
      const mouse = new THREE.Vector2();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      
      const intersects = raycaster.intersectObject(modelRef.current!, true);
      if (intersects.length > 0) {
        const point = intersects[0].point;
        onModelClick(point);
      }
    };

    gl.domElement.addEventListener('mousedown', handleMouseDown);
    gl.domElement.addEventListener('mousemove', handleMouseMove);
    gl.domElement.addEventListener('click', handleClick);
    
    return () => {
      gl.domElement.removeEventListener('mousedown', handleMouseDown);
      gl.domElement.removeEventListener('mousemove', handleMouseMove);
      gl.domElement.removeEventListener('click', handleClick);
    };
  }, [onModelClick, isDragging, raycaster, camera, gl]);

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

// Component to handle camera animation for zoom-to-point
function CameraController({ targetPoint, controlsRef }: { targetPoint: Vector3 | null; controlsRef: React.RefObject<any> }) {
  const { camera } = useThree();
  
  useEffect(() => {
    if (!targetPoint || !controlsRef.current) return;

    const controls = controlsRef.current;
    const startPosition = camera.position.clone();
    const startTarget = controls.target.clone();
    
    // Calculate direction from current camera position to target point
    const direction = new THREE.Vector3().subVectors(targetPoint, startPosition).normalize();
    
    // Calculate new camera position (closer to the point)
    const distance = Math.min(startPosition.distanceTo(targetPoint) * 0.5, 2);
    const newPosition = new THREE.Vector3().addVectors(targetPoint, direction.multiplyScalar(distance));
    
    // Animate camera
    const duration = 1000; // 1 second
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      camera.position.lerpVectors(startPosition, newPosition, easeOut);
      controls.target.lerpVectors(startTarget, targetPoint, easeOut);
      controls.update();
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }, [targetPoint, camera, controlsRef]);

  return null;
}

export default function Product3DViewer({ modelPath, fallbackImage }: Product3DViewerProps) {
  const [modelLoaded, setModelLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [targetPoint, setTargetPoint] = useState<Vector3 | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<any>(null);

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
            onModelClick={(point) => {
              if (!isDragging) {
                  setTargetPoint(point);
              }
            }}
          />

          {/* Camera Controller for zoom-to-point */}
          <CameraController 
            targetPoint={targetPoint} 
            controlsRef={controlsRef}
            onAnimationComplete={() => setTargetPoint(null)}
          />

          {/* Orbit Controls - Allow rotation, zoom, and pan */}
          <OrbitControls
            ref={controlsRef}
            enableZoom={true}
            enablePan={true}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={2 * Math.PI / 3}
            autoRotate={false}
            dampingFactor={0.05}
            rotateSpeed={0.8}
            panSpeed={0.8}
            minDistance={1.5}
            maxDistance={8}
            zoomSpeed={1.2}
            onStart={() => setIsDragging(true)}
            onEnd={() => setIsDragging(false)}
          />
        </Canvas>
      </Suspense>

      {/* Instructions overlay */}
      <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg">
        <div className="flex items-center justify-between">
          <span>Drag to rotate • Right-click drag to pan • Scroll to zoom • Click to zoom in</span>
          {!modelLoaded && <span className="text-primary">Loading 3D model...</span>}
        </div>
      </div>
    </div>
  );
}

