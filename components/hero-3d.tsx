"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

function AnimatedSphere({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  )
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)

  // Generate random positions for particles
  const particleCount = 1000
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#8b5cf6" size={0.02} sizeAttenuation={true} depthWrite={false} />
    </Points>
  )
}

export function Hero3D() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -10]} color="#8b5cf6" />

      <ParticleField />

      <AnimatedSphere position={[-3, 2, -2]} color="#3b82f6" />
      <AnimatedSphere position={[3, -1, -1]} color="#8b5cf6" />
      <AnimatedSphere position={[0, 3, -3]} color="#06b6d4" />
      <AnimatedSphere position={[-2, -2, 1]} color="#10b981" />
    </>
  )
}
