"use client";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {

    return (
        <section className="bg-light relative overflow-hidden min-h-[50vh] flex flex-col gap-5 justify-center items-center
        border-solid border-t-2 border-dark border-opacity-10">
            <h3 className="text-4xl md:text-8xl uppercase font-bold text-dark text-opacity-10">Contato</h3>
            <div className="flex gap-3">
                <FaGithub className="text-6xl md:text-7xl"/>
                <FaLinkedin className="text-6xl md:text-7xl"/>
            </div>
        </section>
    );
}