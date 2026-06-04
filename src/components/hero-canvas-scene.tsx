"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

/** Static point field, generated once at module load (kept out of render). */
const POSITIONS = (() => {
  const count = 2600;
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 1.1 + Math.random() * 1.9;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.62;
    arr[i * 3 + 2] = r * Math.cos(phi);
  }
  return arr;
})();

/** Drifting point field that tilts toward the mouse anywhere on the page. */
function Constellation() {
  const ref = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((_, delta) => {
    const p = ref.current;
    if (!p) return;
    p.rotation.y += delta * 0.018;
    // Snappy lerp (≈0.12) toward the mouse so it tracks without lag.
    p.rotation.x = THREE.MathUtils.lerp(p.rotation.x, -mouse.current.y * 0.32, 0.12);
    p.rotation.z = THREE.MathUtils.lerp(p.rotation.z, mouse.current.x * 0.26, 0.12);
  });

  return (
    <Points ref={ref} positions={POSITIONS} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff8a64"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.85}
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
          intensity={1.1}
          luminanceThreshold={0}
          luminanceSmoothing={0.2}
          radius={0.7}
        />
      </EffectComposer>
    </Canvas>
  );
}
