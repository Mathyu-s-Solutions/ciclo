import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Cylinder, Plane } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import { useTranslation } from "react-i18next";
import Image from "next/image";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1024,
    height: typeof window !== "undefined" ? window.innerHeight : 768,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function createTextCanvas(
  text: string,
  color: string,
  windowWidth: number = 1024
) {
  const canvas = document.createElement("canvas");
  const scale = windowWidth < 768 ? 0.7 : 1;
  const fontSize = 200 * scale;

  canvas.width = 3072 * scale;
  canvas.height = 320 * scale;

  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `bold ${fontSize}px 'Bricolage Grotesque', 'Poppins', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = color;
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  }
  return canvas;
}

type TextRingProps = {
  text?: string;
  color?: string;
  windowWidth?: number;
};
function TextRing({
  text = "Transformar para inspirar",
  color = "#2451D7",
  windowWidth = 1024,
}: TextRingProps) {
  const canvas = useMemo(
    () => createTextCanvas(text, color, windowWidth),
    [text, color, windowWidth]
  );
  const textureRef = useRef<THREE.CanvasTexture | null>(null);
  useFrame(({ clock }) => {
    if (textureRef.current && textureRef.current.offset) {
      textureRef.current.offset.x = clock.getElapsedTime() / 8;
    }
  });
  return (
    <Cylinder args={[8, 8, 1.6, 200, 1, true]} position={[0, -1.2, -0.5]}>
      <meshStandardMaterial
        transparent
        attach="material"
        side={THREE.DoubleSide}
        alphaTest={0.1}
      >
        <canvasTexture
          attach="map"
          image={canvas}
          premultiplyAlpha
          ref={textureRef}
          wrapS={THREE.RepeatWrapping}
          wrapT={THREE.RepeatWrapping}
          repeat={[3, 1]}
          onUpdate={(s) => (s.needsUpdate = true)}
        />
      </meshStandardMaterial>
    </Cylinder>
  );
}

type CenterImageProps = {
  src: string;
  windowWidth?: number;
};
function CenterImage({ src, windowWidth = 1024 }: CenterImageProps) {
  const texture = useLoader(THREE.TextureLoader, src) as THREE.Texture;

  const getImageScale = () => {
    const width = windowWidth;
    // Tamaños aumentados para mejor visibilidad
    if (width < 640) return { width: 8, height: 10.5 }; // mobile - mucho más grande
    if (width < 768) return { width: 9.5, height: 12.5 }; // sm - mucho más grande
    if (width < 1024) return { width: 11.5, height: 15 }; // md - mucho más grande
    if (width < 1280) return { width: 13.5, height: 17.5 }; // lg - mucho más grande
    return { width: 16, height: 21 }; // xl+ - considerablemente más grande
  };

  const imageScale = getImageScale();

  return (
    <Plane
      args={[imageScale.width, imageScale.height]}
      position={[0, -0.5, 0]}
      rotation={[0, 0, 0]}
    >
      <meshBasicMaterial attach="material" map={texture} transparent />
    </Plane>
  );
}

export default function Hero() {
  const { t } = useTranslation("inicio");
  const windowSize = useWindowSize();

  const getCanvasSize = () => {
    const width = windowSize.width;
    if (width < 640)
      return {
        width: Math.min(480, width - 20),
        height: Math.min(480, width - 20),
      }; // mobile
    if (width < 768) return { width: 600, height: 600 }; // sm
    if (width < 1024) return { width: 700, height: 700 }; // md
    if (width < 1280) return { width: 800, height: 800 }; // lg
    return { width: 950, height: 950 }; // xl+
  };

  const canvasSize = getCanvasSize();

  return (
    <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      <div className="flex flex-col lg:flex-row justify-between items-center min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] gap-8 lg:gap-12">
        {/* Lado izquierdo: contenido original */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-center sm:text-left order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#2451D7] mb-4 sm:mb-6 leading-tight">
            {t("hero_titulo")}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#1F1B3B] mb-6 sm:mb-8 max-w-lg mx-auto sm:mx-0 leading-relaxed">
            {t("hero_texto")}
          </p>
          <button
            className="bg-[#FFD34E] text-[#1F1B3B] font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer hover:bg-[#FFE066] transform hover:scale-105 w-full sm:w-auto"
            onClick={() => (window.location.href = "/contacto")}
          >
            {t("hero_boton")}
          </button>
        </div>

        {/* Lado derecho: efecto 3D */}
        <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
          <div
            className="relative"
            style={{
              width: canvasSize.width,
              height: canvasSize.height,
              maxWidth: "100%",
              aspectRatio: "1",
            }}
          >
            <Canvas
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                borderRadius: "50%",
              }}
              camera={{ position: [0, 0, 22], fov: 65 }}
              dpr={Math.min(
                typeof window !== "undefined" ? window.devicePixelRatio : 1,
                2
              )}
            >
              <ambientLight intensity={-0.82} />
              <TextRing
                text="Transformar para inspirar"
                windowWidth={windowSize.width}
                color={
                  typeof window !== "undefined"
                    ? getComputedStyle(document.documentElement)
                        .getPropertyValue("--orb-color")
                        .trim() || "#2451D7"
                    : "#2451D7"
                }
              />
              <CenterImage
                src="/img/worker.png"
                windowWidth={windowSize.width}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </main>
  );
}
