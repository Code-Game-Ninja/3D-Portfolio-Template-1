import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { Code, Layout, Smartphone, Globe } from "lucide-react";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen py-20 w-full relative z-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
                Featured Work
            </h2>
            <BentoGrid className="max-w-6xl mx-auto px-4">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </section>
    );
};

const Skeleton = ({ img }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 overflow-hidden">
        {img && <img src={img} alt="preview" className="w-full h-full object-cover opacity-50 hover:opacity-80 transition-opacity" />}
    </div>
);

const items = [
    {
        title: "Neon Cyber Interface",
        description: "Immersive 3D web experience with WebGL shaders and reactance.",
        header: <Skeleton img="https://placehold.co/600x400/1e1b4b/fff?text=Neon+Cyber" />,
        icon: <Globe className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Eco Analytics Dashboard",
        description: "Real-time data visualization for environmental metrics.",
        header: <Skeleton img="https://placehold.co/600x400/064e3b/fff?text=Eco+Dash" />,
        icon: <Layout className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Cosmic Voyager App",
        description: "Educational Solar System exploration tool built with React Native.",
        header: <Skeleton img="https://placehold.co/600x400/4c1d95/fff?text=Space+Voyager" />,
        icon: <Smartphone className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "AI Image Generator",
        description: "SaaS platform for generating assets using Stable Diffusion models.",
        header: <Skeleton img="https://placehold.co/800x400/991b1b/fff?text=AI+Generator" />,
        icon: <Code className="h-4 w-4 text-neutral-500" />,
    },
];
