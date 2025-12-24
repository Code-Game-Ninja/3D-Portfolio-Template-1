import { OrbitControls, PerspectiveCamera, Float, Environment, Stars } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export const Experience = () => {
  const meshRef = useRef()
  const groupRef = useRef()

  useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "body", // Use body or a global wrapper as trigger
            start: "top top",
            end: "bottom bottom",
            scrub: 1, // Reduced scrub delay because Lenis handles smoothing now
            // scroller property removed to use default window scroll
        }
    })

    if (groupRef.current) {
        tl.to(groupRef.current.rotation, {
            y: Math.PI * 2,
            duration: 1,
            ease: "power1.inOut" // Smoother easing
        }, 0)
        
        tl.to(groupRef.current.position, {
            x: 2,
            z: -2,
            duration: 1,
             ease: "power2.inOut" // Smoother easing
        }, 0)
    }
  })

  useFrame((state, delta) => {
    if (meshRef.current) {
        meshRef.current.rotation.x += delta * 0.2
        meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      {/* Enable rotation for interaction */}
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} /> 
      
      <Environment preset="city" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <group ref={groupRef}>
          <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh ref={meshRef}>
              <torusKnotGeometry args={[1, 0.3, 128, 16]} />
              <meshStandardMaterial 
                color="#4f46e5" 
                roughness={0.1} 
                metalness={0.8}
                emissive="#1e1b4b"
                emissiveIntensity={0.5}
              />
            </mesh>
          </Float>
      </group>
    </>
  )
}
