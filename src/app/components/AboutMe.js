"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutMe() {

    const { scrollYProgress } = useScroll();
    const xPosition = useTransform(scrollYProgress, [0,1], ['0%', '70%']);

    return (
        <section className="h-1/2 bg-light overflow-x-hidden flex justify-between items-center">
            <motion.div 
                style={{ x: xPosition }}
                className="text-9xl uppercase font-bold text-dark text-opacity-10">
                    Sobre mim
            </motion.div>
            <div className="h-full w-1/2 flex items-center">
                <p className="w-2/3 text-xl">
                    Proident enim occaecat commodo dolore officia eu amet.
                    Proident enim occaecat commodo dolore officia eu amet.
                </p>
            </div>
        </section>
    );
}