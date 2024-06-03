"use client";

import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function StartInfo(){
    return (
        <div className="grow flex flex-col md:flex-row md:items-center justify-center gap-20 md:justify-evenly px-10 py-4 md:px-0">
            <div className="flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: -20 }}
                    transition={{ ease: "easeOut", duration: 1 }}>
                <div className="pt-5">
                    <p className="text-6xl md:text-8xl font-bold">Héuller</p>
                    <p className="text-xl md:text-3xl font-extralight">Desenvolvedor web full-stack</p>
                    <div className="pt-8 flex gap-6 social-icons">
                        <a href=""><FaLinkedin size={30}/></a>
                        <a href=""><FaInstagram size={30}/></a>
                        <a href=""><FaGithub size={30}/></a>
                    </div>
                </div>
                </motion.div>
            </div>
            <div className="w-40 h-40 md:w-72 md:h-72 relative">
                <Image
                src="/profile-pic.png"
                objectFit="cover"
                layout="fill"
                alt="Picture of the author"
                >
                </Image>
            </div>
        </div>
    )
}