import { CardPhoto } from "../Atoms/CardPhoto";

export const Project = ({ title, techStack, description, liveDemoLink, sourceCodeLink, imageSrc, imageWidth, imageHeight, nextProjectId }) => {
    return (
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full p-4 md:w-3/5 justify-center lg:items-start overflow-y-hidden">
                <h1 className="font-semibold font-poppins text-xl text-white md:text-xl lg:text-3xl text-left md:text-left mt-5 underline decoration-slate-500">{title}</h1>
                <p className="main-font font-semibold font-montserrat text-xl mt-16">Approach</p>
                <p className="font-thin font-montserra text-white mt-8 text-2xl md:text-2xl lg:text-2xl text-left md:text-left">{description}</p>
                <p className="main-font font-semibold font-montserrat text-xl mt-16">Tech Stack</p>
                <p className="font-thin font-montserra text-white mt-8 text-2xl md:text-2xl lg:text-2xl text-left md:text-left">{techStack}</p>
                <div className="flex space-x-8 my-2 md:items-center justify-center mb-16">
                    <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
                        <button className="px-8 py-3 rounded-xl text-white font-bold font-poppins mt-16 flex items-center space-x-3 border-solid border-2 border-white text-xl sm:w-auto hover:border-2 hover:bg-slate-800">
                            Live Demo
                        </button>
                    </a>
                    <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
                        <button className="px-8 py-4 bg-button rounded-xl text-white font-bold font-poppins mt-16 flex items-center text-xl w-full sm:w-auto hover:border-2 hover:bg-slate-800">
                            Source Code
                        </button>
                    </a>
                </div>
            </div>
            <div className="w-full md:w-2/5 p-12 overflow-hidden md:pt-1">
                <CardPhoto src={imageSrc} alt={title} height={imageHeight} width={imageWidth} />
                {nextProjectId && (
                    <div className="flex items-center mt-10 justify-center">
                        <div>
                            <a href={`#${nextProjectId}`}>
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
                )}
            </div>
        </div>
    );
};