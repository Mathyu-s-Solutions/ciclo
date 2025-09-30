"use client"

import React from "react";
import { useTranslation } from "react-i18next";
import Hero from "../../components/Hero";
import { useRouter } from "next/navigation";
import Image from "next/image";
import '../../styles/spin-variable.css';
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation("inicio");

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [angle, setAngle] = React.useState(0);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [isTabletOrMobile, setIsTabletOrMobile] = React.useState(false);
  React.useEffect(() => {
    const checkSize = () => setIsTabletOrMobile(window.innerWidth < 769);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const [isTablet, setIsTablet] = React.useState(false);
  React.useEffect(() => {
    const checkTablet = () => setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    checkTablet();
    window.addEventListener('resize', checkTablet);
    return () => window.removeEventListener('resize', checkTablet);
  }, []);

  React.useEffect(() => {
    let frame: number;
    let lastTime = performance.now();
    const animate = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;
      setAngle(a => (a + delta * 0.06) % 360);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const cards = [
    {
      titulo: t('servicios.card1_titulo'),
      img: "/img/Group.svg",
      desc: t('servicios.card1_desc')
    },
    {
      titulo: t('servicios.card2_titulo'),
      img: "/img/Vector.svg",
      desc: t('servicios.card2_desc')
    }
  ];

  return (
    <>
      <Hero />
      <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] mt-20">
        <div className="absolute inset-0 w-full h-full">
          <video
            src="/videos/video_h264.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
            style={{ zIndex: 0 }}
          />
        </div>
      </section>
      <section className="w-full flex flex-col py-14">
        <div className="w-full max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-10 text-[#1F1B3B] text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            {t('circularidad_titulo')}
          </motion.h2>
          {isTabletOrMobile ? (
            <motion.div
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-10 text-[#1F1B3B] text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col items-center w-full">
                <p className="text-[#1F1B3B] text-base md:text-lg font-medium mb-8 max-w-[300px] text-center">
                  {t('circularidad_texto')}
                </p>
                <div className="flex flex-row gap-2 justify-center w-full">
                  <Link href="/servicios">
                    <Image
                      src={isDark ? "/pages/inicio/residuos-white.png" : "/pages/inicio/residuos.png"}
                      alt={t('circularidad_residuos_alt')}
                      width={200}
                      height={40}
                      style={{ cursor: "pointer" }}
                    />
                  </Link>
                  <Link href="/productos">
                    <Image
                      src={isDark ? "/pages/inicio/materiales-white.png" : "/pages/inicio/materiales.png"}
                      alt={t('circularidad_materiales_alt')}
                      width={200}
                      height={40}
                      style={{ cursor: "pointer" }}
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-10 text-[#1F1B3B] text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center w-full overflow-hidden">
                <div
                  className="relative flex justify-center items-center"
                  style={{
                    width: 400,
                    height: 800,
                    transform: "rotate(45deg)",
                    transformOrigin: "200px 400px",
                  }}
                >
                  <svg
                    width="400"
                    height="800"
                    viewBox="0 0 400 800"
                    className="block absolute top-0 left-0"
                    style={{ zIndex: 2 }}
                  >
                    <ellipse cx="200" cy="400" rx="180" ry="380" fill="none" stroke='var(--primary-border)' strokeWidth="3" />
                  </svg>
                  <div
                    style={{
                      position: 'absolute',
                      left: `${200 + 180 * Math.cos(angle * Math.PI / 180) - 10}px`,
                      top: `${400 + 380 * Math.sin(angle * Math.PI / 180) - 10}px`,
                      width: 20,
                      height: 20,
                      background: 'var(--primary-border, #2451D7)',
                      borderRadius: '50%',
                      zIndex: 10,
                    }}
                  />
                  <div
                    className="absolute"
                    style={{
                      top: '450px',
                      left: '-250px',
                      zIndex: 2,
                      transform: "rotate(-45deg)"
                    }}
                  >
                    <Link href="/servicios">
                      <Image
                        src={isDark ? "/pages/inicio/residuos-white.png" : "/pages/inicio/residuos.png"}
                        alt={t('circularidad_residuos_alt')}
                        width={230}
                        height={60}
                        style={{ cursor: "pointer" }}
                      />
                    </Link>
                  </div>
                  <div
                    className="absolute"
                    style={{
                      bottom: '450px',
                      right: '-250px',
                      zIndex: 2,
                      transform: "rotate(-45deg)"
                    }}
                  >
                    <Link href="/productos">
                      <Image
                        src={isDark ? "/pages/inicio/materiales-white.png" : "/pages/inicio/materiales.png"}
                        alt={t('circularidad_materiales_alt')}
                        width={230}
                        height={60}
                        style={{ cursor: "pointer" }}
                      />
                    </Link>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center" style={{ transform: "rotate(-45deg)" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
                      <p className="text-[#1F1B3B] text-left text-base md:text-lg font-medium max-w-[300px]">
                        {t('circularidad_texto')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
      <section className="w-full flex flex-col items-center py-0 sm:py-16 ">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 md:mb-20 text-[#1F1B3B]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          {t('servicios_titulo')}
        </motion.h2>
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center relative h-auto lg:h-[400px]">
          <motion.div
            className="relative w-full lg:w-1/2 h-[400px] flex items-center justify-center order-1 lg:order-none"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative w-[320px] h-[320px] flex items-center justify-center group transition-all duration-300 hover:scale-105">

              <button
                className="hidden md:block absolute left-[-56px] top-1/2 -translate-y-1/2 text-[#2451D7] text-4xl font-bold bg-transparent border-none p-0 m-0 cursor-pointer"
                onClick={() => setActiveIndex((activeIndex - 1 + cards.length) % cards.length)}
                aria-label="Anterior servicio"
                style={{ opacity: 0.9 }}
              >
                {"<"}
              </button>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div
                  className="bg-white rounded-lg shadow-lg p-8 flex flex-col w-[320px] max-w-md font-poppins transition-all duration-500"
                  aria-label={cards[activeIndex].titulo}
                >
                  <div className="mb-8">
                    <h4 style={{ color: '#2451D7' }} className="text-2xl text-left">{cards[activeIndex].titulo}</h4>
                  </div>
                  <div className="flex justify-center mb-4">
                    <Image src={cards[activeIndex].img} alt={cards[activeIndex].titulo} width={64} height={64} />
                  </div>
                  <div className="mt-6">
                    <p style={{ color: '#1F1B3B' }} className="text-left">{cards[activeIndex].desc}</p>
                  </div>
                </div>
              </div>
              <button
                className="hidden md:block absolute right-[-56px] top-1/2 -translate-y-1/2 text-[#2451D7] text-4xl font-bold bg-transparent border-none p-0 m-0 cursor-pointer"
                onClick={() => setActiveIndex((activeIndex + 1) % cards.length)}
                aria-label="Siguiente servicio"
                style={{ opacity: 0.9 }}
              >
                {">"}
              </button>
              <div className="flex md:hidden w-full justify-center gap-10 absolute left-0 -bottom-12">
                <button
                  className="text-[#2451D7] text-4xl font-bold bg-transparent border-none p-0 m-0 cursor-pointer"
                  onClick={() => setActiveIndex((activeIndex - 1 + cards.length) % cards.length)}
                  aria-label="Anterior servicio"
                  style={{ opacity: 0.9 }}
                >
                  {"<"}
                </button>
                <button
                  className="text-[#2451D7] text-4xl font-bold bg-transparent border-none p-0 m-0 cursor-pointer"
                  onClick={() => setActiveIndex((activeIndex + 1) % cards.length)}
                  aria-label="Siguiente servicio"
                  style={{ opacity: 0.9 }}
                >
                  {">"}
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative w-full lg:w-1/2 h-[300px] flex items-center justify-center order-2 lg:order-none mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {["/pages/inicio/servicio1-inicio.jpg", "/pages/inicio/servicio2-inicio.jpg"].map((img, idx) => (
              <Image
                key={img}
                src={img}
                alt={`Servicio ${idx + 1}`}
                width={500}
                height={500}
                className={`object-contain rounded-xl shadow-lg absolute left-1/2 -translate-x-1/2 transition-opacity duration-500 ${activeIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              />
            ))}
          </motion.div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center py-16">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-30 text-[#1F1B3B]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          {t('productos_titulo')}
        </motion.h2>
        {isTablet ? (
          <div className="grid grid-cols-2 grid-rows-2 gap-6 w-full max-w-4xl mb-10 justify-items-center">
            <div
              className="flex flex-col items-center justify-center border-2 rounded-full w-72 h-72 aspect-square transition-all duration-300 group"
              style={{ borderColor: 'var(--diametro-color)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary-border)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--diametro-color)'}
            >
              <h4 className="text-[#2451D7] text-lg font-semibold mb-2 text-center">
                {t('productos.agregados').split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < t('productos.agregados').split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h4>
              <Image
                src={isDark ? "/pages/inicio/agregado-white.png" : "/pages/inicio/agregado.png"}
                alt={t('productos.agregados').replace(/\n/g, ' ')}
                width={140}
                height={140}
                className="mt-2 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div
              className="flex flex-col items-center justify-center border-2 rounded-full w-72 h-72 -mx-3 aspect-square transition-all duration-300 group"
              style={{ borderColor: 'var(--diametro-color)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary-border)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--diametro-color)'}
            >
              <h4 className="text-[#2451D7] text-lg font-semibold mb-2 text-center">
                {t('productos.adoquines').split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < t('productos.adoquines').split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h4>
              <Image
                src={isDark ? "/pages/inicio/adoquin-white.png" : "/pages/inicio/adoquin.png"}
                alt={t('productos.adoquines').replace(/\n/g, ' ')}
                width={140}
                height={140}
                className="mt-2 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div
              className="flex flex-col items-center justify-center border-2 rounded-full w-72 h-72 -mx-3 aspect-square transition-all duration-300 group"
              style={{ borderColor: 'var(--diametro-color)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary-border)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--diametro-color)'}
            >
              <h4 className="text-[#2451D7] text-lg font-semibold mb-2 text-center">
                {t('productos.ladrillos').split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < t('productos.ladrillos').split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h4>
              <Image
                src={isDark ? "/pages/inicio/ladrillo-white.png" : "/pages/inicio/ladrillo.png"}
                alt={t('productos.ladrillos').replace(/\n/g, ' ')}
                width={140}
                height={140}
                className="mt-2 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div
              className="flex flex-col items-center justify-center border-2 rounded-full w-72 h-72 -mx-3 aspect-square transition-all duration-300 group"
              style={{ borderColor: 'var(--diametro-color)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary-border)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--diametro-color)'}
            >
              <h4 className="text-[#2451D7] text-lg font-semibold mb-2 text-center">
                {t('productos.separadores').split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < t('productos.separadores').split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h4>
              <Image
                src={isDark ? "/pages/inicio/separador-white.png" : "/pages/inicio/separador.png"}
                alt={t('productos.separadores').replace(/\n/g, ' ')}
                width={140}
                height={140}
                className="mt-2 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        ) : (

          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mb-10">
            <div
              className="flex flex-col items-center justify-center border-2 rounded-full w-65 h-65 aspect-square transition-all duration-300 group"
              style={{ borderColor: 'var(--diametro-color)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary-border)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--diametro-color)'}
            >
              <h4 className="text-[#2451D7] text-lg font-semibold mt-4 text-center">
                {t('productos.agregados').split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < t('productos.agregados').split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h4>
              <Image
                src={isDark ? "/pages/inicio/agregado-white.png" : "/pages/inicio/agregado.png"}
                alt={t('productos.agregados').replace(/\n/g, ' ')}
                width={140}
                height={140}
                className="mt-2 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div
              className="flex flex-col items-center justify-center border-2 rounded-full w-65 h-65 -mx-3 aspect-square transition-all duration-300 group"
              style={{ borderColor: 'var(--diametro-color)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary-border)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--diametro-color)'}
            >
              <h4 className="text-[#2451D7] text-lg font-semibold mt-4 text-center">
                {t('productos.adoquines').split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < t('productos.adoquines').split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h4>
              <Image
                src={isDark ? "/pages/inicio/adoquin-white.png" : "/pages/inicio/adoquin.png"}
                alt={t('productos.adoquines').replace(/\n/g, ' ')}
                width={140}
                height={140}
                className="mt-2 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div
              className="flex flex-col items-center justify-center border-2 rounded-full w-65 h-65 -mx-3 aspect-square transition-all duration-300 group"
              style={{ borderColor: 'var(--diametro-color)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary-border)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--diametro-color)'}
            >
              <h4 className="text-[#2451D7] text-lg font-semibold mt-4 text-center">
                {t('productos.ladrillos').split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < t('productos.ladrillos').split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h4>
              <Image
                src={isDark ? "/pages/inicio/ladrillo-white.png" : "/pages/inicio/ladrillo.png"}
                alt={t('productos.ladrillos').replace(/\n/g, ' ')}
                width={140}
                height={140}
                className="mt-2 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div
              className="flex flex-col items-center justify-center border-2 rounded-full w-65 h-65 -mx-3 aspect-square transition-all duration-300 group"
              style={{ borderColor: 'var(--diametro-color)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary-border)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--diametro-color)'}
            >
              <h4 className="text-[#2451D7] text-lg font-semibold mt-4 text-center">
                {t('productos.separadores').split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < t('productos.separadores').split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h4>
              <Image
                src={isDark ? "/pages/inicio/separador-white.png" : "/pages/inicio/separador.png"}
                alt={t('productos.separadores').replace(/\n/g, ' ')}
                width={140}
                height={140}
                className="mt-2 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>)}
      </section>
      <section className="relative bg-[#2451D7] py-16 md:py-40 mt-20">        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <motion.div
          className="w-full md:w-2/3 text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-3xl mb-8">{t('cta.descripcion')}</h3>
        </motion.div>
        <motion.div
          className="w-full md:w-1/3 flex md:justify-end justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <button
            className="bg-[#F2F2F2] text-[#1F1B3B] font-medium px-8 py-4 rounded-lg text-xl shadow transition-colors duration-200 cursor-pointer"
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