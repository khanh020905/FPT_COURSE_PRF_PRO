"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text3D, Center, Float, Environment, ContactShadows, Html, Bounds, useBounds } from "@react-three/drei";
import * as THREE from "three";

interface CourseInfo {
  code: string;
  desc: string;
  mentor: string;
}

function Logo({ 
  text, color, position, rotation, info, activeId, setActiveId, id 
}: { 
  text: string; color: string; position: [number, number, number]; rotation?: [number, number, number]; 
  info: CourseInfo;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
  id: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const bounds = useBounds();

  const isActive = activeId === id;

  useFrame((state) => {
    if (meshRef.current) {
      // Scale animation
      const targetScale = isActive ? 1.2 : hovered ? 1.1 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      // If inactive but something else is active, make it transparent/darker
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      if (activeId && !isActive) {
        material.opacity = THREE.MathUtils.lerp(material.opacity, 0.2, 0.1);
        material.transparent = true;
      } else {
        material.opacity = THREE.MathUtils.lerp(material.opacity, 1, 0.1);
        material.transparent = false;
      }
    }
  });

  const handleClick = (e: any) => {
    e.stopPropagation();
    if (isActive) {
      // Deselect
      setActiveId(null);
      // Reset camera
      bounds.refresh().fit();
    } else {
      // Select
      setActiveId(id);
      // Zoom into this object
      bounds.refresh(e.object).clip().fit();
    }
  };

  useFrame((state) => {
     // Optional: custom camera animation per object if we don't use Bounds
  });

  return (
    <Float
      speed={isActive ? 0.5 : 2} 
      rotationIntensity={isActive ? 0.1 : 0.5} 
      floatIntensity={isActive ? 0.5 : 2}
      position={position}
    >
      <Center>
        <Text3D
          ref={meshRef as any}
          font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
          size={1.5}
          height={0.4}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.05}
          bevelSize={0.05}
          bevelOffset={0}
          bevelSegments={5}
          rotation={rotation || [0, 0, 0]}
          onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
          onPointerOut={(e) => { e.stopPropagation(); setHovered(false); document.body.style.cursor = 'grab'; }}
          onClick={handleClick}
        >
          {text}
          <meshStandardMaterial 
            color={hovered || isActive ? "#ffffff" : color} 
            metalness={0.6}
            roughness={0.2}
            emissive={color}
            emissiveIntensity={isActive ? 0.5 : hovered ? 0.3 : 0.1}
          />
        </Text3D>
        
        {/* Hologram Info Panel */}
        {isActive && (
          <Html position={[0, 2, 0]} center className="pointer-events-none transition-opacity duration-500">
            <div className="w-72 bg-slate-900/80 backdrop-blur-md border border-slate-700 p-6 rounded-2xl shadow-2xl text-left transform scale-100 animate-in fade-in zoom-in-95 duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: color }}></div>
                <h3 className="text-xl font-bold text-white">{info.code}</h3>
              </div>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">{info.desc}</p>
              <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Mentor phụ trách</p>
                <p className="text-base font-semibold text-white">{info.mentor}</p>
              </div>
            </div>
          </Html>
        )}
      </Center>
    </Float>
  );
}

// BoundsWrapper to catch clicks outside to reset
function Scene() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const bounds = useBounds();

  // Handle click on empty space to deselect
  const handlePointerMissed = () => {
    if (activeId) {
      setActiveId(null);
      bounds.refresh().fit(); // View all
    }
  };

  return (
    <group onPointerMissed={handlePointerMissed}>
      <Logo 
        id="c"
        text="C" 
        color="#3b82f6" 
        position={[-6, 0, 0]} // Vị trí tách biệt
        rotation={[0, 0.3, 0]}
        info={{
          code: "C",
          desc: "Nền tảng lập trình bậc thấp, tư duy logic, cấu trúc dữ liệu và giải thuật cơ bản.",
          mentor: "Mentor Thuần"
        }}
        activeId={activeId}
        setActiveId={setActiveId}
      />
      <Logo 
        id="cpp"
        text="C++" 
        color="#6366f1" 
        position={[0, 0, 0]} // Vị trí tách biệt
        info={{
          code: "C++",
          desc: "Chinh phục Thuật toán & STL. Quản lý bộ nhớ nâng cao và hướng đối tượng.",
          mentor: "Mentor Thuần"
        }}
        activeId={activeId}
        setActiveId={setActiveId}
      />
      <Logo 
        id="java"
        text="Java" 
        color="#f97316" 
        position={[6, 0, 0]} // Vị trí tách biệt
        rotation={[0, -0.3, 0]}
        info={{
          code: "Java",
          desc: "Java OOP chuyên sâu. Xây dựng nền móng ứng dụng chuẩn thiết kế phần mềm.",
          mentor: "Mentor Khánh"
        }}
        activeId={activeId}
        setActiveId={setActiveId}
      />
    </group>
  );
}

export default function TechStack3D() {
  const [ctrlPressed, setCtrlPressed] = useState(false);

  // Lắng nghe sự kiện phím Ctrl để kích hoạt Zoom
  if (typeof window !== 'undefined') {
    window.onkeydown = (e) => { if (e.key === 'Control' || e.metaKey) setCtrlPressed(true); };
    window.onkeyup = (e) => { if (e.key === 'Control' || e.metaKey) setCtrlPressed(false); };
  }

  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing relative">
      {/* Hướng dẫn hiển thị trên UI */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-800/80 backdrop-blur border border-slate-700 text-slate-300 text-sm rounded-full pointer-events-none z-10 flex items-center gap-4 whitespace-nowrap">
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4 animate-bounce" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
          Click xem thông tin
        </span>
        <div className="w-px h-4 bg-slate-600"></div>
        <span className="flex items-center gap-1 opacity-70 text-xs">
          Giữ [Ctrl] + Lăn chuột để thu phóng
        </span>
      </div>

      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1} castShadow />
        
        {/* Environment for nice reflections */}
        <Environment preset="city" />
        
        <Bounds fit clip observe margin={1.2}>
          <Scene />
        </Bounds>

        {/* Floor shadow */}
        <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={30} blur={2.5} far={4} />

        <OrbitControls 
          makeDefault // Required for useBounds to control it
          enableZoom={ctrlPressed} 
          enablePan={false}
          autoRotate={false} /* Disabled autoRotate so clicking doesn't fly around */
          maxPolarAngle={Math.PI / 1.5} 
          minPolarAngle={Math.PI / 3}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4} // Restrict rotation to avoid losing elements
        />
      </Canvas>
    </div>
  );
}
