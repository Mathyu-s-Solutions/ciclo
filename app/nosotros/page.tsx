"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function NosotrosPage() {
    const { t } = useTranslation("nosotros");
    const aliados = Object.values(t('aliados', { returnObjects: true })) as Array<{ titulo: string; descripcion: string; img: string }>;
    const [index, setIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prev) => (prev + 1) % aliados.length);
        }, 3000);
        return () => clearTimeout(timer);
    }, [index, aliados.length]);

    const handleChangeAliado = (i: number) => {
        if (i === index) return;
        setIsFading(true);
        setTimeout(() => {
            setIndex(i);
            setIsFading(false);
        }, 250);
    };
    return (
        <>
            <main className="max-w-6xl mx-auto px-4 py-12 overflow-x-hidden">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-20 pt-30 px-4 sm:px-6 lg:px-8 relative" style={{ minHeight: '260px' }}>
                    <motion.div
                        className="w-full md:w-1/2 flex justify-center md:justify-start z-20"
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-[#1F1B3B] text-base sm:text-xl font-bricolage max-w-2xl md:max-w-3xl px-2 md:px-0">
                            {t('intro')}
                        </p>
                    </motion.div>
                    <motion.div
                        className="w-full md:w-1/2 flex justify-center md:justify-end"
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="w-80 h-48 md:w-[30rem] md:h-75 rounded-lg overflow-hidden">
                            <Image src="/pages/nosotros/personal.jpg" alt="Fondo" width={400} height={220} className="object-cover w-full h-full" />
                        </div>
                    </motion.div>
                </div>
            </main>
            <section className="relative bg-[#52B2EB] py-20 py-40">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-stretch justify-center md:justify-center gap-20 px-4">
                    {[{
                        img: "/pages/nosotros/mision.png",
                        alt: "Misión",
                        titulo: t('mision.titulo'),
                        descripcion: t('mision.descripcion')
                    }, {
                        img: "/pages/nosotros/vision.png",
                        alt: "Visión",
                        titulo: t('vision.titulo'),
                        descripcion: t('vision.descripcion')
                    }, {
                        img: "/pages/nosotros/proposito.png",
                        alt: "Propósito",
                        titulo: t('proposito.titulo'),
                        descripcion: t('proposito.descripcion')
                    }].map((item, i) => (
                        <motion.div
                            key={item.titulo}
                            className="rounded-lg shadow-lg p-8 flex flex-col min-h-[350px] w-full md:w-1/3 max-w-2xs flex-1 font-bricolage transition-transform duration-300 hover:-translate-y-2"
                            style={{ background: '#F2F2F2', boxShadow: '4px 4px 6px #B3B3B3' }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.15 * i }}
                        >
                            <div className="flex flex-col items-center w-full mb-2">
                                <Image
                                    src={item.img}
                                    alt={item.alt}
                                    width={48}
                                    height={48}
                                />
                                <h4 style={{ color: '#2451D7' }} className="text-2xl mb-2 text-center w-full">{item.titulo}</h4>
                            </div>
                            <p style={{ color: '#1F1B3B' }} className="text-base text-left">{item.descripcion}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-12 my-8 md:my-20">
                <motion.h1
                    className="my-8 max-w-2xl text-2xl sm:text-3xl lg:text-4xl font-medium px-4 sm:px-6 lg:px-8 mb-20"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                >
                    {t('aliados_titulo')}
                </motion.h1>
                <div className="flex flex-col md:flex-row items-center gap-8 px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="w-full md:w-1/2 flex flex-col justify-center items-start min-h-[180px] h-[220px]"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex flex-col justify-center h-full">
                            <h4 className={`text-[#2451D7] text-2xl mb-4 transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>{aliados[index].titulo}</h4>
                        </div>
                        <div className="flex gap-2 items-center mt-4 mb-2">
                            {aliados.map((a, i) => (
                                <button
                                    key={i}
                                    className={`w-3 h-3 rounded-full ${index === i ? 'bg-[#2451D7]' : 'bg-[#E5E5E5]'} inline-block border-none cursor-pointer`}
                                    onClick={() => handleChangeAliado(i)}
                                    aria-label={`Ver aliado ${a.titulo}`}
                                />
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        className="w-full md:w-1/2 flex items-center justify-center relative h-[320px]"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="relative w-[320px] h-[320px] flex items-center justify-center group transition-all duration-300 hover:scale-105">
                            <button
                                className="absolute left-[-56px] top-1/2 -translate-y-1/2 text-[#2451D7] text-4xl font-bold bg-transparent border-none p-0 m-0 cursor-pointer"
                                onClick={() => handleChangeAliado((index - 1 + aliados.length) % aliados.length)}
                                aria-label="Anterior aliado"
                                style={{ opacity: 0.9 }}
                            >
                                {"<"}
                            </button>
                            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-white flex items-center justify-center transition-all duration-500">
                                <Image
                                    src={aliados[index].img}
                                    alt={aliados[index].titulo}
                                    width={320}
                                    height={320}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <button
                                className="absolute right-[-56px] top-1/2 -translate-y-1/2 text-[#2451D7] text-4xl font-bold bg-transparent border-none p-0 m-0 cursor-pointer"
                                onClick={() => handleChangeAliado((index + 1) % aliados.length)}
                                aria-label="Siguiente aliado"
                                style={{ opacity: 0.9 }}
                            >
                                {">"}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-12">
                <motion.h1
                    className="my-8 max-w-2xl text-2xl sm:text-3xl lg:text-4xl font-medium px-4 sm:px-6 lg:px-8 mb-10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    {t('politicas_titulo')}
                </motion.h1>
                <motion.p
                    className="mb-10 text-[#1F1B3B] px-4 sm:px-6 lg:px-8 max-w-3xl mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {t('politicas_intro')}
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 px-4 sm:px-6 lg:px-8">
                    {Object.values(t('politicas', { returnObjects: true })).slice(0, 3).map((pol: { titulo: string; file: string }, i: number) => (
                        <motion.a
                            key={i}
                            href={pol.file}
                            download
                            className="bg-[#E5E5E5] rounded-lg flex flex-col items-start gap-4 px-6 py-5 font-bricolage shadow cursor-pointer transition-transform duration-300 hover:-translate-y-2 no-underline"
                            style={{ textDecoration: 'none' }}
                            aria-label={`Descargar ${pol.titulo}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.15 * i }}
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <img
                                    src="/img/Icon.svg"
                                    alt="icon"
                                    className="w-8 h-8"
                                />
                                <span className="text-base font-medium text-[#1F1B3B]">{pol.titulo}</span>
                            </div>
                        </motion.a>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 px-4 sm:px-6 lg:px-8">
                    {Object.values(t('politicas', { returnObjects: true })).slice(3).map((pol: { titulo: string; file: string }, i: number) => (
                        <motion.a
                            key={i}
                            href={pol.file}
                            download
                            className="bg-[#E5E5E5] rounded-lg flex flex-col items-start gap-4 px-6 py-5 font-bricolage shadow cursor-pointer transition-transform duration-300 hover:-translate-y-2 no-underline"
                            style={{ textDecoration: 'none' }}
                            aria-label={`Descargar ${pol.titulo}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.15 * i }}
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <img
                                    src="/img/Icon.svg"
                                    alt="icon"
                                    className="w-8 h-8"
                                />
                                <span className="text-base font-medium text-[#1F1B3B]">{pol.titulo}</span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </section>
        </>
    );
}
