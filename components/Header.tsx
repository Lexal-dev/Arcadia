"use client"

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

export const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const newIsMobile = window.innerWidth <= 758;
            setIsMobile(newIsMobile);

            // Fermer le menu si la largeur de l'écran dépasse 758 pixels
            if (!newIsMobile && isDropdownOpen) {
                setIsDropdownOpen(false);
            }
        };

        // Vérifier si window est défini avant d'ajouter le gestionnaire d'événements
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth <= 758);
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [isDropdownOpen]);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState); 
    };

    return (
        <header className="w-full">
            <nav className='font-caption'>
            {isMobile ? null : <h1 className='font-caption text-4xl w-full h-full py-3'>Arcadia</h1>}
                {isMobile ? 
                    <div className='flex items-center justify-start px-2 pt-4'>
                        <Button className='text-2xl p-2 rounded border-white border-2' onClick={toggleDropdown}><Menu /></Button>
                        <h1 className='font-caption text-4xl w-full h-full'>Arcadia</h1>
                    </div>
                    : 
                    <ul className="flex justify-around py-4 bg-green-800 text-2xl border-t-2 border-b-2 border-white">
                        <li className='menuDefaultHover'><a href="#">Accueil</a></li>
                        <li className='menuDefaultHover'><a href="#">Services</a></li>
                        <li className='menuDefaultHover'><a href="#">Habitats</a></li>
                        <li className='menuDefaultHover'><a href="#">Contact</a></li>
                        <li className='menuDefaultHover'><a href="#">Connexion</a></li>
                    </ul>
                }

                {isDropdownOpen && (
                    <ul className='flex-col text-start bg-green-800 mt-3 py-2 text-xl border-t-2 border-b-2 border-white'>
                        <li className='mx-2 py-1 menuMobileHover'><a href="#">Accueil</a></li>
                        <li className='mx-2 py-1 menuMobileHover'><a href="#">Services</a></li>
                        <li className='mx-2 py-1 menuMobileHover'><a href="#">Habitats</a></li>
                        <li className='mx-2 py-1 menuMobileHover'><a href="#">Contact</a></li>
                        <li className='mx-2 py-1 menuMobileHover'><a href="#">Connexion</a></li>
                    </ul>
                )}
            </nav>
        </header>
    );
};