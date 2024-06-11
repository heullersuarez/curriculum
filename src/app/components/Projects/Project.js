"use client";

import { anticipate, backInOut, backOut, circIn, circOut, easeIn, easeOut, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Project() {
    
    const { scrollYProgress } = useScroll();
    const yPosition = useTransform(scrollYProgress, [0,1], ['100%', '-50%'], {ease: anticipate});

    return (
        <div className="h-screen bg-light bg-opacity-40 flex flex-col md:grid md:grid-cols-2">
            <div className="md:h-full md:grid md:grid-rows-2">
                <div className="flex flex-col md:justify-end items-end">
                    <div className="p-4 md:p-0 md:w-8/12">
                        <h3 className="text-3xl pt-10 md:pt-0 md:text-5xl font-black">Shape progress</h3>
                        <p className="pt-10 text-lg">Consequat cillum nisi deserunt veniam.
                            Tempor irure nulla ullamco nostrud ullamco in minim voluptate fugiat adipisicing enim consequat.
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-full relative">
                <motion.div
                className="absolute bottom-0"
                style={{ y: yPosition }}>
                    <Image
                        src="/project.png"
                        width={300}
                        height={300}
                        className="w-10/12 md:w-auto"
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
                        className="w-10/12 md:w-auto"
                        alt="Picture of the author">
                    </Image>
                </motion.div>
            </div>
        </div>
    );
}