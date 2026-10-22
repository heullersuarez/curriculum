"use client";

import { FaGithub, FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { motion } from "framer-motion";
import Image from "next/image";

import { useSelector } from "react-redux";

export default function Contact() {

    const language = useSelector((state) => state.languageSlice.value);

    return (
        <section 
            className="bg-light relative overflow-hidden h-[50vh] min-h-[25rem] flex flex-col gap-5 justify-center items-center
            border-solid border-t-2 border-dark border-opacity-10">
            <h2 className="relative z-10 text-4xl md:text-8xl uppercase font-bold text-dark text-opacity-10">{language == "PT"? "Contato": "Contact"}</h2>
                <Image
                    className="absolute top-10 md:top-0 right-2 md:right-1/4 w-[20rem]"
                    src="/memphis.png"
                    width={400}
                    height={140}
                    alt="">
                </Image>
            <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={e => {}}
                  onHoverEnd={e => {}}
                  href="https://github.com/heullersuarez"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub de Héuller Soares">
                    <FaGithub className="text-6xl md:text-7xl"/>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={e => {}}
                  onHoverEnd={e => {}}
                  href="https://www.linkedin.com/in/heuller-soares/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn de Héuller Soares">
                    <FaLinkedin className="text-6xl md:text-7xl"/>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://instagram.com/heuller.suarez"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram de Héuller Soares">
                    <FaInstagram className="text-6xl md:text-7xl"/>
                </motion.a>
            </div>
        </section>
    );
}
