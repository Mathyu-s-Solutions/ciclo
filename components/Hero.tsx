import Image from "next/image";

export default function Hero() {
  const { t } = require('react-i18next').useTranslation('inicio');
  return (
    <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[80vh]">
        <div className="space-y-6">
          <h5 className="text-7xl font-extrabold text-gray-900 leading-tight mb-8">
            {t('hero_titulo')}
          </h5>

          <p className="text-gray-700 text-lg max-w-lg mb-8">
            {t('hero_texto')}
          </p>

          <div>
            <button className="bg-[#2451D7] text-[#F2F2F2] font-medium px-8 py-4 rounded-lg text-xl shadow transition-colors duration-200 cursor-pointer"
            >
              {t('hero_boton')}
            </button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative  w-[420px] h-[500px] overflow-hidden">
            <Image
              src="/img/worker.png"
              alt={t('hero_img_alt')}
              width={420}
              height={500}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
