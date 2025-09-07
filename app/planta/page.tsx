
"use client";

import { useTranslation } from "react-i18next";

export default function PlantaPage() {
    const { t } = useTranslation("planta");
    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="my-8 max-w-2xl text-2xl sm:text-3xl lg:text-4xl font-medium px-4 sm:px-6 lg:px-8">
                {t('titulo')}
            </h1>
            <p className="mb-10 text-base sm:text-xl lg:text-2xl px-4 sm:px-6 lg:px-8">
                {t('descripcion')}
            </p>
            <div className="rounded-lg flex items-center justify-center aspect-video mb-10 px-4 sm:px-6 lg:px-8">
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg w-full h-full"
                ></iframe>
            </div>
        </main>
    );
}
