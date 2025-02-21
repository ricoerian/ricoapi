"use client";
import { useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#03001C] shadow-lg flex justify-between items-center mx-auto px-6 md:px-14 py-4 lg:px-24 w-full">
            <div className="text-2xl md:text-3xl font-bold text-white">Rico Eriansyah</div>
            <div className="hidden md:flex space-x-8 items-center text-white">
                <a href="#top" className="hover:text-gray-300">About</a>
                <a href="#projects" className="hover:text-gray-300">Projects</a>
                <a href="#skills" className="hover:text-gray-300">Skills</a>
                <a href="#contact">
                    <button className="px-6 py-2 bg-button font-bold rounded-xl hover:bg-slate-800 transition">
                        Contact
                    </button>
                </a>
            </div>
            <div className="md:hidden flex gap-6">
                <a href="#contact">
                    <button className="px-6 py-2 text-white bg-button font-bold rounded-xl hover:border-2 hover:bg-slate-800 transition">
                        Contact
                    </button>
                </a>
                <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                    <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            <div className={`absolute top-16 right-4 bg-[#03001C] text-white flex flex-col items-end space-y-4 py-4 px-6 rounded-lg shadow-lg transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
                <a href="#top" className="hover:text-gray-300">About</a>
                <a href="#projects" className="hover:text-gray-300">Projects</a>
                <a href="#skills" className="hover:text-gray-300">Skills</a>
            </div>
        </nav>
    );
};
