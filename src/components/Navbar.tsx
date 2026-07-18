import { useState } from "react";

const navLinks = [
    { id: "/#about", title: "About" },
    { id: "/#skills", title: "Skills" },
    { id: "/#projects", title: "Projects" },
    { id: "/#contact", title: "Contact" },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

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

                    {/* Desktop nav */}
                    {/* // className={({ isActive }) => `main-link ${isActive ? 'text-pink-500' : ''}`}> */}

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

// <div className="flex items-center gap-2">
{/* Theme toggle */ }
{/* <button onClick={toggle} className={`${!dark ? "hover:bg-slate-200" : "hover:bg-[#280342]"} duration-500 text-slate-400 hover:text-white hover:cursor-pointer p-3 rounded-full`}>
                        {dark ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="yellow" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" />
                                <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
                                <path d="M2 12h2" /><path d="M20 12h2" />
                                <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="#001533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
                            </svg>
                        )}
                    </button> */}

{/* Hamburger — mobile only */ }
{/* <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 rounded-full text-gray hover:text-primary duration-300"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M18 6 6 18M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div> */}

{/* Mobile menu */ }
// {mobileOpen && (
//     <div className="md:hidden absolute top-16 left-1/2 -translate-x-1/2 w-11/12 bg-navbar rounded-2xl px-6 py-4 flex flex-col gap-4 font-semibold text-gray shadow-lg">
//         {navLinks.map(({ to, label }) => (
//             <NavLink
//                 key={to}
//                 to={to}
//                 onClick={() => setMobileOpen(false)}
//                 className={({ isActive }) => `main-link text-lg ${isActive ? 'text-pink-500' : ''}`}
//             >
//                 {label}
//             </NavLink>
//         ))}
//     </div>
// )}
// </div>