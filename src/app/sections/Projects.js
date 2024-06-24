"use client";

import Image from "next/image";
import Project from "../components/Projects/Project";

export default function Projects() {
    
    return (
        <section>
            <div className="relative">
                <h2 className="p-10
                bg-dark
                text-3xl md:text-6xl uppercase font-bold text-light text-center">
                    Projetos
                </h2>
            </div>
            <Project 
                title="Shape progress"
                tags="Dolor enim • laboris ipsum"
                description="Consequat cillum nisi deserunt veniam.Tempor irure nulla 
                ullamco nostrud ullamco in minim voluptate fugiat adipisicing enim 
                consequat."
                image1="/project.png"
                image2="/project.png"
                background="bg-light" color="text-dark" id="0"/>
            <Project 
                title="Delivery"
                tags="Dolor enim • laboris ipsum"
                description="Consequat cillum nisi deserunt veniam.Tempor irure nulla 
                ullamco nostrud ullamco in minim voluptate fugiat adipisicing enim 
                consequat."
                image1="/project.png"
                image2="/project.png"
                background="bg-dark bg-opacity-90" color="text-white" id="1"/>
        </section>
    );
}