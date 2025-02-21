import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWord() {
  const words = ["Full Stack Web Developer Enthusiast", "Mobile Developer Enthusiast", "Front-end Developer", "Software Engineering Teacher", "Head of the Computer Laboratory"];

  return (
    (<div className="w-full flex justify-center items-center px-4">
      <div
        className="font-semibold font-poppins text-4xl text-white md:text-2xl lg:text-5xl text-center md:text-center">
        Hello!<br />
        I'm Rico Eriansyah,<br />
        <FlipWords words={words} />
      </div>
    </div>)
  );
}
