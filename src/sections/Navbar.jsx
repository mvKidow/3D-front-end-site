import React from "react";
import { navLinks } from "../constants";

const NavbarItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a">
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const toggleMenu = () => setOpen(prevOpen => !prevOpen);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Given Seboka Leope
                    </a>
                    <button
                        onClick={toggleMenu}
                        className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                        aria-label="Toggle Menu"
                    >
                        <img src={open ? "/assets/close.svg" : "/assets/menu.svg"} alt="toggle" className="w-6 h-6" />
                    </button>

                    <nav className="sm:flex hidden">
                        <NavbarItems />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar overflow-hidden transition-all duration-300 ${open ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavbarItems />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
