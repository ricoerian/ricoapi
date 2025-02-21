"use client"

import React, { useState } from "react";
import { CardPhoto } from "../Atoms/CardPhoto";

export const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/6285158442031?text=${encodeURIComponent(
      `Hai saya ${name}, ${message}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="container pt-24 md:pt-26 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full xl:w-3/5 p-5 pb-24 justify-center lg:items-start overflow-y-hidden">
        <h1 className="font-semibold font-poppins text-4xl text-white md:text-2xl lg:text-5xl text-left md:text-left">
          Contact
        </h1>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-6 mt-8">
            <label
              htmlFor="name"
              className="block mb-2 font-bold text-lg font-poppins main-font"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#03001C] text-white text-sm rounded-xl block w-full p-5 dark:text-white focus:outline-none focus:ring focus:border-main-font"
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="container">
              <label
                htmlFor="message"
                className="block mb-2 text-lg font-bold font-poppins main-font"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block rounded-xl bg-[#03001C] text-white w-full p-3 focus:outline-none focus:ring focus:border-main-font"
                required
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="text-white text-xl bg-button rounded-lg w-full sm:w-auto px-8 py-3 mt-4 bg-button text-center font-bold font-poppins hover:border-2 hover:bg-slate-800"
          >
            Send to Whatsapp
          </button>
        </form>
      </div>
      <div className="w-full xl:w-2/5 p-12 overflow-hidden">
        <CardPhoto />
      </div>
    </div>
  );
};