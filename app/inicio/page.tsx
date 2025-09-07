"use client"

import React from "react";
import { useTranslation } from "react-i18next";
import Hero from "../../components/Hero";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation("inicio");

  return (
    <>
      <Hero />
      <section className="w-full flex flex-col items-center py-16 bg-[#F2F2F2]">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-30 text-[#1F1B3B]">{t('productos_titulo')}</h2>
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mb-10">
          <div className="flex flex-col items-center justify-center border-2 border-[#1F1B3B] rounded-full w-72 h-72 -mx-3 aspect-square transition-all duration-300 hover:border-[#2451D7] group">
            <span className="text-[#2451D7] text-lg font-semibold mb-2 text-center">
              {t('productos.agregados').split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx < t('productos.agregados').split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </span>
            <Image src="/pages/inicio/agregado.png" alt={t('productos.agregados').replace(/\n/g, ' ')} width={140} height={140} className="mt-2 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="flex flex-col items-center justify-center border-2 border-[#1F1B3B] rounded-full w-72 h-72 -mx-3 aspect-square transition-all duration-300 hover:border-[#2451D7] group">
            <span className="text-[#2451D7] text-lg font-semibold mb-2 text-center">
              {t('productos.adoquines').split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx < t('productos.adoquines').split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </span>
            <Image src="/pages/inicio/adoquin.png" alt={t('productos.adoquines').replace(/\n/g, ' ')} width={140} height={140} className="mt-2 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="flex flex-col items-center justify-center border-2 border-[#1F1B3B] rounded-full w-72 h-72 -mx-3 aspect-square transition-all duration-300 hover:border-[#2451D7] group">
            <span className="text-[#2451D7] text-lg font-semibold mb-2 text-center">
              {t('productos.ladrillos').split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx < t('productos.ladrillos').split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </span>
            <Image src="/pages/inicio/ladrillo.png" alt={t('productos.ladrillos').replace(/\n/g, ' ')} width={140} height={140} className="mt-2 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="flex flex-col items-center justify-center border-2 border-[#1F1B3B] rounded-full w-72 h-72 -mx-3 aspect-square transition-all duration-300 hover:border-[#2451D7] group">
            <span className="text-[#2451D7] text-lg font-semibold mb-2 text-center">
              {t('productos.separadores').split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx < t('productos.separadores').split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </span>
            <Image src="/pages/inicio/separador.png" alt={t('productos.separadores').replace(/\n/g, ' ')} width={140} height={140} className="mt-2 transition-transform duration-300 group-hover:scale-110" />
          </div>
        </div>
      </section>
      <section className="relative bg-[#2451D7] py-40 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="w-full md:w-2/3 text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">{t('cta.titulo')}</h3>
            <h3 className="text-xl sm:text-3xl mb-8">{t('cta.descripcion')}</h3>
          </div>
          <div className="w-full md:w-1/3 flex md:justify-end justify-center">
            <button
              className="bg-[#F2F2F2] text-[#1F1B3B] font-medium px-8 py-4 rounded-lg text-xl shadow transition-colors duration-200 cursor-pointer"
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

