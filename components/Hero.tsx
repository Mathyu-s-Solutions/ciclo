import Image from "next/image";

export default function Hero() {
  return (
    <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Subtitle */}
          <div className="text-blue-600 text-sm font-semibold tracking-wide uppercase">
            SOLUCIONES SOSTENIBLES PARA LA CONSTRUCCIÓN
          </div>

          {/* Main Title */}
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
            Reciclamos hoy, <br />
            construimos mañana
          </h1>

          {/* Description */}
          <p className="text-gray-700 text-lg max-w-md">
            Somos la alternativa sostenible para transformar los residuos de
            construcción en nuevos materiales, reduciendo la huella de carbono
            de tus proyectos.
          </p>

          {/* CTA Button */}
          <div>
            <button className="px-6 py-3 rounded-md text-white text-sm font-semibold shadow-[0_8px_20px_-5px_rgba(59,91,219,0.5)] transition-all bg-blue-600 hover:bg-blue-700">
              Descubre más
            </button>
          </div>
        </div>

        {/* Right Content - Worker Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[420px] h-[500px] overflow-hidden">
            <Image
              src="/img/worker.png"
              alt="Trabajador de construcción"
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
