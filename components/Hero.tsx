import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Cylinder, Plane } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion } from "framer-motion";

function createTextCanvas(text: string, color: string) {
  const fontSize = 200;
  const canvas = document.createElement("canvas");
  canvas.width = 3072;
  canvas.height = 320;
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
};
function TextRing({ text = "Transformar para inspirar", color = "#2451D7" }: TextRingProps) {
  const canvas = useMemo(() => createTextCanvas(text, color), [text, color]);
  const textureRef = useRef<THREE.CanvasTexture | null>(null);
  useFrame(({ clock }) => {
    if (textureRef.current && textureRef.current.offset) {
      textureRef.current.offset.x = clock.getElapsedTime() / 8;
    }
  });
  return (
    <Cylinder args={[5, 5, 1, 200, 1, true]} position={[0, -0.6, -0.2]}>
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
          onUpdate={s => (s.needsUpdate = true)}
        />
      </meshStandardMaterial>
    </Cylinder>
  );
}

type CenterImageProps = {
  src: string;
};
function CenterImage({ src }: CenterImageProps) {
  const texture = useLoader(THREE.TextureLoader, src) as THREE.Texture;
  return (
    <Plane args={[7.5, 10]} position={[0, -0.3, 0]} rotation={[0, 0, 0]}>
      <meshBasicMaterial attach="material" map={texture} transparent />
    </Plane>
  );
}



export default function Hero() {
  const { t } = useTranslation("inicio");
  return (
    <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-3">
      <div className="flex flex-col md:flex-row justify-between items-center min-h-[80vh] g-60">
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center items-start mb-10 md:mb-0"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {},
          }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2451D7] mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            {t('hero_titulo')}
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-[#1F1B3B] mb-8 max-w-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('hero_texto')}
          </motion.p>
          <motion.button
            className="bg-[#FFD34E] text-[#1F1B3B] font-medium px-8 py-4 rounded-lg text-xl shadow transition-colors duration-200 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onClick={() => window.location.href = '/contacto'}
          >
            {t('hero_boton')}
          </motion.button>
        </motion.div>

        <div className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] aspect-square relative">
          <Canvas
            style={{ width: '100%', height: '100%', background: 'transparent', borderRadius: '50%' }}
            camera={{ position: [0, 0, 12], fov: 50 }}
          >
            <ambientLight intensity={-0.82} />
            <TextRing text="Transformar para inspirar" color={getComputedStyle(document.documentElement).getPropertyValue('--text-ring').trim() || '#2451D7'} />
            <CenterImage src="/img/worker.webp" />
          </Canvas>
        </div>
      </div>
    </main>
  );
}
