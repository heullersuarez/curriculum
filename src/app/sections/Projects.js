"use client";

import Project from "../components/Projects/Project";

export default function Projects() {
    
    return (
        <section>
            <h2 className="p-10
            bg-primary
            text-3xl md:text-6xl uppercase font-bold text-light text-center">
                Projetos
            </h2>
            <Project background="bg-dark" positionUseTransform=""/>
            <Project background="bg-primary" positionUseTransform=""/>
        </section>
    );
}