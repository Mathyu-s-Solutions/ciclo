
"use client";

import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { RefObject } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import '../../styles/spin-variable.css';

interface Producto {
    key: string;
    label: string;
    ref: RefObject<HTMLDivElement | null>;
}

export default function ProductosPage() {
    const { t } = useTranslation("productos");
    const router = useRouter();
    const productos: Producto[] = [
        {
            key: "agregados",
            label: t("agregados.titulo"),
            ref: useRef<HTMLDivElement>(null),
        },
        {
            key: "adoquines",
            label: t("adoquines.titulo"),
            ref: useRef<HTMLDivElement>(null),
        },
        {
            key: "ladrillos",
            label: t("ladrillos.titulo"),
            ref: useRef<HTMLDivElement>(null),
        },
        {
            key: "separadores",
            label: t("separadores.titulo"),
            ref: useRef<HTMLDivElement>(null),
        },
    ];
    const [active, setActive] = useState<string>(productos[0].key);

    useEffect(() => {
        const sectionRefs = productos.map(p => p.ref.current).filter(Boolean);
        if (sectionRefs.length === 0) return;
        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            const visible = entries.filter(e => e.isIntersecting);
            if (visible.length > 0) {
                const sorted = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                const idx = sectionRefs.findIndex(ref => ref === sorted[0].target);
                if (productos[idx] && productos[idx].key !== active) {
                    setActive(productos[idx].key);
                }
            }
        };
        const observer = new window.IntersectionObserver(handleIntersect, {
            root: null,
            rootMargin: "-30% 0px -60% 0px",
            threshold: 0.1,
        });
        sectionRefs.forEach(ref => {
            if (ref) observer.observe(ref);
        });
        return () => {
            sectionRefs.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
            observer.disconnect();
        };
    }, [productos, active]);

    const handleClick = (key: string) => {
        setActive(key);
        const prod = productos.find(p => p.key === key);
        if (prod?.ref?.current) {
            prod.ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <>
            <main className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="mb-8 max-w-full text-2xl sm:text-3xl lg:text-4xl font-medium px-4 sm:px-6 lg:px-8">
                    {t('titulo')}
                </h1>
                <div className="sticky top-0 z-20 flex flex-wrap justify-center gap-10 mb-12 py-10 bg-[#F2F2F2]">
                    {productos.map((p) => (
                        <button
                            key={p.key}
                            onClick={() => handleClick(p.key)}
                            className={`px-6 py-2 rounded-lg border font-medium transition-colors duration-200 cursor-pointer ${active === p.key ? "bg-[#2451D7] text-[#F2F2F2] border-[#2451D7]" : "text-[#2451D7] border-[#2451D7] bg-[#F2F2F2]"}`}
                        >
                            {p.label}
                        </button>
                    ))}
                </div>
                <div className="flex flex-col gap-20 px-4 sm:px-6 lg:px-8">
                    {/* Agregados Reciclados */}
                    <div ref={productos[0].ref} className="flex flex-col md:flex-row items-center gap-8 scroll-mt-56 sm:scroll-mt-40 md:scroll-mt-72">
                        <div className="w-full md:w-1/2 flex justify-end">
                            <div className="flex items-center justify-center w-60 h-60 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] mx-auto rounded-full border-2 border-[#2451D7] relative">
                                <div className="absolute inset-0 flex items-center justify-center spin-variable">
                                    <div className="absolute top-0 left-1/2 w-6 h-6 rounded-full bg-[#2451D7]" style={{ transform: 'translate(-50%, -50%)' }}></div>
                                </div>
                                <Image src="/pages/productos/agregados.png" alt={t('agregados.titulo')} width={220} height={220} className="object-contain" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h4 className="text-base sm:text-xl lg:text-2xl text-left mb-4 font-medium font-bold">{t('agregados.titulo')}</h4>
                            <p className="mb-2">{t('agregados.descripcion')}</p>
                            <p className="mb-4">{t('agregados.body')}</p>
                            <p className="mb-2">{t('agregados.permisos')}</p>
                            <p className="mb-2">{t('agregados.body2')}</p>
                            <div className="mt-6">
                                <button className="bg-[#FFD34E] text-[#1F1B3B] font-medium px-6 py-2 rounded-lg text-base shadow flex items-center gap-2 cursor-pointer">
                                    {t('agregados.ficha')}
                                    <span className="text-lg">↓</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Adoquines */}
                    <div ref={productos[1].ref} className="flex flex-col md:flex-row-reverse items-center gap-8 scroll-mt-56 sm:scroll-mt-40 md:scroll-mt-72">
                        <div className="w-full md:w-1/2 flex justify-start">
                            <div className="flex items-center justify-center w-60 h-60 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] mx-auto rounded-full border-2 border-[#2451D7] relative">
                                <div className="absolute inset-0 flex items-center justify-center spin-variable">
                                    <div className="absolute top-1/2 right-0 w-6 h-6 rounded-full bg-[#2451D7]" style={{ transform: 'translate(50%, -50%)' }}></div>
                                </div>
                                <Image src="/pages/productos/adoquin.png" alt={t('adoquines.titulo')} width={220} height={220} className="object-contain" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h4 className="text-base sm:text-xl lg:text-2xl text-left mb-4 font-medium font-bold">{t('adoquines.titulo')}</h4>
                            <p className="mb-2">{t('adoquines.descripcion')}</p>
                            <p className="mb-4">{t('adoquines.body')}</p>
                            <p className="mb-2">{t('adoquines.beneficios')}</p>
                            <p className="mb-2">{t('adoquines.body2')}</p>
                            <div className="mt-6">
                                <button className="bg-[#FFD34E] text-[#1F1B3B] font-medium px-6 py-2 rounded-lg text-base shadow flex items-center gap-2">
                                    {t('adoquines.ficha')}
                                    <span className="text-lg">↓</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Ladrillos */}
                    <div ref={productos[2].ref} className="flex flex-col md:flex-row items-center gap-8 scroll-mt-56 sm:scroll-mt-40 md:scroll-mt-72">
                        <div className="w-full md:w-1/2 flex justify-end mb-6 md:mb-0">
                            <div className="flex items-center justify-center w-60 h-60 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] mx-auto rounded-full border-2 border-[#2451D7] relative">
                                <div className="absolute inset-0 flex items-center justify-center spin-variable">
                                    <div className="absolute bottom-0 left-1/2 w-6 h-6 rounded-full bg-[#2451D7]" style={{ transform: 'translate(-50%, 50%)' }}></div>
                                </div>
                                <Image src="/pages/productos/ladrillo.png" alt={t('ladrillos.titulo')} width={220} height={220} className="object-contain" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h4 className="text-base sm:text-xl lg:text-2xl text-left mb-4 font-medium font-bold">{t('ladrillos.titulo')}</h4>
                            <p className="mb-2">{t('ladrillos.descripcion')}</p>
                            <p className="mb-4">{t('ladrillos.body')}</p>
                            <p className="mb-2">{t('ladrillos.beneficios')}</p>
                            <p className="mb-2">{t('ladrillos.body2')}</p>
                            <div className="mt-6">
                                <button className="bg-[#FFD34E] text-[#1F1B3B] font-medium px-6 py-2 rounded-lg text-base shadow flex items-center gap-2">
                                    {t('ladrillos.ficha')}
                                    <span className="text-lg">↓</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Separadores de Concreto */}
                    <div ref={productos[3].ref} className="flex flex-col md:flex-row-reverse items-center gap-8 scroll-mt-56 sm:scroll-mt-40 md:scroll-mt-72">
                        <div className="w-full md:w-1/2 flex justify-start mb-6 md:mb-0">
                            <div className="flex items-center justify-center w-60 h-60 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] mx-auto rounded-full border-2 border-[#2451D7] relative">
                                <div className="absolute inset-0 flex items-center justify-center spin-variable">
                                    <div className="absolute top-1/2 left-0 w-6 h-6 rounded-full bg-[#2451D7]" style={{ transform: 'translate(-50%, -50%)' }}></div>
                                </div>
                                <Image src="/pages/productos/separadores.png" alt={t('separadores.titulo')} width={220} height={220} className="object-contain" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h4 className="text-base sm:text-xl lg:text-2xl text-left mb-4 font-medium font-bold">{t('separadores.titulo')}</h4>
                            <p className="mb-2">{t('separadores.descripcion')}</p>
                            <p className="mb-4">{t('separadores.body')}</p>
                            <p className="mb-2">{t('separadores.beneficios')}</p>
                            <p className="mb-2">{t('separadores.body2')}</p>
                            <div className="mt-6">
                                <button className="bg-[#FFD34E] text-[#1F1B3B] font-medium px-6 py-2 rounded-lg text-base shadow flex items-center gap-2">
                                    {t('separadores.ficha')}
                                    <span className="text-lg">↓</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <section className="relative bg-[#52B2EB] py-40 mt-20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                    <div className="w-full md:w-2/3 text-left">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">{t('cta.titulo')}</h1>
                        <h1 className="text-xl sm:text-3xl mb-8">{t('cta.descripcion')}</h1>
                    </div>
                    <div className="w-full md:w-1/3 flex md:justify-end justify-center">
                        <button
                            className="bg-[#FFD34E] text-[#1F1B3B] font-medium px-8 py-4 rounded-lg text-xl shadow transition-colors duration-200 cursor-pointer"
                            onClick={() => router.push('/contacto')}
                        >
                            {t('cta.boton')}
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
