import React from "react";
import {useState} from "react";
import {Menu, X} from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <header className="bg-black text-white p-4 shadow-item flex items-center justify-between fixed top-0 left-0 w-full z-50">
            <nav className="flex items-center justify-between">
                <div className="md:hidden">
                    <button onClick={() => setOpen(!open)}>
                        {open ? <X size={24} /> : <Menu size={24} /> }
                    </button>
                </div>
                <ul className={`flex flex-col md:flex-row space-x-4  absolute top-0  left-0 bg-black w-full md:w-auto ${open ? 'block' : 'hidden'} md:static md:flex md:w-auto md:flex-row md:space-x-4 md:space-y-0 md:bg-transparent`}
                style={{  height: open ? '100vh' : 'auto'}}
                >
                    <li><a href="#" className="text-white hover:blue-900"> Acceuil </a></li>
                    <li><a href="#" className="text-white hover:bg-blue-900"> Acceuil </a></li>
                    <li><a href="#" className="text-white hover:bg-blue-900"> Acceuil </a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;