"use client";

import React, { useState, useEffect } from "react";

export const Footer = () => {
  const date = new Date().getFullYear();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <footer className="bg-[#03001C] py-6 px-4">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-white font-montserrat font-bold text-lg mb-4">Socials</h1>
            <div className="flex space-x-6 mb-4">
              <a href="https://www.linkedin.com/in/rico-eriansyah-6729a8204/" className="   ">
                <img width="32" height="45" src="/assets/linkedin-icon.svg" alt="Linkedin" className="text-white" />
              </a>
              <a href="https://github.com/ricoerian" className="">
                <img width="32" height="40" src="/assets/github-icon.svg" alt="GitHub" className="text-white" />
              </a>
              <a href="mailto:ricoeriansyahm@gmail.com" className="">
                <img width="32" height="40" src="/assets/email-icon.svg" alt="Email" className="text-white" />
              </a>
            </div>
            <p className="main-font text-lg font-montserrat">
              @Rico Eriansyah {date}
            </p>
          </div>
        </div>
      </footer>
      {showButton && (
        <div className="fixed bottom-4 right-4">
          <a href="#top">
            <button className="p-3 rounded-xl text-white font-bold font-poppins border-solid border-2 border-[#F62BA5] hover:border-2 bg-[#03001C] hover:bg-slate-800">
              Back to Top
            </button>
          </a>
        </div>
      )}
    </>
  );
};