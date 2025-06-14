"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Torus, Box } from "@react-three/drei"
import type * as THREE from "three"

function CyberTorus({ position, color }: { position: [number, number, number]; color: string }) {
  const torusRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.3
      torusRef.current.rotation.y = state.clock.elapsedTime * 0.5
      torusRef.current.rotation.z = state.clock.elapsedTime * 0.2
      torusRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.3
    }
  })

  return (
    <Torus ref={torusRef} position={position} args={[1, 0.3, 16, 32]}>
      <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.2} />
    </Torus>
  )
}

function CyberCube({ position, color }: { position: [number, number, number]; color: string }) {
  const cubeRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x = state.clock.elapsedTime * 0.4
      cubeRef.current.rotation.y = state.clock.elapsedTime * 0.6
      cubeRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime) * 0.5
    }
  })

  return (
    <Box ref={cubeRef} position={position} args={[0.8, 0.8, 0.8]}>
      <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.3} />
    </Box>
  )
}

function NeonParticles() {
  const pointsRef = useRef<THREE.Points>(null)

  const particleCount = 2000
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#00ffff" size={0.05} sizeAttenuation={true} depthWrite={false} />
    </Points>
  )
}

export function CyberpunkHero3D() {
  return (
    <>
      <ambientLight intensity={0.3} color="#001122" />
      <pointLight position={[10, 10, 10]} color="#00ffff" intensity={2} />
      <pointLight position={[-10, -10, -10]} color="#ff00ff" intensity={2} />
      <pointLight position={[0, 0, 15]} color="#ffff00" intensity={1} />

      <NeonParticles />

      <CyberTorus position={[-4, 2, -3]} color="#00ffff" />
      <CyberTorus position={[4, -1, -2]} color="#ff00ff" />
      <CyberTorus position={[0, 3, -4]} color="#ffff00" />

      <CyberCube position={[-2, -2, 2]} color="#00ff00" />
      <CyberCube position={[3, 2, 1]} color="#ff0080" />
      <CyberCube position={[-3, 1, -1]} color="#8000ff" />
    </>
  )
}
