"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Project(props) {
    const imagesRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");
        const updateViewport = () => setIsDesktop(mediaQuery.matches);
        updateViewport();
        mediaQuery.addEventListener("change", updateViewport);
        return () => mediaQuery.removeEventListener("change", updateViewport);
    }, []);

    const { scrollYProgress } = useScroll({
        target: imagesRef,
        offset: ["start end", "end start"],
    });
    const phoneOffset = useTransform(scrollYProgress, [0, 1], isDesktop ? [-180, 460] : [-80, 80]);
    const secondPhoneOffset = useTransform(phoneOffset, (value) => value * -0.6);

    return (
        <article className={`relative z-20 ${props.background} min-h-screen flex flex-col md:grid md:grid-cols-2 md:min-h-[35rem] lg:min-h-[45rem]`}>
            <div className="md:h-full md:grid md:grid-rows-2">
                <div className={`flex flex-col md:justify-end items-end ${props.color}`}>
                    <div className="p-4 md:p-0 md:w-8/12">
                        <h3 className="text-2xl py-10 md:text-5xl uppercase font-black">{props.title}</h3>
                            <p className="md:text-lg pb-10 uppercase font-black">{props.tags}</p>
                            <p className="md:text-lg">
                                {props.description}
                            </p>
                    </div>
                </div>
            </div>
            <div className={props.staticImage1 ? "flex flex-1 flex-col md:block" : ""}>
                <div ref={imagesRef} className={`relative ${props.staticImage1 ? "mt-0 flex-1 min-h-[17rem] w-full flex items-end justify-end overflow-visible md:mt-0 md:flex-none" : "-mt-4 h-[70vh] min-h-[26rem] w-full overflow-visible sm:w-4/5 xl:w-4/5 md:-mt-24"} md:h-full md:min-h-[35rem] lg:min-h-[45rem] md:w-full md:overflow-visible`}>
                    {props.image1 && (
                        <motion.div
                            className={props.staticImage1
                                ? "static-project-image ml-auto mt-auto mb-0 w-2/3 self-end sm:w-1/2 md:w-[80%] xl:w-[56%]"
                                : "absolute right-[8%] top-20 z-10 w-[48%] md:right-[6%] md:top-6 md:w-[48%]"}
                            initial={props.staticImage1 ? { opacity: 0, y: 44, scale: 0.96 } : false}
                            whileInView={props.staticImage1 ? { opacity: 1, y: 20, scale: 1 } : undefined}
                            viewport={props.staticImage1 ? { once: false, amount: 0.25 } : undefined}
                            transition={props.staticImage1 ? { duration: 0.7, ease: "easeOut" } : undefined}
                            style={props.staticImage1 ? undefined : { y: phoneOffset }}>
                            <Image
                                className="w-full h-auto"
                                src={props.image1}
                                width={1080}
                                height={1080}
                                alt={props.image1Alt || "Resumo financeiro do Matchday"}>
                            </Image>
                        </motion.div>
                    )}
                    {props.image2 && (
                        <motion.div
                            className="absolute right-0 top-12 z-30 w-[32%] md:top-24 md:w-[30%]"
                            style={{ y: secondPhoneOffset }}>
                            <Image
                                className="w-full h-auto"
                                src={props.image2}
                                width={1080}
                                height={1080}
                                alt={props.image2Alt || "Tela de login do Matchday"}>
                            </Image>
                        </motion.div>
                    )}
                </div>
            </div>
        </article>
    );
}
