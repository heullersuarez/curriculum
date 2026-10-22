"use client";

import Project from "../components/Projects/Project";
import { useSelector } from "react-redux";

export default function Projects() {

    const language = useSelector((state) => state.languageSlice.value);
    
    return (
        <section className="w-full">
            <h2 className="p-8
            bg-dark
            text-4xl md:text-8xl uppercase font-bold text-light text-center">
                {language == "PT" ? "Projetos": "Projects"}
                {/* Projetos */}
            </h2>
            <Project 
                title="GUARDIAO"
                tags={language == "PT" ? "DIREITO • FINANCEIRO": "LAW • FINANCE"}
                description={language == "PT" ? 
                    "Sistema que informa ao usuário a necessidade de informar ao seu cliente que um dos pagamentos está na data de vencimento." :
                    "A system that notifies the user when they need to inform a client that one of the payments is due."
                }
                image1="/guardiao-1.png"
                image2="/guardiao-2.png"
                background="bg-light" color="text-dark"/>
            <Project
                title="UNIDOS"
                tags={language == "PT" ? "FUTEBOL • GERENCIAMENTO": "FOOTBALL • MANAGEMENT"}
                description={language == "PT" ?
                    "Aplicação desenvolvida para que o time de São Gonçalo do Sapucaí chamado Unidos possa gerenciar seu time, controlando frequência, mensalidade, quantidade de gols, cartões amarelos e vários outros pontos." :
                    "An application developed to help Unidos, a team from São Gonçalo do Sapucaí, manage its team by tracking attendance, membership fees, goals, yellow cards, and many other details."
                }
                image1="/unidos.png"
                image1Alt="Tela de ranking geral do Unidos FC"
                staticImage1
                background="bg-dark" color="text-white"/>
        </section>
    );
}
