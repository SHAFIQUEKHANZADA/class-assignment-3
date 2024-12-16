"use client";

import Link from "next/link";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Contact", link: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#D9D9D9] md:h-[88px] flex items-center]">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">Logo</Link>
        </div>

        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
        <TiThMenu className="text-[30px]"/>
        </button>

        {/* Navigation Items */}
        <ul
          className={`md:flex space-x-8 ${
            isMenuOpen ? "block" : "hidden"
          } absolute md:relative bg-[#D9D9D9] md:bg-transparent w-full md:w-auto top-[70px] left-0 md:top-auto md:left-auto z-50 md:z-auto`}
        >
          {navItems.map((item, index) => (
            <li key={index} className="border-b md:border-none">
              <Link
                href={item.link}
                className="block md:inline-block px-4 py-2 md:text-[20px] md:font-medium md:px-0 text-[#4C4C4C] hover:text-[#3e3e3e] transition duration-300"
                onClick={() => setIsMenuOpen(false)}  
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
