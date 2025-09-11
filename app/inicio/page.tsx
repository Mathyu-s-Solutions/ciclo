"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Hero from "../../components/Hero";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation("inicio");

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [angle, setAngle] = React.useState(0);
  const [isDark, setIsDark] = useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setAngle((a) => (a + 1) % 360);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(document.documentElement.classList.contains("dark"));
      const observer = new MutationObserver(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
      });
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
      return () => observer.disconnect();
    }
  }, []);

  const cards = [
    {
      titulo: t("servicios.card1_titulo"),
      img: "/img/Group.svg",
      desc: t("servicios.card1_desc"),
    },
    {
      titulo: t("servicios.card2_titulo"),
      img: "/img/Vector.svg",
      desc: t("servicios.card2_desc"),
    },
  ];

  return (
    <>
      <Hero />
      <section className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] mt-12 sm:mt-16 lg:mt-20">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/pages/servicios/5-Servicios.webp"
            alt="Fondo sección"
            fill
            style={{ objectFit: "cover", zIndex: 0 }}
            priority
          />
        </div>
      </section>
      <section className="w-full flex flex-col py-8 sm:py-12 lg:py-16 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 sm:mb-12 lg:mb-16 text-[#1F1B3B] text-center sm:text-left">
            {t("circularidad_titulo")}
          </h2>
          <div className="flex justify-center w-full">
            <div
              className="relative w-full max-w-lg overflow-hidden flex justify-center items-center"
              style={{ minHeight: "500px" }}
            >
              <div
                className="relative flex justify-center items-center"
                style={{
                  width: "min(350px, 80vw)",
                  height: "min(700px, 160vw)",
                  transform: "rotate(45deg)",
                  transformOrigin: "center center",
                }}
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 350 700"
                  className="absolute top-0 left-0"
                  style={{ zIndex: 2 }}
                  preserveAspectRatio="xMidYMid meet"
                >
                  <ellipse
                    cx="175"
                    cy="350"
                    rx="140"
                    ry="320"
                    fill="none"
                    stroke="var(--primary-border)"
                    strokeWidth="3"
                  />
                </svg>
                {(() => {
                  const cx = 175,
                    cy = 350,
                    rx = 140,
                    ry = 320;
                  const rad = (angle * Math.PI) / 180;
                  const x = cx + rx * Math.cos(rad);
                  const y = cy + ry * Math.sin(rad);
                  return (
                    <div
                      style={{
                        position: "absolute",
                        left: `${x - 8}px`,
                        top: `${y - 8}px`,
                        width: 16,
                        height: 16,
                        background: "var(--primary-border)",
                        borderRadius: "50%",
                        zIndex: 10,
                        transition: "left 0.1s linear, top 0.1s linear",
                      }}
                    />
                  );
                })()}
                <div
                  className="absolute"
                  style={{
                    top: "56%",
                    left: "-50%",
                    zIndex: 2,
                    transform: "rotate(-45deg)",
                  }}
                >
                  <Image
                    src="/pages/inicio/residuos.png"
                    alt={t("circularidad_residuos_alt")}
                    width={140}
                    height={42}
                    className="w-[100px] sm:w-[120px] md:w-[140px] h-auto"
                  />
                </div>
                <div
                  className="absolute"
                  style={{
                    bottom: "56%",
                    right: "-50%",
                    zIndex: 2,
                    transform: "rotate(-45deg)",
                  }}
                >
                  <Image
                    src={
                      isDark
                        ? "/pages/inicio/materiales-white.png"
                        : "/pages/inicio/materiales.png"
                    }
                    alt={t("circularidad_materiales_alt")}
                    width={140}
                    height={42}
                    className="w-[100px] sm:w-[120px] md:w-[140px] h-auto"
                  />
                </div>
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transform: "rotate(-45deg)" }}
                >
                  <p className="text-[#1F1B3B] text-center text-sm sm:text-base md:text-lg font-medium max-w-[180px] sm:max-w-[220px] md:max-w-[260px] px-3 leading-tight">
                    {t("circularidad_texto")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center py-12 sm:py-16 lg:py-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-12 sm:mb-16 lg:mb-20 text-[#1F1B3B] text-center px-4">
          {t("servicios_titulo")}
        </h2>
        <div className="w-full max-w-6xl flex items-center justify-center relative min-h-[350px] sm:min-h-[400px] px-4">
          <div className="relative w-full min-h-[350px] sm:min-h-[400px] flex items-center justify-center">
            {cards.map((card, i) => {
              const pos = (i - activeIndex + cards.length) % cards.length;
              const zIndex = 10 - pos;
              const scale = 1 - pos * 0.05;
              const translateX = pos * 60;
              const opacity = pos === 0 ? 1 : 0.8 - pos * 0.2;
              return (
                <div
                  key={i}
                  className={`absolute left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg p-6 sm:p-8 flex flex-col min-h-[300px] sm:min-h-[350px] w-[90%] sm:w-4/5 md:w-3/5 max-w-2xl font-poppins transition-all duration-500 cursor-pointer ${
                    pos === 0 ? "" : "hover:scale-105"
                  }`}
                  style={{
                    zIndex,
                    transform: `scale(${scale}) translateX(${translateX}px)`,
                    opacity,
                  }}
                  aria-label={card.titulo}
                  onClick={() => pos !== 0 && setActiveIndex(i)}
                >
                  <h4
                    style={{ color: "#2451D7" }}
                    className="text-xl sm:text-2xl mb-3 sm:mb-4 text-center"
                  >
                    {card.titulo}
                  </h4>
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <Image
                      src={card.img}
                      alt={card.titulo}
                      width={56}
                      height={56}
                      className="sm:w-16 sm:h-16"
                    />
                  </div>
                  <p
                    style={{ color: "#1F1B3B" }}
                    className="text-center text-sm sm:text-base leading-relaxed"
                  >
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="relative w-full min-h-[350px] sm:min-h-[400px] flex items-center justify-center">
            {[
              "/pages/servicios/5-Servicios.webp",
              "/pages/servicios/5-Servicios2.webp",
            ].map((img, idx) => (
              <Image
                key={img}
                src={img}
                alt={`Servicio ${idx + 1}`}
                width={400}
                height={400}
                className={`object-contain rounded-xl shadow-lg absolute left-1/2 -translate-x-1/2 transition-opacity duration-500 w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] h-auto ${
                  activeIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center py-12 sm:py-16 lg:py-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-12 sm:mb-16 lg:mb-20 text-[#1F1B3B] text-center px-4">
          {t("productos_titulo")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-6xl px-4">
          <div
            className="flex flex-col items-center justify-center border-2 rounded-full w-60 h-60 sm:w-64 sm:h-64 lg:w-72 lg:h-72 mx-auto aspect-square transition-all duration-300 group"
            style={{ borderColor: "var(--diametro-color)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--primary-border)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--diametro-color)")
            }
          >
            <h4 className="text-[#2451D7] text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-center px-2">
              {t("productos.agregados")
                .split("\n")
                .map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < t("productos.agregados").split("\n").length - 1 && (
                      <br />
                    )}
                  </React.Fragment>
                ))}
            </h4>
            <Image
              src={
                isDark
                  ? "/pages/inicio/agregado-white.png"
                  : "/pages/inicio/agregado.png"
              }
              alt={t("productos.agregados").replace(/\n/g, " ")}
              width={120}
              height={120}
              className="transition-transform duration-300 group-hover:scale-110 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
            />
          </div>
          <div
            className="flex flex-col items-center justify-center border-2 rounded-full w-60 h-60 sm:w-64 sm:h-64 lg:w-72 lg:h-72 mx-auto aspect-square transition-all duration-300 group"
            style={{ borderColor: "var(--diametro-color)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--primary-border)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--diametro-color)")
            }
          >
            <h4 className="text-[#2451D7] text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-center px-2">
              {t("productos.adoquines")
                .split("\n")
                .map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < t("productos.adoquines").split("\n").length - 1 && (
                      <br />
                    )}
                  </React.Fragment>
                ))}
            </h4>
            <Image
              src={
                isDark
                  ? "/pages/inicio/adoquin-white.png"
                  : "/pages/inicio/adoquin.png"
              }
              alt={t("productos.adoquines").replace(/\n/g, " ")}
              width={120}
              height={120}
              className="transition-transform duration-300 group-hover:scale-110 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
            />
          </div>
          <div
            className="flex flex-col items-center justify-center border-2 rounded-full w-60 h-60 sm:w-64 sm:h-64 lg:w-72 lg:h-72 mx-auto aspect-square transition-all duration-300 group"
            style={{ borderColor: "var(--diametro-color)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--primary-border)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--diametro-color)")
            }
          >
            <h4 className="text-[#2451D7] text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-center px-2">
              {t("productos.ladrillos")
                .split("\n")
                .map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < t("productos.ladrillos").split("\n").length - 1 && (
                      <br />
                    )}
                  </React.Fragment>
                ))}
            </h4>
            <Image
              src={
                isDark
                  ? "/pages/inicio/ladrillo-white.png"
                  : "/pages/inicio/ladrillo.png"
              }
              alt={t("productos.ladrillos").replace(/\n/g, " ")}
              width={120}
              height={120}
              className="transition-transform duration-300 group-hover:scale-110 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
            />
          </div>
          <div
            className="flex flex-col items-center justify-center border-2 rounded-full w-60 h-60 sm:w-64 sm:h-64 lg:w-72 lg:h-72 mx-auto aspect-square transition-all duration-300 group"
            style={{ borderColor: "var(--diametro-color)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--primary-border)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--diametro-color)")
            }
          >
            <h4 className="text-[#2451D7] text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-center px-2">
              {t("productos.separadores")
                .split("\n")
                .map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx <
                      t("productos.separadores").split("\n").length - 1 && (
                      <br />
                    )}
                  </React.Fragment>
                ))}
            </h4>
            <Image
              src={
                isDark
                  ? "/pages/inicio/separador-white.png"
                  : "/pages/inicio/separador.png"
              }
              alt={t("productos.separadores").replace(/\n/g, " ")}
              width={120}
              height={120}
              className="transition-transform duration-300 group-hover:scale-110 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
            />
          </div>
        </div>
      </section>
      <section className="relative bg-[#2451D7] py-16 sm:py-24 lg:py-32 mt-12 sm:mt-16 lg:mt-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 gap-8">
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-6 sm:mb-8 text-white leading-relaxed">
              {t("cta.descripcion")}
            </h3>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <button
              className="bg-[#F2F2F2] text-[#1F1B3B] font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer hover:bg-white transform hover:scale-105 w-full sm:w-auto"
              onClick={() => router.push("/contacto")}
            >
              {t("cta.boton")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
