import Image from "next/image";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

export default function Home() {
    const date = new Date().getFullYear();
    return (
      <html lang="en">
        <head>
            <title>Portfolio Rico Eriansyah</title>
        </head>
        <body className="bg-primary" id="top">
            
            <header className="font-poppins font-medium text-lg sticky top-0">
                <nav className="bg-primary shadow-lg flex justify-between items-center mx-auto px-8 md:px-14 py-6 lg:px-24 w-full">
                    <div className="text-3xl font-bold text-white">Rico Eriansyah</div>
                        <div className="hidden md:flex space-x-12 items-center text-white ">
                            <a href="#about">About</a>       
                            <a href="#projects">Projects</a>
                            <a href="#skills">Skills</a>
                            <a href="#contact">
                                <button className="px-6 py-2 bg-button font-bold rounded-xl hover:border-2 hover:bg-slate-800">
                                    Contact
                                </button>
                            </a>
                        </div>
                
                        <div className="mobile-menu hidden md:hidden text-white mt-4">
                            <a href="#about" className="block py-2 px-16 rounded text-lg hover:bg-gray-700">About</a>
                            <a href="#projects" className="block py-2 px-16 rounded text-lg hover:bg-gray-700">Projects</a>
                            <a href="#skills" className="block py-2 px-16 rounded text-lg hover:bg-gray-700">Skills</a>
                            <a href="#contact" className="block py-2 px-16 rounded text-sm hover:bg-gray-700">
                                <button className="px-6 py-2 bg-button font-bold rounded-xl hover:bg-[#141628]">
                                    Contact
                                </button>
                            </a>
                        </div>
  
                        <div className="md:hidden ">
                            <button className="mobile-menu-button">
                                <svg className="w-10 h-10 bg-[#141628] rounded text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </nav>
            </header>
  
            
                
  
            <section className="container md:pt-26 mx-auto flex flex-wrap flex-col md:flex-row items-center" id="about">
  
                    <div className="w-full xl:w-2/5 p-12 overflow-hidden">
                        <img src="/assets/you.png" alt="your name" className="rounded-3xl mx-auto w-full md:w-4/5 "/>
                        <div className="flex mt-16 mb-16 flex-row space-x-6 justify-center ">
                            <a href="#" className="">
                                <img width="46" height="45" src="/assets/linkedin-icon.svg" alt="Linkedin" className="text-white -mt-1 hover:bg-[#F62BA5] rounded-md"/>
                            </a>
                            <a href="https://github.com/ricoerian" className="">
                                <img width="47" height="40" src="/assets/github-icon.svg" alt="GitHub" className=" text-white p-2 hover:bg-[#F62BA5] rounded-md"/>
                            </a>
                            <a href="#" className="">
                                <img width="48" height="40" src="/assets/email-icon.svg" alt="Email" className="text-white p-1 hover:bg-[#F62BA5] rounded-md"/>
                            </a>
                        </div>
                    </div>
                    
                    <div className="flex flex-col w-full p-2 xl:w-3/5 justify-center lg:items-start overflow-y-hidden">
                        <h1 className="font-semibold font-poppins text-4xl text-white md:text-2xl lg:text-5xl text-center md:text-center">Hello!<br /> I'm   <span className="main-font">Rico Eriansyah</span>, Full Stack Web & Mobile Developer Enthausiast</h1>
                            <p className="font-thin font-montserra text-white mt-16 text-2xl md:text-2xl lg:text-2xl text-center md:text-left">I work as Head of the Computer Laboratory and as a Software Engineering Teacher at SMKS Purnawarman</p>
                        <div className="flex space-x-10 md:items-center justify-center mb-16">
                            <a href="#projects" target="_blank" rel="noopener noreferrer">
                                <button className="px-8 py-3 rounded-xl text-white font-bold font-poppins mt-20 flex items-center space-x-3 border-solid border-2 border-white text-xl hover:bg-slate-800">
                                    Projects
                                </button>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <button className="px-8 py-4 bg-button rounded-xl text-white font-bold font-poppins mt-20 flex items-center text-xl hover:border-2 hover:bg-slate-800">
                                    Resume
                                </button>
                            </a>
                        </div>
                    </div>
            </section>
  
  
            <section className="bg-section-two" id="projects">
                <div className="container pt-24 md:pt-26 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <div className="flex flex-col w-full p-4 xl:w-3/5 justify-center lg:items-start overflow-y-hidden">
                        <h1 className="font-semibold font-poppins text-4xl text-white md:text-2xl lg:text-5xl text-left md:text-left ">Featured Projects</h1>
                        <h1 className="font-semibold font-poppins text-xl text-white md:text-xl lg:text-3xl text-left md:text-left mt-12 underline decoration-slate-500">PT. Asri Berkah Mirai Driver Tracker Mobile App</h1>
                            <p className="main-font font-semibold font-montserrat text-xl mt-16">Approach</p>
                            <p className="font-thin font-montserra text-white mt-8 text-2xl md:text-2xl lg:text-2xl text-left md:text-left">an app for tracking drivers and task management, vehicle maintenance and users. in creating and developing the frontend using Ionic React and the backend API using Laravel, using the axios library to connect the API to the frontend app.</p>
                            <p className="main-font font-semibold font-montserrat text-xl mt-16">Tech Stack</p>
                            <p className="font-thin font-montserra text-white mt-8 text-2xl md:text-2xl lg:text-2xl text-left md:text-left">Ionic React, Laravel, MySQL, Axios</p>
                        <div className="flex space-x-8 my-2 md:items-center justify-center mb-16">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <button className="px-8 py-3 rounded-xl text-white font-bold font-poppins mt-16 flex items-center space-x-3 border-solid border-2 border-white text-xl sm:w-auto hover:border-2 hover:bg-slate-800"> 
                                    Live Demo
                                </button>
                            </a>
                            <a href="https://github.com/ricoerian/abm" target="_blank" rel="noopener noreferrer">
                                <button className="px-8 py-4 bg-button rounded-xl text-white font-bold font-poppins mt-16 flex items-center text-xl w-full sm:w-auto hover:border-2 hover:bg-slate-800"> 
                                    Source Code
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="w-full xl:w-2/5 p-12 overflow-hidden md:pt-1">
                        <img src="/assets/project-one.png" alt="project name" className="rounded-3xl text-white" />
                        <div className="flex items-center mt-10 justify-center">
                            <div>
                                <a href="#project-two"> 
                                    <button className="p-3 rounded-xl text-white font-bold font-poppins border-solid border-2 border-[#F62BA5] hover:bg-slate-800"> 
                                        <span className="text-white text-sm font-montserrat font-thin">Next</span>
                                    </button>
                                </a>
                                <div className="mx-5 mt-2">
                                    <span className="m_scroll_arrows one"></span>
                                    <span className="m_scroll_arrows two"></span>
                                    <span className="m_scroll_arrows three"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-24 md:pt-26 mx-auto flex flex-wrap flex-col md:flex-row items-center " id="project-two">
                    <div className="flex flex-col w-full p-4 xl:w-3/5 justify-center lg:items-start overflow-y-hidden">
                        <h1 className="font-semibold font-poppins text-xl text-white md:text-xl lg:text-3xl text-left md:text-left mt-5 underline decoration-slate-500">Mutiara Bangsa Vocational School Academic System App</h1>
                            <p className="main-font font-semibold font-montserrat text-xl mt-16 ">Approach</p>
                            <p className="font-thin font-montserra text-white mt-8 text-2xl md:text-2xl lg:text-2xl text-left md:text-left">an application for managing users, students, teachers, staff, lesson schedules, classes, departments, assignment/exam grades, and PPDB. in creating and developing frontend using Ionic React and backend API using Laravel, using the axios library to connect the API to the frontend application.</p>
                            <p className="main-font font-semibold font-montserrat text-xl mt-16">Tech Stack</p>
                            <p className="font-thin font-montserra text-white mt-8 text-2xl md:text-2xl lg:text-2xl text-left md:text-left">Ionic React, Laravel, MySQL, Axios</p>
                        <div className="flex space-x-8 my-2 md:items-center justify-center mb-16">
                            <a href="html/index.html" target="_blank" rel="noopener noreferrer">
                                <button className="px-8 py-3 rounded-xl text-white font-bold font-poppins mt-16 flex items-center space-x-3 border-solid border-2 border-white text-xl sm:w-auto hover:border-2 hover:bg-slate-800"> 
                                    <span>Live Demo</span>
                                </button>
                            </a>
                            <a href="https://github.com/ricoerian/rasaApp" target="_blank" rel="noopener noreferrer">
                                <button className="px-8 py-4 bg-button rounded-xl text-white font-bold font-poppins mt-16 flex items-center text-xl w-full sm:w-auto hover:border-2 hover:bg-slate-800"> 
                                    <span className="">Source Code</span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="w-full xl:w-2/5 p-12 overflow-hidden md:pt-1">
                        <img src="/assets/project-two.png" alt="project name" className="rounded-3xl text-white m-auto" />
                    </div>
                </div>
            </section>
  
  
            <section className="bg-primary mb-20" id="skills">
                <div className="container pt-24 md:pt-26 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <div className="flex flex-col w-full p-4 xl:w-2/5 justify-center lg:items-start">
                        <h1 className="font-semibold font-poppins text-4xl text-white mb-20 md:text-2xl lg:text-5xl text-left md:text-left">Skills & Tools</h1>
                            <p className="text-[#F62BA5] font-medium font-montserrat text-3xl">Development</p>
                                <div className="flex justify-between">
                                    <div className="grid grid-rows-3 md:grid-rows-1 grid-flow-col gap-y-10 gap-x-16 mt-10 shrink-0 mx-auto">
                                        <div>
                                            <img width="50" height="50" src="/assets/html.svg"/>
                                        </div>
                                        <div>
                                            <img width="50" height="70" src="/assets/css.svg"/>
                                        </div>
                                        <div>
                                            <img width="50" height="70" src="/assets/php.svg"/>
                                        </div>
                                        <div>
                                            <img width="50" height="70" src="/assets/js.svg"/>
                                        </div>
                                        <div>
                                            <img width="50" height="70" src="/assets/laravel.svg"/>
                                        </div>
                                        <div>
                                            <img width="50" height="70" src="/assets/react.svg"/>
                                        </div>
                                        <div>
                                            <img width="50" height="70" src="/assets/ionic.svg"/>
                                        </div>
                                        <div>
                                            <img width="50" height="70" src="/assets/nextjs.svg"/>
                                        </div>
                                    
                                    </div>
                                </div>
                            <p className="text-[#F62BA5] font-medium font-montserrat text-3xl mt-20">Design</p>
                            <div className="flex justify-between ">
                                <div className="grid grid-rows-3 md:grid-rows-1 grid-flow-col gap-y-10 gap-x-16 mt-10 shrink-0 mx-auto">
                                    <div>
                                        <img width="50" height="70" src="/assets/figma.svg"/>
                                    </div>
                                    <div>
                                        <img width="50" height="70" src="/assets/canva.svg"/>
                                    </div>
                                </div>
                            </div>
                    </div>  
                </div>
            </section>
  
  
            <section className="bg-section-two" id="contact">
                <div className="container pt-24 md:pt-26 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <div className="flex flex-col w-full xl:w-3/5 p-5 pb-24 justify-center lg:items-start overflow-y-hidden">
                        <h1 className="font-semibold font-poppins text-4xl text-white md:text-2xl lg:text-5xl text-left md:text-left ">Contact</h1>
                        <form className="w-full">
                            <div className="mb-6 mt-20">
                                <label for="name" className="block mb-2 font-bold text-lg font-poppins main-font">Full Name</label>
                                <input type="name" id="email" className="bg-primary text-gray-900 text-sm rounded-lg block w-full p-5 dark:text-white focus:outline-none focus:ring focus:border-main-font" required />
                            </div>
                            <div className="mb-6">
                                <label for="email" className="block mb-2 text-lg font-bold font-poppins main-font">Email</label>
                                <input type="email" id="password" className="bg-primary text-gray-900 text-sm rounded-lg  block w-full p-5  dark:text-white focus:outline-none focus:ring focus:border-main-font" placeholder="you@email.com" required />
                            </div>
                            <div className="flex items-start mb-6">
                                <div className="container">
                                    <label for="message" className="block mb-2 text-lg font-bold font-poppins main-font">Message</label>
                                    <textarea id="message" rows="5" className=" block rounded-lg bg-primary dark:text-white w-full p-3 focus:outline-none focus:ring focus:border-main-font"></textarea>
                                </div>
                            </div>
                                <button type="submit" className="text-white text-xl bg-button rounded-lg w-full sm:w-auto px-8 py-3 mt-8 bg-button text-center font-bold font-poppins hover:border-2 hover:bg-slate-800">Send</button>
                        </form>
                    </div>
                    <div className="w-full xl:w-2/5 p-12 overflow-hidden">
                        <img src="/assets/you.jpg" alt="Reporting" className="rounded-3xl mx-auto w-full md:w-2/5"/>
                    </div>
                </div>
            </section>
  
            
            <footer className="bg-primary p-10">
                <div className="container flex flex-row flex-wrap justify-evenly">
                    <div className="flex flex-row flex-wrap  md:flex-col justify-center items-center">
                        <div className="flex mt-16 mb-6 flex-row space-x-6 justify-center">
                            <h1 className="text-white font-montserrat font-bold text-lg">Socials</h1>
                                <a href="#" className="">
                                    <img width="36" height="45" src="/assets/linkedin-icon.svg" alt="Linkedin" className="text-white -mt-1"/>
                                </a>
                                <a href="https://github.com/ricoerian" className="">
                                    <img width="24" height="40" src="/assets/github-icon.svg" alt="GitHub" className=" text-white mt-1"/>
                                </a>
                                <a href="#" className="">
                                    <img width="32" height="40" src="/assets/email-icon.svg" alt="Email" className="text-white"/>
                                </a>
                        </div>
                        <div className="mt-6 mb-16">
                            <p className="main-font text-lg font-montserrat">
                                @Rico Eriansyah {date}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex relative">
                    <a className="flex absolute bottom-0 right-0" href="#top">
                        <button className="p-3 rounded-xl text-white font-bold font-poppins border-solid border-2 border-[#F62BA5] hover:border-2 hover:bg-slate-800 absolute bottom-0 right-0"> 
                            Top
                        </button>
                    </a>
                </div>
            </footer>
  
            <script src="/assets/js/index.js"></script>
            <Analytics />
            <SpeedInsights />
        </body>
        </html>
    );
}
