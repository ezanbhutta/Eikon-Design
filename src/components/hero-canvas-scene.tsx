"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

/** A slowly drifting field of points, with subtle pointer parallax. */
function Constellation() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 3200;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.1 + Math.random() * 1.9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    const p = ref.current;
    if (!p) return;
    p.rotation.y += delta * 0.03;
    p.rotation.x = THREE.MathUtils.lerp(p.rotation.x, -state.pointer.y * 0.18, 0.04);
    p.rotation.z = THREE.MathUtils.lerp(p.rotation.z, state.pointer.x * 0.12, 0.04);
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff8a64"
        size={0.022}
        sizeAttenuation
        depthWrite={false}
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
    >
      <Constellation />
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={1.5}
          luminanceThreshold={0}
          luminanceSmoothing={0.2}
          radius={0.75}
        />
      </EffectComposer>
    </Canvas>
  );
}
