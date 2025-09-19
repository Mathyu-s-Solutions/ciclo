"use client";
import { I18nextProvider } from "react-i18next";
import i18n from "../utils/i18n";

import { useEffect, useState } from "react";

export default function I18nProvider({ children }: { children: React.ReactNode }) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setReady(true);
        }, 500);
        return () => clearTimeout(timer);
    }, [i18n.language]);

    if (!ready) {
        return (
            <div className="w-screen h-screen flex items-center justify-center bg-[#F2F2F2] dark:bg-[#1F1B3B]">
                {/*                 <img src="/img/ciclo-logo.png" alt="Ciclo Logo" className="h-20 w-auto dark:hidden" />
 */}                <img src="/img/ciclo-white.webp" alt="Ciclo Logo White" className="h-20 w-auto hidden dark:block" />
            </div>
        );
    }
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
