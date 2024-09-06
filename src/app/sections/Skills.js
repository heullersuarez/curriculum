"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function Skills() {

    const { scrollYProgress } = useScroll();
    const xPosition = useTransform(scrollYProgress, [0.7,1], ['20%', '10%']);
    const language = useSelector((state) => state.languageSlice.value);

    return (
        <section className="bg-light relative overflow-hidden h-[50vh] min-h-[400px] flex justify-center">
            <motion.div 
                style={{ x: xPosition }}
                className="text-4xl md:text-8xl uppercase font-bold text-dark text-opacity-10 
                absolute left-0 top-0 flex h-full w-full">
                    <h3 className="py-10 md:py-14">{language == "PT" ? "Habilidades": "Skills" }</h3>
            </motion.div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-20 pt-20 md:pt-0">
                <div className="text-center font-bold text-lg">
                    {
                        language == "PT" ?
                        <>
                            <p>Design de sistemas (UI)</p>
                            <p>Experiência do usuário (UX) </p>
                            <p>Soluções eficientes e minimalistas</p>
                        </>
                        :
                        <>
                            <p>System design (UI)</p>
                            <p>User experience (UX) </p>
                            <p>Efficient and minimalist solutions.</p>
                        </>
                    }
                    
                </div>
                <div className="text-center font-bold text-lg">
                    <p>React Native</p>
                    <p>React</p>
                    <p>Node JS</p>
                    <p>Figma</p>
                </div>
            </div>
        </section>
    );
}