import React from "react";
import { AppearText } from "../ui/AppearText";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "wouter";

export function Start() {
return (
    <div className="flex flex-col gap-14 items-center justify-center h-[50vh]">
        <AppearText className="text-white text-8xl text-center">
            Summarize
        </AppearText>
        <AppearText
            duration="duration-0"
            className="text-white text-3xl text-center"
        >
            Summarize your paragraph with the help of our website easily and
            efficiently with no effort, no work. Its best tool for student who take
            lot of notes and want a way to summarize them
        </AppearText>
        <Link to="/main">
            <button className="bg-orange-500 w-36 h-12 rounded-lg ml-6 text-white font-bold hover:bg-transparent hover:border-2 border-orange-500 hover:text-orange-500 transition-colors duration-400 ease-in-out active:scale-105 flex items-center justify-center">
                Get Started <FaArrowRight className="ml-2" />
            </button>
        </Link>
    </div>
);
}






















