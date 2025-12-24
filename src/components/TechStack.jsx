import { cn } from "../lib/utils";

const techs = [
    "React", "Three.js", "Next.js", "TailwindCSS", "Node.js", "TypeScript", "WebGL", "GSAP", "Blender", "PostgreSQL"
];

export const TechStack = () => {
    return (
        <div className="py-20 flex flex-col items-center justify-center overflow-hidden bg-black relative z-20">
            <h3 className="text-xl font-bold text-gray-500 mb-8 uppercase tracking-widest text-center">Tech Stack</h3>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <div className="flex w-full overflow-hidden mask-image-linear-gradient">
                     <div className="flex animate-marquee gap-8 whitespace-nowrap py-4">
                        {techs.map((tech) => (
                             <span key={tech} className="text-4xl md:text-6xl font-bold text-neutral-800 hover:text-white transition-colors cursor-default">
                                 {tech}
                             </span>
                        ))}
                         {techs.map((tech) => (
                             <span key={`${tech}-2`} className="text-4xl md:text-6xl font-bold text-neutral-800 hover:text-white transition-colors cursor-default">
                                 {tech}
                             </span>
                        ))}
                     </div>
                </div>
            </div>
        </div>
    )
}
