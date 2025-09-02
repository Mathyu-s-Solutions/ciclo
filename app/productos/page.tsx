"use client"

import { useRef, useState } from "react";
import type { RefObject } from "react";
import Image from "next/image";
import '../../styles/spin-variable.css';

interface Producto {
    key: string;
    label: string;
    ref: RefObject<HTMLDivElement | null>;
}

export default function ProductosPage() {
    const productos: Producto[] = [
        {
            key: "agregados",
            label: "Agregados Reciclados",
            ref: useRef<HTMLDivElement>(null),
        },
        {
            key: "adoquines",
            label: "Adoquines",
            ref: useRef<HTMLDivElement>(null),
        },
        {
            key: "ladrillos",
            label: "Ladrillos",
            ref: useRef<HTMLDivElement>(null),
        },
        {
            key: "separadores",
            label: "Separadores de Concreto",
            ref: useRef<HTMLDivElement>(null),
        },
    ];
    const [active, setActive] = useState<string>(productos[0].key);

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
                    Conoce nuestros productos
                </h1>
                <div className="sticky top-0 z-20 flex flex-wrap justify-center gap-10 mb-12 py-10 bg-[#F2F2F2]">
                    {productos.map((p) => (
                        <button
                            key={p.key}
                            onClick={() => handleClick(p.key)}
                            className={`px-6 py-2 rounded-lg border font-medium transition-colors duration-200 ${active === p.key ? "bg-[#2451D7] text-[#F2F2F2] border-[#2451D7]" : "text-[#2451D7] border-[#2451D7] bg-[#F2F2F2]"}`}
                        >
                            {p.label}
                        </button>
                    ))}
                </div>
                <div className="flex flex-col gap-20 px-4 sm:px-6 lg:px-8">
                    <div ref={productos[0].ref} className="flex flex-col md:flex-row items-center gap-8 scroll-mt-56 sm:scroll-mt-40 md:scroll-mt-72">
                        <div className="w-full md:w-1/2 flex justify-end">
                            <div className="flex items-center justify-center w-60 h-60 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] mx-auto rounded-full border-2 border-[#2451D7] relative">
                                <div className="absolute inset-0 flex items-center justify-center spin-variable">
                                    <div className="absolute top-0 left-1/2 w-6 h-6 rounded-full bg-[#2451D7]" style={{ transform: 'translate(-50%, -50%)' }}></div>
                                </div>
                                <Image src="/pages/productos/agregados.png" alt="Servicio 1" width={220} height={220} className="object-contain" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h4 className="text-base sm:text-xl lg:text-2xl text-left mb-4 font-medium font-bold">Agregados Reciclados</h4>
                            <p className="mb-2">Descriptivo</p>
                            <p className="mb-4">Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:</p>
                            <p className="mb-2">Permisos y autorizaciones</p>
                            <p className="mb-2">Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:</p>
                            <div className="mt-6">
                                <button className="bg-[#FFD34E] text-[#1F1B3B] font-medium px-6 py-2 rounded-lg text-base shadow flex items-center gap-2">
                                    Ficha Técnica
                                    <span className="text-lg">↓</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div ref={productos[1].ref} className="flex flex-col md:flex-row-reverse items-center gap-8 scroll-mt-56 sm:scroll-mt-40 md:scroll-mt-72">
                        <div className="w-full md:w-1/2 flex justify-start">
                            <div className="flex items-center justify-center w-60 h-60 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] mx-auto rounded-full border-2 border-[#2451D7] relative">
                                <div className="absolute inset-0 flex items-center justify-center spin-variable">
                                    <div className="absolute top-1/2 right-0 w-6 h-6 rounded-full bg-[#2451D7]" style={{ transform: 'translate(50%, -50%)' }}></div>
                                </div>
                                <Image src="/pages/productos/adoquin.png" alt="Servicio 2" width={220} height={220} className="object-contain" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h4 className="text-base sm:text-xl lg:text-2xl text-left mb-4 font-medium font-bold">Adoquines</h4>
                            <p className="mb-2">Medios digitales - Plataforma Recylink</p>
                            <p className="mb-4">Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:</p>
                            <p className="mb-2">Beneficios Ambientales</p>
                            <p className="mb-2">Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:</p>
                            <div className="mt-6">
                                <button className="bg-[#FFD34E] text-[#1F1B3B] font-medium px-6 py-2 rounded-lg text-base shadow flex items-center gap-2">
                                    Ficha Técnica
                                    <span className="text-lg">↓</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div ref={productos[2].ref} className="flex flex-col md:flex-row items-center gap-8 scroll-mt-56 sm:scroll-mt-40 md:scroll-mt-72">
                        <div className="w-full md:w-1/2 flex justify-end mb-6 md:mb-0">
                            <div className="flex items-center justify-center w-60 h-60 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] mx-auto rounded-full border-2 border-[#2451D7] relative">
                                <div className="absolute inset-0 flex items-center justify-center spin-variable">
                                    <div className="absolute bottom-0 left-1/2 w-6 h-6 rounded-full bg-[#2451D7]" style={{ transform: 'translate(-50%, 50%)' }}></div>
                                </div>
                                <Image src="/pages/productos/ladrillo.png" alt="Servicio 3" width={220} height={220} className="object-contain" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h4 className="text-base sm:text-xl lg:text-2xl text-left mb-4 font-medium font-bold">Ladrillos</h4>
                            <p className="mb-2">Descripción adicional</p>
                            <p className="mb-4">Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:</p>
                            <p className="mb-2">Más beneficios</p>
                            <p className="mb-2">Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:</p>
                            <div className="mt-6">
                                <button className="bg-[#FFD34E] text-[#1F1B3B] font-medium px-6 py-2 rounded-lg text-base shadow flex items-center gap-2">
                                    Ficha Técnica
                                    <span className="text-lg">↓</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div ref={productos[3].ref} className="flex flex-col md:flex-row-reverse items-center gap-8 scroll-mt-56 sm:scroll-mt-40 md:scroll-mt-72">
                        <div className="w-full md:w-1/2 flex justify-start mb-6 md:mb-0">
                            <div className="flex items-center justify-center w-60 h-60 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] mx-auto rounded-full border-2 border-[#2451D7] relative">
                                <div className="absolute inset-0 flex items-center justify-center spin-variable">
                                    <div className="absolute top-1/2 left-0 w-6 h-6 rounded-full bg-[#2451D7]" style={{ transform: 'translate(-50%, -50%)' }}></div>
                                </div>
                                <Image src="/pages/productos/separadores.png" alt="Servicio 4" width={220} height={220} className="object-contain" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h4 className="text-base sm:text-xl lg:text-2xl text-left mb-4 font-medium font-bold">Separadores de Concreto</h4>
                            <p className="mb-2">Título adicional</p>
                            <p className="mb-4">Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:</p>
                            <p className="mb-2">Beneficio extra</p>
                            <p className="mb-2">Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:</p>
                            <div className="mt-6">
                                <button className="bg-[#FFD34E] text-[#1F1B3B] font-medium px-6 py-2 rounded-lg text-base shadow flex items-center gap-2">
                                    Ficha Técnica
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
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">¿No encontraste lo que buscabas?</h1>
                        <h1 className="text-xl sm:text-3xl mb-8">Contáctanos y desarrollaremos una solución a la medida de tus necesidades.</h1>
                    </div>
                    <div className="w-full md:w-1/3 flex md:justify-end justify-center">
                        <button className="bg-[#FFD34E] text-[#1F1B3B] font-medium px-8 py-4 rounded-lg text-xl shadow transition-colors duration-200">Contáctanos</button>
                    </div>
                </div>
            </section>
        </>
    );
}
