"use client"

import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function NosotrosPage() {
    const { t } = useTranslation("nosotros");
    const aliados = Object.values(t('aliados', { returnObjects: true })) as Array<{ titulo: string; descripcion: string; img: string }>;
    const [index, setIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

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
                    <div className="w-full md:w-1/2 flex justify-center md:justify-start z-20">
                        <p className="text-[#1F1B3B] text-base sm:text-xl font-bricolage max-w-2xl md:max-w-3xl px-2 md:px-0">
                            {t('intro')}
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <div className="w-80 h-48 md:w-[28rem] md:h-64 rounded-lg overflow-hidden">
                            <Image src="/pages/servicios/5-Servicios.webp" alt="Fondo" width={400} height={220} className="object-cover w-full h-full" />
                        </div>
                    </div>
                </div>
            </main>
            <section className="relative bg-[#52B2EB] py-20 py-40">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-stretch justify-center md:justify-center gap-20 px-4">
                    <div className="rounded-lg shadow-lg p-8 flex flex-col min-h-[350px] w-full md:w-1/3 max-w-2xs flex-1 font-bricolage transition-transform duration-300 hover:-translate-y-2" style={{ background: '#F2F2F2', boxShadow: '4px 4px 6px #B3B3B3' }} >
                        <div className="flex flex-col items-center w-full mb-2">
                            <svg className="w-12 h-12 mb-4 text-[#2451D7]" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                                <circle cx="24" cy="24" r="20" strokeWidth="2" />
                                <path d="M24 14v10l7 7" strokeWidth="2" />
                            </svg>
                            <h4 className="text-[#2451D7] text-2xl mb-2 text-center w-full">{t('mision.titulo')}</h4>
                        </div>
                        <p className="text-[#1F1B3B] text-base text-left">{t('mision.descripcion')}</p>
                    </div>
                    <div className="rounded-lg shadow-lg p-8 flex flex-col min-h-[350px] w-full md:w-1/3 max-w-2xs flex-1 font-bricolage transition-transform duration-300 hover:-translate-y-2" style={{ background: '#F2F2F2', boxShadow: '4px 4px 6px #B3B3B3' }} >
                        <div className="flex flex-col items-center w-full mb-2">
                            <svg className="w-12 h-12 mb-4 text-[#2451D7]" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                                <ellipse cx="24" cy="24" rx="16" ry="10" strokeWidth="2" />
                                <circle cx="24" cy="24" r="3" strokeWidth="2" />
                                <path d="M12 24c2-4 8-8 12-8s10 4 12 8" strokeWidth="2" />
                            </svg>
                            <h4 className="text-[#2451D7] text-2xl mb-2 text-center w-full">{t('vision.titulo')}</h4>
                        </div>
                        <p className="text-[#1F1B3B] text-base text-left">{t('vision.descripcion')}</p>
                    </div>
                    <div className="rounded-lg shadow-lg p-8 flex flex-col min-h-[350px] w-full md:w-1/3 max-w-2xs flex-1 font-bricolage transition-transform duration-300 hover:-translate-y-2" style={{ background: '#F2F2F2', boxShadow: '4px 4px 6px #B3B3B3' }} >
                        <div className="flex flex-col items-center w-full mb-2">
                            <svg className="w-12 h-12 mb-4 text-[#2451D7]" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                                <path d="M24 8v32M16 24h16" strokeWidth="2" />
                                <circle cx="24" cy="24" r="20" strokeWidth="2" />
                            </svg>
                            <h4 className="text-[#2451D7] text-2xl mb-2 text-center w-full">{t('proposito.titulo')}</h4>
                        </div>
                        <p className="text-[#1F1B3B] text-base text-left">{t('proposito.descripcion')}</p>
                    </div>
                </div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-12 my-8 md:my-20">
                <h1 className="my-8 max-w-2xl text-2xl sm:text-3xl lg:text-4xl font-medium px-4 sm:px-6 lg:px-8 mb-20">
                    {t('aliados_titulo')}
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-8 px-4 sm:px-6 lg:px-8">
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-start min-h-[180px] h-[220px]">
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
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center items-center relative h-[320px]">
                        <div className="relative w-[320px] h-[320px]">
                            {aliados.map((a, i) => {
                                const pos = ((i - index + aliados.length) % aliados.length);
                                const zIndex = 10 - pos;
                                const scale = 1 - pos * 0.08;
                                const translateX = pos * 30;
                                const opacity = pos === 0 ? 1 : 0.8 - pos * 0.2;
                                return (
                                    <div
                                        key={i}
                                        className={`absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl bg-white flex items-center justify-center transition-all duration-500 cursor-pointer ${pos === 0 ? '' : 'hover:scale-105'}`}
                                        style={{
                                            zIndex,
                                            transform: `scale(${scale}) translateX(${translateX}px)`,
                                            opacity,
                                            boxShadow: pos === 0 ? '0 8px 24px #0002' : '0 4px 12px #0001',
                                        }}
                                        onClick={() => handleChangeAliado(i)}
                                        aria-label={`Ver aliado ${a.titulo}`}
                                    >
                                        <Image src={a.img} alt={a.titulo} width={320} height={320} className="object-contain w-full h-full" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="my-8 max-w-2xl text-2xl sm:text-3xl lg:text-4xl font-medium px-4 sm:px-6 lg:px-8 mb-10">
                    {t('politicas_titulo')}
                </h1>
                <p className="mb-10  text-[#1F1B3B] px-4 sm:px-6 lg:px-8 max-w-3xl mb-20">
                    {t('politicas_intro')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 px-4 sm:px-6 lg:px-8">
                    {Object.values(t('politicas', { returnObjects: true })).slice(0, 3).map((pol: string, i: number) => (
                        <div key={i} className="bg-[#E5E5E5] rounded-lg flex items-center gap-4 px-6 py-5 font-bricolage shadow cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                            <svg className="w-8 h-8 text-[#1F1B3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
                                <path d="M7 7h10M7 11h10M7 15h6" strokeWidth="2" />
                            </svg>
                            <span className="text-base font-medium text-[#1F1B3B]">{pol}</span>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 px-4 sm:px-6 lg:px-8">
                    {Object.values(t('politicas', { returnObjects: true })).slice(3).map((pol: string, i: number) => (
                        <div key={i} className="bg-[#E5E5E5] rounded-lg flex items-center gap-4 px-6 py-5 font-bricolage shadow cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                            <svg className="w-8 h-8 text-[#1F1B3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
                                <path d="M7 7h10M7 11h10M7 15h6" strokeWidth="2" />
                            </svg>
                            <span className="text-base font-medium text-[#1F1B3B]">{pol}</span>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
