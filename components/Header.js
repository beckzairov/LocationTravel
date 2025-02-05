"use client";

import LanguageSwitcher from "./LanguageSwitcher";
import { IMAGES } from "../constants/images";

export default function Header() {
  return (
    <header className="shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={IMAGES.logo} alt="Logo" className="h-12" />

        {/* Navigation */}
        <nav className="space-x-6 flex items-center">
          <a href="#about" className="hover:text-blue-600">About Us</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#contact" className="hover:text-blue-600">Contact Us</a>

          {/* Language Selector Dropdown */}
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
