// import { useState } from "react";

const navLinks = [
    { id: "/#about", title: "About" },
    { id: "/#skills", title: "Skills" },
    { id: "/#projects", title: "Projects" },
    { id: "/#contact", title: "Contact" },
];

const Navbar = () => {
    // const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <div className='flex-center w-full fixed p-2 z-50'>
                <div data-aos="fade-up" className="frosted-bg navbar w-11/12 md:w-2/3">

                    {/* Logo */}
                    <div className="flex-center gap-2 font-bold text-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round" className="lucide lucide-flower logo-icon">
                            <circle cx="12" cy="12" r="3" />
                            <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
                            <path d="M12 7.5V9" /><path d="M7.5 12H9" /><path d="M16.5 12H15" /><path d="M12 16.5V15" />
                            <path d="m8 8 1.88 1.88" /><path d="M14.12 9.88 16 8" />
                            <path d="m8 16 1.88-1.88" /><path d="M14.12 14.12 16 16" />
                        </svg>
                        <a href="/#home" className="gradient-text font-title cursor-pointer">Rua'a Faroun</a>
                    </div>

                    <nav className="hidden md:flex md:items-center md:justify-center font-semibold text-gray gap-4">
                        {navLinks.map((link) => (
                            <a href={link.id} key={link.id} className="cursor-pointer">{link.title}</a>
                        ))}
                    </nav>
                </div>
            </div>


        </>
    );
};

export default Navbar;
