"use client";

import { anticipate, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useSelector } from "react-redux";

export default function Project(props) {
    
    const { scrollYProgress } = useScroll();
    const [isVisible, setIsVisible] = useState(false);
    const refProjectPT = useRef(null);
    const refProjectEN = useRef(null);
    const yPosition = useTransform(scrollYProgress, [0,1.25], ['200%', '100%'], {ease: anticipate});
    const language = useSelector((state) => state.languageSlice.value);

    const handleScroll = () => {
        let rect = null;
        if (refProjectPT.current !== null)
            rect = refProjectPT.current.getBoundingClientRect();
        
        else
            rect = refProjectEN.current.getBoundingClientRect();
        
        setIsVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <div className={`${props.background} h-screen flex flex-col md:grid md:grid-cols-2 md:min-h-[800px]`}>
            <div className="md:h-full md:grid md:grid-rows-2">
                <div className={`flex flex-col md:justify-end items-end ${props.color}`}>
                    <div className="p-4 md:p-0 md:w-8/12">
                        <h3 className="text-2xl py-10 md:pt-0 md:text-5xl uppercase font-black">{props.title}</h3>
                            <p className="md:text-lg pb-10 uppercase font-black">{props.tags}</p>
                            {props.description.split(" ").map((el, i) => (
                            <motion.span 
                                ref={language == "PT" ? refProjectPT: refProjectEN}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isVisible ? 1 : 0 }}
                                transition={{
                                duration: 1,
                                delay: i / 8,
                                }}
                                key={i}
                                className="md:text-lg">
                                {el}{" "}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <div className="relative w-full md:w-4/5">
                    <motion.div
                        className="absolute bottom-0 z-10"
                        style={{ y: yPosition }}>
                        <Image
                            src={props.image1}
                            width={1080}
                            height={1080}
                            alt="Login page of system matchday">
                        </Image>
                    </motion.div>
                    <motion.div
                        className="absolute top-0 w-1/2 right-0 z-20"
                        style={{ y: yPosition }}>
                        <Image
                            src={props.image2}
                            width={1080}
                            height={1080}
                            alt="Splash screen of system matchday">
                        </Image>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}