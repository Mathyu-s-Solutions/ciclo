"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function PlantaPage() {
    const { t } = useTranslation("planta");
    return (
        <main className="max-w-6xl mx-auto px-4 py-20">
            <motion.p
                className="mb-10 text-base sm:text-xl lg:text-2xl px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {t('descripcion')}
            </motion.p>
            <motion.div
                className="rounded-lg flex items-center justify-center aspect-video mb-10 px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <iframe
                    src="https://www.youtube.com/embed/apUMqChiLgk"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg w-full h-full"
                ></iframe>
            </motion.div>
        </main>
    );
}