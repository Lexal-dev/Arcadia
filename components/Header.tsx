import { FaHome, FaUser  } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiServiceFill } from "react-icons/ri";
import { GiHabitatDome } from "react-icons/gi";
import Link from "next/link";

export const Header = () => {

    const navMenu = [
        {name: "Services", icon:RiServiceFill , path: "/services"},
        {name: "Habitats", icon:GiHabitatDome, path: "/habitats"},
        {name: "Contact", icon:IoIosMail, path: "/contact"}, 
    ];

    return(
        <header>
            <nav className="flex justify-around text-sm items-center gap-1 p-5 shadow-md md:text-xl bg-green-800 border-b-4 border-yellow-100">
                <Link href="/" className="flex items-center md:gap-1 text-white hover:text-yellow-200">
                    <FaHome/>
                    <span>Accueil</span>
                </Link>
                <ul className="flex items-center justify-around md:gap-5 w-full md:w-1/2 overflow-x-auto">
                    {navMenu.map((item) => (
                        <li key={item.name}>
                            <Link href={item.path} className="flex items-center md:gap-1 text-white hover:text-yellow-200">
                                <item.icon/>
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link href="/login" className="flex items-center justify-center rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200 hover:bg-yellow-200">
                    <FaUser className="text-gray-700"/>
                </Link>
            </nav>
        </header>        
    );
};