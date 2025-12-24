import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export const Robot = () => {
  const headRef = useRef()
  const leftArmRef = useRef()
  const rightArmRef = useRef()

  // Animate robot parts
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    // Head bobbing and rotation
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(time * 0.5) * 0.3
      headRef.current.position.y = 0.8 + Math.sin(time * 2) * 0.05
    }
    
    // Arms waving
    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = Math.sin(time * 1.5) * 0.3
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = Math.sin(time * 1.5) * -0.3
    }
  })

  return (
    <group>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.8, 1, 0.6]} />
        <meshStandardMaterial color="#3b82f6" roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Head */}
      <group ref={headRef} position={[0, 0.8, 0]}>
        <mesh>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial color="#60a5fa" roughness={0.3} metalness={0.6} />
        </mesh>
        
        {/* Eyes */}
        <mesh position={[-0.15, 0.1, 0.31]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial 
            color="#fbbf24" 
            emissive="#fbbf24" 
            emissiveIntensity={1}
          />
        </mesh>
        <mesh position={[0.15, 0.1, 0.31]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial 
            color="#fbbf24" 
            emissive="#fbbf24" 
            emissiveIntensity={1}
          />
        </mesh>

        {/* Antenna */}
        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.3, 8]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.9} />
        </mesh>
        <mesh position={[0, 0.55, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial 
            color="#ef4444" 
            emissive="#ef4444" 
            emissiveIntensity={0.8}
          />
        </mesh>
      </group>

      {/* Left Arm */}
      <group ref={leftArmRef} position={[-0.5, 0.3, 0]}>
        <mesh>
          <cylinderGeometry args={[0.1, 0.1, 0.8, 8]} />
          <meshStandardMaterial color="#2563eb" roughness={0.3} metalness={0.6} />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.5, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#1e40af" roughness={0.3} metalness={0.6} />
        </mesh>
      </group>

      {/* Right Arm */}
      <group ref={rightArmRef} position={[0.5, 0.3, 0]}>
        <mesh>
          <cylinderGeometry args={[0.1, 0.1, 0.8, 8]} />
          <meshStandardMaterial color="#2563eb" roughness={0.3} metalness={0.6} />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.5, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#1e40af" roughness={0.3} metalness={0.6} />
        </mesh>
      </group>

      {/* Left Leg */}
      <mesh position={[-0.25, -0.8, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.6, 8]} />
        <meshStandardMaterial color="#1e3a8a" roughness={0.3} metalness={0.6} />
      </mesh>
      <mesh position={[-0.25, -1.15, 0]}>
        <boxGeometry args={[0.25, 0.1, 0.35]} />
        <meshStandardMaterial color="#1e293b" roughness={0.5} metalness={0.7} />
      </mesh>

      {/* Right Leg */}
      <mesh position={[0.25, -0.8, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.6, 8]} />
        <meshStandardMaterial color="#1e3a8a" roughness={0.3} metalness={0.6} />
      </mesh>
      <mesh position={[0.25, -1.15, 0]}>
        <boxGeometry args={[0.25, 0.1, 0.35]} />
        <meshStandardMaterial color="#1e293b" roughness={0.5} metalness={0.7} />
      </mesh>

      {/* Chest Panel - Detail */}
      <mesh position={[0, 0.1, 0.31]}>
        <boxGeometry args={[0.4, 0.5, 0.02]} />
        <meshStandardMaterial color="#1e40af" roughness={0.2} metalness={0.8} />
      </mesh>
    </group>
  )
}
