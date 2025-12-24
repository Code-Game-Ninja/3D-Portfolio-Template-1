import React, { useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const ContactModal = ({ isOpen, onClose }) => {
    const modalRef = useRef();
    const overlayRef = useRef();
    const contentRef = useRef();

    useGSAP(() => {
        if (isOpen) {
            gsap.to(overlayRef.current, {
                opacity: 1,
                duration: 0.5,
                pointerEvents: 'auto',
                ease: "power2.out"
            });
            gsap.fromTo(contentRef.current, 
                { y: 50, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 0.5, delay: 0.1, ease: "back.out(1.2)" }
            );
        } else {
            gsap.to(overlayRef.current, {
                opacity: 0,
                duration: 0.4,
                pointerEvents: 'none',
                ease: "power2.in"
            });
            gsap.to(contentRef.current, {
                y: 20,
                opacity: 0,
                scale: 0.95,
                duration: 0.4,
                ease: "power2.in"
            });
        }
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Construct mailto link
        const subject = `Project Inquiry from ${data.name}`;
        const body = `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
        window.location.href = `mailto:your.email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Optional: Close modal after short delay
        setTimeout(() => onClose(), 1000);
    };

    return (
        <div ref={overlayRef} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm opacity-0 pointer-events-none">
            <div ref={contentRef} className="w-full max-w-lg bg-neutral-900 border border-white/10 p-8 rounded-2xl shadow-2xl relative mx-4">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                    <X size={24} />
                </button>
                
                <h3 className="text-3xl font-bold mb-2">Let's Talk</h3>
                <p className="text-gray-400 mb-6">Tell me about your project.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                        <input required name="name" type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors text-white" placeholder="John Doe" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                        <input required name="email" type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors text-white" placeholder="john@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                        <textarea required name="message" rows="4" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors text-white resize-none" placeholder="I have an idea..."></textarea>
                    </div>
                    
                    <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-all active:scale-95 flex items-center justify-center gap-2">
                        Send Message <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
    );
};
