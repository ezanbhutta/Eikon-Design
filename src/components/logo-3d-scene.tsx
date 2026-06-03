"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, RoundedBox } from "@react-three/drei";

/**
 * A real-time 3D rendition of the Eikon mark — a rounded "squircle" lit
 * from both sides (pink + coral point lights) to echo the brand gradient,
 * with three white bars in relief. Drag to spin. Loaded client-only via
 * the wrapper in logo-3d.tsx (Three.js can't server-render).
 */
export default function LogoScene({ autoRotate = true }: { autoRotate?: boolean }) {
  const bars = [0.46, 0, -0.46];

  return (
    <Canvas
      camera={{ position: [0, 0, 5.4], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 5, 6]} intensity={2.4} />
      <pointLight position={[-5, -1, 3]} intensity={40} color="#ff4f93" />
      <pointLight position={[5, 3, 4]} intensity={28} color="#ff6b4c" />

      <Float
        speed={autoRotate ? 1.4 : 0}
        rotationIntensity={autoRotate ? 0.45 : 0}
        floatIntensity={autoRotate ? 0.7 : 0}
      >
        <group>
          <RoundedBox args={[2.3, 2.3, 0.42]} radius={0.52} smoothness={8}>
            <meshStandardMaterial color="#ff5a59" metalness={0.35} roughness={0.32} />
          </RoundedBox>
          {bars.map((y, i) => (
            <RoundedBox
              key={y}
              args={[i === 2 ? 1.0 : 1.18, 0.18, 0.16]}
              radius={0.08}
              smoothness={4}
              position={[-0.05, y, 0.27]}
            >
              <meshStandardMaterial
                color="#ffffff"
                metalness={0.1}
                roughness={0.5}
                emissive="#ffffff"
                emissiveIntensity={0.06}
              />
            </RoundedBox>
          ))}
        </group>
      </Float>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={autoRotate}
        autoRotateSpeed={1.1}
        enableDamping
        minPolarAngle={Math.PI / 2 - 0.7}
        maxPolarAngle={Math.PI / 2 + 0.7}
      />
    </Canvas>
  );
}
