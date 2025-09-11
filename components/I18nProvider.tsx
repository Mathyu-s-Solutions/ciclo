"use client";
import { I18nextProvider } from "react-i18next";
import i18n from "../utils/i18n";
import { useTheme } from "../context/ThemeContext";

import { useEffect, useState } from "react";

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const timer = setTimeout(() => {
        setReady(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [i18n.language, mounted]);

  if (!mounted || !ready) {
    return (
      <div
        className={`w-screen h-screen flex items-center justify-center ${
          theme === "dark" ? "bg-[#1F1B3B]" : "bg-[#F2F2F2]"
        }`}
      >
        {theme === "dark" ? (
          <img
            src="/img/ciclo-white.png"
            alt="Ciclo Logo White"
            className="h-20 w-auto"
          />
        ) : (
          <img
            src="/img/ciclo-logo.png"
            alt="Ciclo Logo"
            className="h-20 w-auto"
          />
        )}
      </div>
    );
  }
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
