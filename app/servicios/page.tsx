
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function ServiciosPage() {
    const router = useRouter();
    const { t } = useTranslation("servicios");
    return (
        <>
            <main className="max-w-6xl mx-auto px-4 py-20">
                <div className="flex flex-col gap-20 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-base sm:text-xl lg:text-2xl text-left mb-4">{t('servicio1.subtitulo')}</h2>
                            <p className="mb-2">{t('servicio1.descripcion')}</p>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-start">
                            <Image src="/pages/servicios/servicios1.jpg" alt="Servicio 1" width={400} height={220} className="rounded-lg w-full max-w-md bg-gray-100 object-cover transition-transform duration-300 hover:-translate-y-2" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-1/2">
                                <h2 className="text-base sm:text-xl lg:text-2xl text-left mb-4">{t('servicio2.subtitulo')}</h2>
                                <p className="mb-2">{t('servicio2.descripcion')}</p>
                            </div>
                            <div className="w-full md:w-1/2 flex justify-end">
                                <Image src="/pages/servicios/servicios2.jpg" alt="Servicio 2" width={400} height={220} className="rounded-lg w-full max-w-md bg-gray-100 object-cover transition-transform duration-300 hover:-translate-y-2" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                            <div className="w-full md:w-1/2">
                                <h2 className="text-base sm:text-xl lg:text-2xl text-left mb-4">{t('servicio3.subtitulo')}</h2>
                                <p className="mb-2">{t('servicio3.descripcion')}</p>
                            </div>
                            <div className="w-full md:w-1/2 flex justify-start mb-6 md:mb-0">
                                <Image src="/pages/servicios/servicios3.jpg" alt="Servicio 3" width={400} height={220} className="rounded-lg w-full max-w-md bg-gray-100 object-cover transition-transform duration-300 hover:-translate-y-2" />
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <section className="relative bg-[#2451D7] py-40 mt-20">
                <div className="max-w-3xl mx-auto text-center px-4">
                    <h3 className="text-[#F2F2F2] !important text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">{t('cta.titulo')}</h3>
                    <h3 className="text-[#F2F2F2] !important text-xl sm:text-3xl mb-8">{t('cta.descripcion')}</h3>
                    <button
                        className="font-poppins inline-block font-light text-2xl underline underline-offset-4 px-8 py-4 rounded-lg transition-colors duration-200 hover:bg-[#F2F2F2] cursor-pointer"
                        onClick={() => router.push('/contacto')}
                    >
                        {t('cta.boton')}
                    </button>
                </div>

            </section>

        </>

    );
}
