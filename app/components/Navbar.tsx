"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <a href="#integrations" className="text-gray-600 hover:text-green-600 transition">Integrations</a>
            <a href="#categories" className="text-gray-600 hover:text-green-600 transition">Categories</a>
            <a href="#support" className="text-gray-600 hover:text-green-600 transition">Support</a>
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Get Started
            </button>
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
            <a href="#integrations" className="block text-gray-600 hover:text-green-600">Integrations</a>
            <a href="#categories" className="block text-gray-600 hover:text-green-600">Categories</a>
            <a href="#support" className="block text-gray-600 hover:text-green-600">Support</a>
            <button className="w-full px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
