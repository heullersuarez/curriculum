"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useSelector } from "react-redux";

export default function AboutMe() {

    const { scrollYProgress } = useScroll();
    const xPosition = useTransform(scrollYProgress, [0,0.5], ['5%', '45%']);
    const language = useSelector((state) => state.languageSlice.value);
    const today = new Date();
    const age = today.getFullYear() - 1998 - (
        today.getMonth() < 5 || (today.getMonth() === 5 && today.getDate() < 15) ? 1 : 0
    );

    return (
        <section className="h-[50vh] min-h-[25rem] bg-light overflow-x-hidden flex justify-end relative">
            <motion.div 
                style={{ x: xPosition }}
                className="text-4xl md:text-8xl uppercase font-bold text-dark text-opacity-10 
                absolute left-0 flex md:items-center h-full w-full">
            <h2 className="pt-10 md:pt-0">{language == "PT"? "Sobre mim": "About me"}</h2>
            </motion.div>
            <div className="h-full md:w-1/2 flex items-center">
                <p className="w-full p-6 sm:p-10 md:p-12 text-base md:text-2xl">
                    {language == "PT"
                        ? <>
                            Tenho {age} anos e me formei em <strong>Ciência da Computação</strong> pela Universidade Federal de Lavras. Gosto de transformar <strong>problemas reais</strong> em <strong>soluções</strong> de software claras, funcionais e bem pensadas.
                        </>
                        : <>
                            I am {age} years old and graduated in <strong>Computer Science</strong> from the Federal University of Lavras. I enjoy turning <strong>real problems</strong> into clear, functional, and thoughtful software <strong>solutions</strong>.
                        </>}
                </p>
            </div>
        </section>
    );
}
