"use client";

import Project from "../components/Projects/Project";
import { useSelector } from "react-redux";


export default function Projects() {

    const language = useSelector((state) => state.languageSlice.value);
    
    return (
        <section>
            <h2 className="p-8
            bg-dark
            text-3xl md:text-6xl uppercase font-bold text-light text-center">
                {language == "PT" ? "Projeto": "Project"}
                {/* Projetos */}
            </h2>
            <Project 
                title="Matchday"
                tags={language == "PT" ? "Futebol • Conexão": "Football • Connection"}
                description={language == "PT" ? 
                    "Aplicativo em desenvolvimento que conectará pessoas que desejam encontrar partidas de futebol por perto para jogar." :
                    "An app in development that will connect people who want to find nearby soccer games to play."
                }
                image1="/project_0_0.png"
                image2="/project_0_1.png"
                background="bg-dark bg-opacity-90" color="text-white"/>
        </section>
    );
}