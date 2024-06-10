"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Projects() {
    
    const { scrollYProgress } = useScroll();
    const yPosition = useTransform(scrollYProgress, [0,1], ['0%', '-125%']);

    return (
        <section className="h-[50vh] bg-light bg-opacity-40 grid grid-cols-2">
            <div className="h-full grid grid-rows-2">
                <div className="flex flex-col justify-center items-end">
                    <div className="w-8/12">
                        <h3 className="text-5xl font-black">Shape progress</h3>
                        <p className="pt-10 text-lg">Consequat cillum nisi deserunt veniam.
                            Tempor irure nulla ullamco nostrud ullamco in minim voluptate fugiat adipisicing enim consequat.
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-full bg-primary flex items-end">
                <motion.div 
                style={{ y: yPosition }}
                className="w-52 h-96 bg-dark bg-opacity-50"></motion.div>
            </div>
        </section>
    );
}