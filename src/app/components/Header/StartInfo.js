"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StartInfo(){
    return (
        <div className="grow flex flex-col md:flex-row md:items-center justify-center gap-20 md:justify-evenly px-10 py-4 md:px-0">
            <div className="flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: -20 }}
                    transition={{ ease: "easeOut", duration: 1, delay: 0 }}>
                    <div className="pt-5">
                        <h1 className="text-6xl md:text-8xl font-bold">Héuller</h1>
                        <h2 className="text-xl md:text-3xl font-extralight">Desenvolvedor mobile full-stack</h2>
                    </div>
                </motion.div>
            </div>
            <div className="w-56 h-56 md:w-80 md:h-80 relative">
                <Image
                    className="w-full h-full"
                    src="/profile_picture.png"
                    width={715}
                    height={715}
                    style={{objectFit: 'cover'}}
                    alt="Picture of the author">
                </Image>
            </div>
        </div>
    )
}