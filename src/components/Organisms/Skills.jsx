import React from "react";

export const Skills = ({ title, skills }) => {
  return (
    <div className="flex flex-col w-full p-12 xl:w-2/5 justify-center lg:items-start">
      <h1 className="font-semibold font-poppins text-4xl text-white mb-10 md:text-2xl lg:text-5xl text-left md:text-left">{title}</h1>
      <div className="flex justify-between">
        <div className="grid grid-rows-3 md:grid-rows-1 grid-flow-col gap-y-10 gap-x-10 mt-2 shrink-0 mx-auto">
          {skills.map((skill, index) => (
            <div key={index}>
              <img width="50" height="70" src={skill.src} alt={skill.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};