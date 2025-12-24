import React from 'react';

export const About = () => {
    return (
        <section id="about" className="py-20 max-w-7xl mx-auto px-6 relative z-20 pointer-events-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-6">About Me</h2>
                    <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                        I am a passionate creative developer with a knack for building immersive web experiences. 
                        With a background in both design and engineering, I bridge the gap between aesthetics and functionality.
                    </p>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        My journey started with simple HTML pages and evolved into building complex 3D worlds using WebGL.
                        I believe in the power of the web to tell stories and connect people.
                    </p>
                    
                    <div className="flex gap-8">
                        <div>
                            <h4 className="text-3xl font-bold text-white">5+</h4>
                            <span className="text-sm text-gray-500 uppercase tracking-widest">Years Exp</span>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-white">50+</h4>
                            <span className="text-sm text-gray-500 uppercase tracking-widest">Projects</span>
                        </div>
                         <div>
                            <h4 className="text-3xl font-bold text-white">20+</h4>
                            <span className="text-sm text-gray-500 uppercase tracking-widest">Awards</span>
                        </div>
                    </div>
                </div>
                
                <div className="relative">
                     <div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                         <img 
                            src="https://placehold.co/600x600/222/fff?text=Photo" 
                            alt="Portrait" 
                            className="w-full h-full object-cover"
                         />
                     </div>
                     <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
                     <div className="absolute -top-6 -left-6 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>
        </section>
    )
}
