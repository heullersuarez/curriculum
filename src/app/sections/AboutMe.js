"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useSelector } from "react-redux";

export default function AboutMe() {

    const { scrollYProgress } = useScroll();
    const xPosition = useTransform(scrollYProgress, [0,0.5], ['5%', '45%']);
    const language = useSelector((state) => state.languageSlice.value);

    return (
        <section className="h-[50vh] min-h-[25rem] bg-light overflow-x-hidden flex justify-end relative">
            <motion.div 
                style={{ x: xPosition }}
                className="text-4xl md:text-8xl uppercase font-bold text-dark text-opacity-10 
                absolute left-0 flex md:items-center h-full w-full">
                    <h3 className="pt-10 md:pt-0">{language == "PT"? "Sobre mim": "About me"}</h3>
            </motion.div>
            <div className="h-full md:w-1/2 flex items-center">
                <p className="w-full p-12 text-xs md:text-2xl">
                    {language == "PT"? "Desenvolver aplicações simples e eficientes sem deixar o design e a experiência do usuário de lado é o que me motiva.": "Developing simple and efficient applications without neglecting design and user experience is what motivates me."}
                </p>
            </div>
        </section>
    );
}