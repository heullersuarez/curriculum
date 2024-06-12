"use client";

import useMediaQuery from "@/app/hooks/useMediaQuery";
import { anticipate, backInOut, backOut, circIn, circOut, easeIn, easeOut, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Project(props) {
    
    const { scrollYProgress } = useScroll();

    console.log(props);

    const text = "Consequat cillum nisi deserunt veniam.Tempor irure nulla ullamco nostrud ullamco in minim voluptate fugiat adipisicing enim consequat.".split(" ");
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const isMobile = useMediaQuery('(max-width: 768px)');

    const yPosition = !isMobile ? 
    useTransform(scrollYProgress, [0,1], ['10%', '-50%'], {ease: anticipate}) : 
    useTransform(scrollYProgress, [0,1], ['10%', '-30%'], {ease: anticipate}); // Different y values for mobile and desktop

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1, // Adjust this value as needed
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);


    return (
        <div className={`${props.background} h-screen flex flex-col md:grid md:grid-cols-2`}>
            <div className="md:h-full md:grid md:grid-rows-2">
                <div className="flex flex-col md:justify-end items-end text-white">
                    <div className="p-4 md:p-0 md:w-8/12">
                        <h3 className="text-2xl py-10 md:pt-0 md:text-5xl uppercase font-black">Shape progress</h3>
                            <p className="text-lg pb-10 uppercase font-black">Dolor enim • laboris ipsum</p>
                            {text.map((el, i) => (
                            <motion.span 
                                ref={ref}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isVisible ? 1 : 0 }}
                                transition={{
                                duration: 1,
                                delay: i / 8,
                                }}
                                key={i}
                                className="text-lg">
                                {el}{" "}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="h-full relative">
                <motion.div
                className="absolute bottom-0 left-4"
                style={{ y: yPosition }}>
                    <Image
                        src="/project.png"
                        width={300}
                        height={300}
                        className="w-8/12 md:w-auto"
                        alt="Picture of the author"
                    >
                    </Image>
                </motion.div>
                <motion.div
                className="absolute bottom-0 left-1/2"
                style={{ y: yPosition }}>
                    <Image
                        src="/project.png"
                        width={200}
                        height={200}
                        className="w-8/12 md:w-auto"
                        alt="Picture of the author">
                    </Image>
                </motion.div>
            </div>
        </div>
    );
}