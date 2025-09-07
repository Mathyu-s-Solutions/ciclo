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
            <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F2F2F2' }}>
                <img src="/img/ciclo-logo.png" alt="Ciclo Logo" style={{ height: 80, width: 'auto' }} />
            </div>
        );
    }
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
