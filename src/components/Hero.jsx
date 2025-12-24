import React from 'react';
import { cn } from '../lib/utils';
import { ArrowDown } from 'lucide-react';

export const Hero = ({ onContactClick }) => {
    return (
        <section className="min-h-screen w-full flex flex-col justify-center items-start p-10 md:p-20 select-none pointer-events-none">
            <div className="z-10 pointer-events-auto max-w-4xl">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white backdrop-blur-xl mb-6 animate-fade-in-up">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                    Available for work
                </div>
                
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 animate-fade-in-up delay-100 mix-blend-difference">
                    Building <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                        Digital Reality
                    </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-400 max-w-xl mb-10 leading-relaxed animate-fade-in-up delay-200">
                    I'm a creative developer crafting immersive 3D experiences and high-performance web applications.
                </p>
                
                <div className="flex gap-4 animate-fade-in-up delay-300">
                    <button 
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                    >
                        View Projects <ArrowDown className="w-4 h-4" />
                    </button>
                    <button 
                        onClick={onContactClick}
                        className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
                    >
                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    )
}
