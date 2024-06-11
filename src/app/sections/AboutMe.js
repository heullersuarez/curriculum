"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutMe() {

    const { scrollYProgress } = useScroll();
    const xPosition = useTransform(scrollYProgress, [0,0.5], ['0%', '30%']);

    return (
        <section className="h-[50vh] bg-light overflow-x-hidden flex justify-end relative">
            <motion.div 
                style={{ x: xPosition }}
                className="text-4xl md:text-8xl uppercase font-bold text-dark text-opacity-10 
                absolute left-0 flex md:items-center h-full w-full">
                    <p className="pt-10 md:pt-0">Sobre mim</p>
            </motion.div>
            <div className="h-full w-10/12 md:w-1/2 flex items-center">
                <p className="w-full p-2 md:p-12 text-sm md:text-xl">
                    Proident enim occaecat commodo dolore officia eu amet.
                    Proident enim occaecat commodo dolore officia eu amet.
                </p>
            </div>
        </section>
    );
}