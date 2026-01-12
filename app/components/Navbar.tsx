"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL || "/whatsapp";
  const isExternal = /^https?:\/\//i.test(whatsappUrl);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Logo />
            <span className="text-xl font-bold text-gray-900">ViknBooks</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href={"/#integrations"} className="text-gray-600 hover:text-green-600 transition">Integrations</Link>
            <Link href={"/#categories"} className="text-gray-600 hover:text-green-600 transition">Categories</Link>
            <Link href={"/#support"} className="text-gray-600 hover:text-green-600 transition">Support</Link>
            {isExternal ? (
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                Get Started
              </a>
            ) : (
              <Link href={whatsappUrl} className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                Get Started
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link href={"/#integrations"} className="block text-gray-600 hover:text-green-600">Integrations</Link>
            <Link href={"/#categories"} className="block text-gray-600 hover:text-green-600">Categories</Link>
            <Link href={"/#support"} className="block text-gray-600 hover:text-green-600">Support</Link>
            {isExternal ? (
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Get Started
              </a>
            ) : (
              <Link href={whatsappUrl} className="w-full px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Get Started
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
