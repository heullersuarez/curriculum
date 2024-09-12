"use client";

import { FaGithub } from "react-icons/fa6";
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
            <h3 className="text-4xl md:text-8xl uppercase font-bold text-dark text-opacity-10">{language == "PT"? "Contato": "Contact"}</h3>
                <Image
                    className="absolute top-10 md:top-0 right-2 md:right-1/4 w-[20rem]"
                    src="/memphis.png"
                    width={400}
                    height={140}
                    alt="Picture of the author">
                </Image>
            <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={e => {}}
                  onHoverEnd={e => {}}
                  href="https://github.com/heullersuarez"
                  target="_blank">
                    <FaGithub className="text-6xl md:text-7xl"/>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={e => {}}
                  onHoverEnd={e => {}}
                  href="https://www.linkedin.com/in/heuller-soares/"
                  target="_blank">
                    <FaLinkedin className="text-6xl md:text-7xl"/>
                </motion.a>
            </div>
        </section>
    );
}