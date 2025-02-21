import { CardPhoto } from "../Atoms/CardPhoto";
import { FlipWord } from "../Molecules/FlipWord";

export const Hero = () => {
    return (
        <>
            <div className="w-full md:w-2/5 p-12 overflow-hidden">
                <CardPhoto src="/assets/you.png" alt="Rico Eriansyah" height={300} width={300} />
                <div className="flex my-8 flex-row space-x-6 justify-center">
                    <a href="https://www.linkedin.com/in/rico-eriansyah-6729a8204/" className="">
                        <img width="46" height="45" src="/assets/linkedin-icon.svg" alt="Linkedin" className="text-white -mt-1 hover:bg-[#F62BA5] rounded-md" />
                    </a>
                    <a href="https://github.com/ricoerian" className="">
                        <img width="47" height="40" src="/assets/github-icon.svg" alt="GitHub" className="text-white p-2 hover:bg-[#F62BA5] rounded-md" />
                    </a>
                    <a href="mailto:ricoeriansyahm@gmail.com" className="">
                        <img width="48" height="40" src="/assets/email-icon.svg" alt="Email" className="text-white p-1 hover:bg-[#F62BA5] rounded-md" />
                    </a>
                </div>
            </div>

            <div className="flex flex-col w-full p-2 md:w-3/5 justify-center lg:items-start overflow-y-hidden">
                <FlipWord />
                <div className="w-full flex space-x-6 md:items-center justify-center">
                    <a href="https://github.com/ricoerian?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <button className="px-8 py-3 rounded-xl text-white font-bold font-poppins my-8 flex items-center space-x-3 border-solid border-2 border-white text-xl hover:bg-slate-800">
                            Repositories
                        </button>
                    </a>
                    <a href="https://drive.google.com/file/d/1aYBc-TJPMAYrI2TOgITIn_LqfyP4kvyx/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <button className="px-8 py-4 bg-button rounded-xl text-white font-bold font-poppins my-8 flex items-center text-xl hover:border-2 hover:bg-slate-800">
                            Resume
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
};