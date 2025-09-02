"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Inicio", href: "#", isActive: true },
    { name: "Nosotros", href: "#", isActive: false },
    { name: "Planta", href: "#", isActive: false },
    { name: "Servicios", href: "#", isActive: false },
    { name: "Productos", href: "#", isActive: false },
    { name: "Contacto", href: "#", isActive: false },
  ];

  return (
    <nav className="bg-white shadow-md relative z-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/img/ciclo-logo.png"
              alt="Ciclo Logo"
              width={140}
              height={45}
              priority
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-6">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={
                    item.isActive
                      ? "bg-gray-100 text-gray-800 px-5 py-2.5 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-200 transition-all duration-200"
                      : "text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-50 rounded-lg"
                  }
                >
                  {item.name}
                </a>
              ))}

              {/* Language Selector */}
              <div className="flex items-center space-x-1 ml-6 px-3 py-2 hover:bg-gray-50 rounded-full transition-all duration-200 cursor-pointer">
                <span className="text-gray-600 text-sm font-medium">Es</span>
                <svg
                  className="w-4 h-4 text-gray-500 transition-transform duration-200 hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={
                    item.isActive
                      ? "bg-gray-50 text-gray-900 block px-4 py-3 rounded-lg text-base font-medium border border-gray-200"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
                  }
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-50 rounded-lg transition-all duration-200">
                <span className="text-gray-600 text-base font-medium">Es</span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
