import exp from "constants";
import React from "react";
import { NavLink } from "react-router-dom";


const Header: React.FC = () => {
    return(
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="text-2xl font-bold">My Portfolio</div>
            <nav className="space-x-4">
                <NavLink exact to="/" className="hover:underline" activeClassName="underline">Profile</NavLink>
                <NavLink to="/profile" className="hover:underline" activeClassName="underline">Profile</NavLink>
                <NavLink to="/hobbies" className="hover:underline" activeClassName="underline">Hobbies</NavLink>
                <NavLink to="/projects" className="hover:underline" activeClassName="underline">Projects</NavLink>
                <NavLink to="/acheivements" className="hover:underline" activeClassName="underline">Achievements</NavLink>
                <NavLink to="/blog" className="hover:underline" activeClassName="underline">Blog</NavLink>
            </nav>
        </header>
    )
}

export default Header;