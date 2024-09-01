"use client";

import Project from "../components/Projects/Project";

export default function Projects() {
    
    return (
        <section>
            <h2 className="p-8
            bg-dark bg-opacity-90
            text-3xl md:text-6xl uppercase font-bold text-light text-center">
                Projeto
                {/* Projetos */}
            </h2>
            <Project 
                title="Matchday"
                tags="Futebol • Conexão"
                description="Aplicativo em desenvolvimento que conectará pessoas que desejam encontrar partidas de futebol por perto para jogar."
                image1="/project_0_0.png"
                image2="/project_0_1.png"
                background="bg-dark" color="text-white"/>
        </section>
    );
}