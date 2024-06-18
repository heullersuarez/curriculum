"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function Skills() {

    const { scrollYProgress } = useScroll();
    const xPosition = useTransform(scrollYProgress, [0.7,1], ['40%', '10%']);

    return (
        <section className="bg-light relative overflow-hidden min-h-[50vh] flex justify-center">
            <motion.div 
                style={{ x: xPosition }}
                className="text-4xl md:text-8xl uppercase font-bold text-dark text-opacity-10 
                absolute left-0 top-0 flex h-full w-full">
                    <h3 className="pt-10 md:pt-14">Habilidades</h3>
            </motion.div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-20 pt-20 md:pt-0">
                <div className="text-center font-bold text-lg">
                    <p>Design system</p> {/* design de sistemas, comunicação visual, soluções simples e minimalistas */}
                    <p>Visual communication</p>
                    <p>Simple and minimalist solutions</p>
                </div>
                <div className="text-center font-bold text-lg">
                    <p>HTML & CSS</p>
                    <p>React</p>
                    <p>Node JS</p>
                    <p>Figma</p>
                </div>
            </div>
        </section>
    );
}