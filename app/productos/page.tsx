"use client";

import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { RefObject } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import '../../styles/spin-variable.css';
import { motion } from "framer-motion";

interface Producto {
    key: string;
    label: string;
    ref: RefObject<HTMLDivElement | null>;
}

const tabVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.15 * i }
    })
};

const circleVariants = {
    hiddenLeft: { opacity: 0, x: -80 },
    visibleLeft: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    hiddenRight: { opacity: 0, x: 80 },
    visibleRight: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const contentVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

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
            <motion.main
                className="max-w-6xl mx-auto px-4 py-12"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1
                    className="mb-8 max-w-full text-2xl sm:text-3xl lg:text-4xl font-medium px-4 sm:px-6 lg:px-8"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {t('titulo')}
                </motion.h1>
                <motion.div
                    className="sticky top-0 z-20 flex flex-wrap justify-center gap-10 mb-12 py-10 hidden sm:flex"
                    style={{ background: 'var(--primary-bg)' }}
                    initial="hidden"
                    animate="visible"
                >
                    {productos.map((p, i) => {
                        const isActive = active === p.key;
                        return (
                            <motion.button
                                key={p.key}
                                onClick={() => handleClick(p.key)}
                                className="px-6 py-2 rounded-lg border font-medium transition-colors duration-200 cursor-pointer"
                                style={isActive
                                    ? {
                                        background: 'var(--primary-border)',
                                        color: 'var(--primary-bg)',
                                        borderColor: 'var(--primary-border)'
                                    }
                                    : {
                                        background: 'var(--primary-bg)',
                                        color: 'var(--primary-border)',
                                        borderColor: 'var(--primary-border)'
                                    }}
                                custom={i}
                                variants={tabVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {p.label}
                            </motion.button>
                        );
                    })}
                </motion.div>
                <div className="flex flex-col gap-20 px-4 sm:px-6 lg:px-8">
                    {productos.map((p, i) => {
                        const circleAnim = i % 2 === 0
                            ? { initial: "hiddenLeft", animate: "visibleLeft" }
                            : { initial: "hiddenRight", animate: "visibleRight" };
                        const imgSrc = [
                            "/pages/productos/agregados.png",
                            "/pages/productos/adoquin.png",
                            "/pages/productos/ladrillo.png",
                            "/pages/productos/separadores.png"
                        ][i];
                        const pdfHref = [
                            "/pages/productos/agregados.pdf",
                            "/pages/productos/adoquines.pdf",
                            "/pages/productos/ladrillos.pdf",
                            "/pages/productos/separadores.pdf"
                        ][i];
                        const pdfName = [
                            "Ficha_Tecnica_Agregados.pdf",
                            "Ficha_Tecnica_Adoquines.pdf",
                            "Ficha_Tecnica_Ladrillos.pdf",
                            "Ficha_Tecnica_Separadores.pdf"
                        ][i];
                        return (
                            <div
                                key={p.key}
                                ref={p.ref}
                                className={`flex flex-col md:flex-row${i % 2 === 1 ? '-reverse' : ''} items-center gap-8 scroll-mt-56 sm:scroll-mt-40 md:scroll-mt-72`}
                            >
                                <motion.div
                                    className="w-full md:w-1/2 flex justify-end"
                                    variants={circleVariants}
                                    initial={circleAnim.initial}
                                    whileInView={circleAnim.animate}
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    <div
                                        className="flex items-center justify-center w-60 h-60 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] mx-auto rounded-full border-2 relative"
                                        style={{ borderColor: 'var(--primary-border)', background: 'var(--primary-bg)' }}
                                    >
                                        <div className="absolute inset-0 flex items-center justify-center spin-variable">
                                            <div
                                                className={`absolute ${i === 0 ? 'top-0 left-1/2' : i === 1 ? 'top-1/2 right-0' : i === 2 ? 'bottom-0 left-1/2' : 'top-1/2 left-0'} w-6 h-6 rounded-full`}
                                                style={{
                                                    background: 'var(--orb-color)',
                                                    transform: i === 0
                                                        ? 'translate(-50%, -50%)'
                                                        : i === 1
                                                            ? 'translate(50%, -50%)'
                                                            : i === 2
                                                                ? 'translate(-50%, 50%)'
                                                                : 'translate(-50%, -50%)'
                                                }}
                                            ></div>
                                        </div>
                                        <Image src={imgSrc} alt={p.label} width={220} height={220} className="object-contain" />
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="w-full md:w-1/2 flex flex-col items-start"
                                    variants={contentVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    <h4 className="text-base sm:text-xl lg:text-2xl text-left mb-4 font-medium font-bold">{p.label}</h4>
                                    <p className="mb-4">{t(`${p.key}.descripcion`)}</p>
                                    <div className="mt-6">
                                        <a
                                            href={pdfHref}
                                            download={pdfName}
                                            className="bg-[#FFD34E] text-[#1F1B3B] font-medium px-6 py-2 rounded-lg text-base shadow flex items-center gap-2 cursor-pointer transition-colors duration-200"
                                            style={{ display: 'inline-flex', alignItems: 'center' }}
                                        >
                                            {t(`${p.key}.ficha`)}
                                            <span className="text-lg">↓</span>
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </motion.main>
            <section className="relative bg-[#52B2EB] py-16 md:py-40 mt-20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                    <motion.div
                        className="w-full md:w-2/3 text-left"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h6 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">{t('cta.titulo')}</h6>
                        <h6 className="text-xl sm:text-3xl mb-8">{t('cta.descripcion')}</h6>
                    </motion.div>
                    <motion.div
                        className="w-full md:w-1/3 flex md:justify-end justify-center"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <button
                            className="bg-[#FFD34E] text-[#1F1B3B] font-medium px-8 py-4 rounded-lg text-xl shadow transition-colors duration-200 cursor-pointer"
                            onClick={() => router.push('/contacto')}
                        >
                            {t('cta.boton')}
                        </button>
                    </motion.div>
                </div>
            </section>
        </>
    );
}