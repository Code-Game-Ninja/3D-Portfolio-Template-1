import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { About } from './components/About';
import { ContactModal } from './components/ContactModal';
import { useEffect, useState } from 'react';
import Lenis from 'lenis'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-black text-white selection:bg-purple-500/30">
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        
      {/* Content Layer */}
      <main className="relative z-10 w-full pointer-events-none">
          {/* Header */}
          <header className="fixed top-0 left-0 w-full p-6 z-50 mix-blend-difference pointer-events-auto">
              <nav className="flex justify-between items-center max-w-7xl mx-auto">
                  <h1 className="text-2xl font-bold font-['Outfit'] cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>PORTFOLIO.</h1>
                  <ul className="flex gap-6 text-sm font-medium tracking-widest uppercase">
                    <li onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:text-purple-400 transition-colors">About</li>
                    <li onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:text-purple-400 transition-colors">Work</li>
                    <li onClick={() => setIsModalOpen(true)} className="cursor-pointer hover:text-purple-400 transition-colors">Contact</li>
                  </ul>
              </nav>
          </header>

          <Hero onContactClick={() => setIsModalOpen(true)} />
          
          <div className="pointer-events-auto bg-black/50 backdrop-blur-sm">
             <TechStack />
             <About />
             <Projects />
          </div>
          
          <section id="contact" className="py-32 w-full flex items-center justify-center pointer-events-auto relative z-20 bg-black">
              <div className="text-center max-w-2xl px-6">
                  <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Let's build something <br /> <span className="text-purple-500">extraordinary.</span></h2>
                  <p className="text-xl text-gray-400 mb-12">Open for freelance opportunities and collaborations.</p>
                  <button onClick={() => setIsModalOpen(true)} className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all hover:scale-105">
                    Start a Project
                  </button>
              </div>
          </section>
          
          <footer className="py-8 text-center text-gray-500 text-sm pointer-events-auto">
              © {new Date().getFullYear()} Portfolio. Built with React, Three.js & GSAP.
          </footer>
      </main>
      
      {/* 3D Scene Background - Fixed */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
         <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <color attach="background" args={['#050505']} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Suspense fallback={null}>
               <Experience />
            </Suspense>
         </Canvas>
      </div>
    </div>
  );
}

export default App;
