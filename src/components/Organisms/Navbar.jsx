export const Navbar = () => {
    return (
        <nav className="bg-[#03001C] shadow-lg flex justify-between items-center mx-auto px-8 md:px-14 py-6 lg:px-24 w-full">
            <div className="text-3xl font-bold text-white">Rico Eriansyah</div>
            <div className="hidden md:flex space-x-12 items-center text-white">
                <a href="#top">About</a>
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

            <div className="md:hidden">
                <button className="mobile-menu-button">
                    <svg className="w-10 h-10 bg-[#141628] rounded text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};