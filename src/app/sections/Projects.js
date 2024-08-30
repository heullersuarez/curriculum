"use client";

import Project from "../components/Projects/Project";

export default function Projects() {
    
    return (
        <section>
            <h2 className="p-10
            bg-dark bg-opacity-90
            text-3xl md:text-6xl uppercase font-bold text-light text-center">
                Projetos
            </h2>
            <Project 
                title="Shape progress"
                tags="Dolor enim • laboris ipsum"
                description="Consequat cillum nisi deserunt veniam.Tempor irure nulla 
                ullamco nostrud ullamco in minim voluptate fugiat adipisicing enim 
                consequat."
                image1="/project.png"
                image2="/project.png"
                background="bg-light" color="text-dark"/>
            <Project 
                title="Delivery"
                tags="Dolor enim • laboris ipsum"
                description="Consequat cillum nisi deserunt veniam.Tempor irure nulla 
                ullamco nostrud ullamco in minim voluptate fugiat adipisicing enim 
                consequat."
                image1="/project.png"
                image2="/project.png"
                background="bg-dark bg-opacity-90" color="text-white"/>
        </section>
    );
}