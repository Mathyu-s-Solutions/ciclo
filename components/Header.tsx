"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation("common");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }
  }, [isDarkMode]);
  const langBtnRef = useRef<HTMLButtonElement | null>(null);
  const [menuPos, setMenuPos] = useState<{ top: number, left: number } | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [highlightStyle, setHighlightStyle] = useState<{ left: number; width: number } | null>(null);
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const currentPath = usePathname();
  const navigationItems = [
    { name: "Inicio", href: "/inicio" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Planta", href: "/planta" },
    { name: "Productos", href: "/productos" },
    { name: "Contacto", href: "/contacto" },
  ].map(item => ({
    ...item,
    isActive: item.href !== "#" && currentPath === item.href
  }));

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.cookie = `i18next=${lng}; path=/`;
  };

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
  }, [hoveredIndex, currentPath, i18n.language]);

  const darkHeaderBg = isDarkMode ? '#1F1B3B' : undefined;
  const darkTextColor = isDarkMode ? '#52B2EB' : '#1F1B3B';
  const darkHighlightBorder = isDarkMode ? '#FFD44D' : '#1F1B3B';
  const darkHighlightBg = isDarkMode ? '#1F1B3B' : '#F2F2F2';
  const darkMenuBg = isDarkMode ? '#1F1B3B' : '#F2F2F2';
  const darkMenuText = isDarkMode ? '#52B2EB' : '#1F1B3B';
  const darkMenuBorder = isDarkMode ? '#FFD44D' : '#F2F2F2';
  return (
    <nav className="relative z-10" style={{ background: darkHeaderBg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Image
              src={isDarkMode ? "/img/ciclo-white.png" : "/img/ciclo-logo.png"}
              alt="Ciclo Logo"
              width={140}
              height={45}
              priority
              className="h-18 w-auto object-contain"
            />
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-6 relative">
              {highlightStyle && (
                <div
                  className="absolute top-0 h-full rounded-lg shadow-sm transition-all duration-300"
                  style={{
                    left: highlightStyle.left,
                    width: highlightStyle.width,
                    zIndex: 0,
                    background: darkHighlightBg,
                    border: `1px solid ${darkHighlightBorder}`,
                    transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                  }}
                />
              )}
              {navigationItems.map((item, idx) => (
                <a
                  key={item.name}
                  href={item.href}
                  ref={el => { navRefs.current[idx] = el; }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={
                    `px-5 py-2.5 rounded-lg text-base md:text-sm lg:text-sm font-medium transition-all duration-300 relative z-10`
                  }
                  style={{ color: darkTextColor }}
                >
                  {t(item.name)}
                </a>
              ))}

              <div className="flex items-center space-x-2 ml-6">
                <div className="relative group flex-shrink-0 items-center space-x-1 px-3 py-2 rounded-full transition-all duration-200 cursor-pointer z-10" style={{ minWidth: '56px' }}>
                  <button
                    ref={langBtnRef}
                    className="text-sm font-medium focus:outline-none flex items-center cursor-pointer"
                    aria-label="Cambiar idioma"
                    style={{ color: darkTextColor }}
                    onClick={() => {
                      if (!isMenuOpen && langBtnRef.current) {
                        const rect = langBtnRef.current.getBoundingClientRect();
                        setMenuPos({
                          top: rect.bottom + window.scrollY,
                          left: rect.left + window.scrollX
                        });
                      }
                      setIsMenuOpen(prev => !prev);
                    }}
                  >
                    {(i18n.language ? i18n.language : 'es').toUpperCase()}
                    <svg
                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}
                      style={{ color: darkTextColor }}
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
                  </button>
                  {isMenuOpen && typeof window !== 'undefined' && menuPos && createPortal(
                    <div style={{ position: 'absolute', top: menuPos.top, left: menuPos.left, minWidth: '56px', background: darkMenuBg, border: `1px solid ${darkMenuBorder}`, borderRadius: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', zIndex: 9999, cursor: 'pointer' }}>
                      {i18n.language === 'es' ? (
                        <button
                          className="block w-full text-left px-4 py-2 cursor-pointer hover:bg-gray-100"
                          style={{ color: darkMenuText }}
                          onClick={() => { changeLanguage('en'); setIsMenuOpen(false); }}
                        >
                          EN
                        </button>
                      ) : (
                        <button
                          className="block w-full text-left px-4 py-2 cursor-pointer"
                          style={{ color: darkMenuText }}
                          onClick={() => { changeLanguage('es'); setIsMenuOpen(false); }}
                        >
                          ES
                        </button>
                      )}
                    </div>, document.body
                  )}
                </div>
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-full border transition-colors duration-200 cursor-pointer"
                  aria-label="Cambiar modo claro/oscuro"
                  style={{ borderColor: isDarkMode ? '#FFD44D' : '#1F1B3B', background: isDarkMode ? '#1F1B3B' : '#F2F2F2' }}
                  onClick={() => setIsDarkMode(prev => !prev)}
                >
                  {isDarkMode ? (
                    <svg className="w-6 h-6" fill="none" stroke="#F2F2F2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth={2} />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                  )}
                </button>
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t" style={{ borderColor: isDarkMode ? '#FFD44D' : '#1F1B3B', background: darkHeaderBg }}>
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={
                    item.isActive
                      ? "block px-4 py-3 rounded-lg text-base md:text-sm lg:text-sm font-medium border shadow-sm"
                      : "block px-4 py-3 rounded-lg text-base md:text-sm lg:text-sm font-medium transition-all duration-200 hover:bg-gray-50"
                  }
                  style={{ color: darkTextColor, background: item.isActive ? darkHighlightBg : 'transparent', borderColor: item.isActive ? darkHighlightBorder : 'transparent' }}
                >
                  {t(item.name)}
                </a>
              ))}
              <div className="flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200" style={{ background: 'transparent' }}>
                <button
                  className="text-base font-medium focus:outline-none"
                  style={{ color: darkTextColor }}
                  onClick={() => changeLanguage(i18n.language === "es" ? "en" : "es")}
                  aria-label="Cambiar idioma"
                >
                  {(i18n.language ? i18n.language : 'es').toUpperCase()}
                </button>
                <svg
                  className="w-4 h-4"
                  style={{ color: darkTextColor }}
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
