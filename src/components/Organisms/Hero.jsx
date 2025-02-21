import { CardPhoto } from "../Atoms/CardPhoto";
import { FlipWord } from "../Molecules/FlipWord";

export const Hero = () => {
    return (
        <>
            <div className="w-full xl:w-2/5 p-12 overflow-hidden">
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

            <div className="flex flex-col w-full p-2 xl:w-3/5 justify-center lg:items-start overflow-y-hidden">
                <FlipWord />
                <div className="w-full flex space-x-6 md:items-center justify-center">
                    <a href="https://github.com/ricoerian?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <button className="px-8 py-3 rounded-xl text-white font-bold font-poppins my-8 flex items-center space-x-3 border-solid border-2 border-white text-xl hover:bg-slate-800">
                            Repositories
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/ambry/?x-li-ambry-ep=AQJCNEO9tGSXzwAAAZUn5BTOvORherzSD8qlAIkX-1vq7ufacbXpNnLL8Bp0FoVS9SSEP55HVs6oSD3tyOGeuM5GU6tC1YGPuX8mXf-XxxX-Z-MTJ9n8lZUW7Iq72oVf5dX7Gl65TJ5Hf2LmU3fCsVOPrxBh3IPrMw138C3TrK9VDQLXyRzaeNiue6_nLRY8QptxZ0VrWg3XjzblQxdGL-VlDB9sYPmY5sRuUChBvvOe1H5g1jdacnfZhYruauZX57q6vtToB2CY47jMFyxG_IykQW1Ic-zsq5ubp75z2_HvVcOshucd_5j0wCwNGogC3LHDxQuNDM-EX7ILq5QcbsLbpjTVaCYD14VOV_qvQetaAiIzHWj8sNDn3Nd2BuhxaVWHtcHf8qNzT3AiL3E1IzkarkXymD_KqyyI4euarDaUlZXQy4F3KqmceM2Kdsa2JrOvc6aVsrzPTUdl3CQ-0rF068kzUFFVl9W0VUulN1NXziDuwJXLwZJ-970DDLLiq3_g88LY76D3L2qpxNghi6LcrcGnjjxrLzwyUQtQJYtNiVoPDM-PXTZYR7aCG_KiQkJ-GQ&x-ambry-um-filename=Resume-Rico-Eriansyah.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="px-8 py-4 bg-button rounded-xl text-white font-bold font-poppins my-8 flex items-center text-xl hover:border-2 hover:bg-slate-800">
                            Resume
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
};