"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [highlightStyle, setHighlightStyle] = useState<{ left: number; width: number } | null>(null);
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";
  const navigationItems = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "#" },
    { name: "Planta", href: "/planta" },
    { name: "Servicios", href: "#" },
    { name: "Productos", href: "#" },
    { name: "Contacto", href: "#" },
  ].map(item => ({
    ...item,
    isActive: item.href !== "#" && currentPath === item.href
  }));

  useEffect(() => {
    const idx = hoveredIndex !== null ? hoveredIndex : navigationItems.findIndex(i => i.isActive);
    const el = navRefs.current[idx];
    if (el) {
      const rect = el.getBoundingClientRect();
      const parentRect = el.parentElement?.getBoundingClientRect();
      if (parentRect) {
        setHighlightStyle({
          left: rect.left - parentRect.left,
          width: rect.width,
        });
      }
    } else {
      setHighlightStyle(null);
    }
  }, [hoveredIndex, currentPath]);

  return (
    <nav className="relative z-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Image
              src="/img/ciclo-logo.png"
              alt="Ciclo Logo"
              width={140}
              height={45}
              priority
              className="h-18 w-auto object-contain"
            />
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-6 relative">
              {/* Sliding highlight */}
              {highlightStyle && (
                <div
                  className="absolute top-0 h-full bg-[#F2F2F2] border border-[#1F1B3B] rounded-lg shadow-sm transition-all duration-300"
                  style={{
                    left: highlightStyle.left,
                    width: highlightStyle.width,
                    zIndex: 0,
                    transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                  }}
                />
              )}
              {/* Menu items */}
              {navigationItems.map((item, idx) => (
                <a
                  key={item.name}
                  href={item.href}
                  ref={el => { navRefs.current[idx] = el; }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={
                    "text-[#1F1B3B] px-5 py-2.5 rounded-lg text-base md:text-sm lg:text-sm font-medium transition-all duration-300 relative z-10"
                  }
                  style={{}}
                >
                  {item.name}
                </a>
              ))}

              <div className="group flex items-center space-x-1 ml-6 px-3 py-2 rounded-full transition-all duration-200 cursor-pointer relative z-10">
                <span className="text-[#1F1B3B] text-sm font-medium">Es</span>
                <svg
                  className="w-4 h-4 text-[#1F1B3B] transition-transform duration-200 group-hover:rotate-180"
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

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={
                    item.isActive
                      ? "bg-[#F2F2F2] text-[#1F1B3B] block px-4 py-3 rounded-lg text-base md:text-sm lg:text-sm font-medium border border-[#1F1B3B] shadow-sm"
                      : "text-[#1F1B3B] block px-4 py-3 rounded-lg text-base md:text-sm lg:text-sm font-medium transition-all duration-200 hover:text-[#1F1B3B] hover:bg-gray-50"
                  }
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-50 rounded-lg transition-all duration-200">
                <span className="text-[#1F1B3B] text-base font-medium">Es</span>
                <svg
                  className="w-4 h-4 text-[#1F1B3B]"
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
