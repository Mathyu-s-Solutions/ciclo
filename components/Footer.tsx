
"use client";

import Image from "next/image";
const Footer = () => {
    return (
        <footer className="bg-[#1F1B3B] text-[#F2F2F2] pt-20 pb-30 px-6 md:px-12 lg:px-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-x-8 md:gap-x-10 lg:gap-x-16 gap-y-8 text-[#F2F2F2]">
                <div className="sm:col-span-2 md:col-span-2 lg:col-span-2 flex flex-col min-w-[180px] md:max-w-sm lg:max-w-md">
                    <div className="mb-1">
                        <Image src="/img/ciclo-white.png" alt="Ciclo Logo" width={140} height={45} />
                    </div>
                    <h3 className="font-poppins font-normal text-base md:text-sm lg:text-sm mb-8 text-[#F2F2F2] max-w-xs md:max-w-sm lg:max-w-md text-left break-words">A collection of components for your startup business or side project.</h3>
                    <div className="flex gap-4 text-2xl text-[#4F5BFF]">
                        <a href="#" aria-label="YouTube"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.108-2.115C19.073 3.5 12 3.5 12 3.5s-7.073 0-9.39.571A2.994 2.994 0 0 0 .502 6.186C0 8.504 0 12 0 12s0 3.496.502 5.814a2.994 2.994 0 0 0 2.108 2.115C4.927 20.5 12 20.5 12 20.5s7.073 0 9.39-.571a2.994 2.994 0 0 0 2.108-2.115C24 15.496 24 12 24 12s0-3.496-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></a>
                        <a href="#" aria-label="Facebook"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0" /></svg></a>
                        <a href="#" aria-label="Instagram"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.417 3.678 1.398c-.98.98-1.267 2.092-1.326 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.282.346 2.394 1.326 3.374.981.981 2.093 1.267 3.374 1.326C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.345 3.374-1.326.98-.98 1.267-2.092 1.326-3.374.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.282-.346-2.394-1.326-3.374-.981-.981-2.093-1.267-3.374-1.326C15.668.013 15.259 0 12 0z" /><circle cx="12" cy="12" r="3.5" /><circle cx="18.406" cy="5.594" r="1.44" /></svg></a>
                        <a href="#" aria-label="LinkedIn"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.002 3.6 4.604v5.592z" /></svg></a>
                    </div>
                </div>
                <div className="min-w-[120px]">
                    <h3 className="font-poppins font-medium text-lg md:text-xl lg:text-2xl mb-6">Servicios</h3>
                    <ul className="font-poppins font-normal text-sm md:text-sm lg:text-sm space-y-4 text-[#F2F2F2]">
                        <li className="text-base md:text-sm lg:text-sm">Gestión Integral</li>
                        <li className="text-base md:text-sm lg:text-sm">Reciclaje RCD</li>
                        <li className="text-base md:text-sm lg:text-sm">Proyectos de Valorización</li>
                    </ul>
                </div>
                <div className="min-w-[120px]">
                    <h3 className="font-poppins font-medium text-lg md:text-xl lg:text-2xl mb-6">Productos</h3>
                    <ul className="font-poppins font-normal text-sm md:text-sm lg:text-sm space-y-4 text-[#F2F2F2]">
                        <li className="text-base md:text-sm lg:text-sm">Ecoadoquines</li>
                        <li className="text-base md:text-sm lg:text-sm">Bloques</li>
                        <li className="text-base md:text-sm lg:text-sm">Agregador Reciclados</li>
                    </ul>
                </div>
                <div className="min-w-[150px]">
                    <h3 className="font-poppins font-medium text-lg md:text-xl lg:text-2xl mb-6">Contacto</h3>
                    <ul className="font-poppins font-normal text-sm md:text-sm lg:text-sm space-y-4 text-[#F2F2F2]">
                        <li className="text-base md:text-sm lg:text-sm">Av. Santa Rosa Parcela P-48,<br />Santa Rosa de Collanac,<br />Cieneguilla, Lima.</li>
                        <li className="text-base md:text-sm lg:text-sm">+51 901 211 995</li>
                        <li className="text-base md:text-sm lg:text-sm">ventas@ciclo.com.pe</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-[#C9A86A] my-6"></div>
            <div className="flex flex-col md:flex-row justify-between text-base md:text-sm lg:text-sm items-center text-[#F2F2F2]/80 w-full">
                <span className="w-full md:w-auto text-left truncate font-poppins font-medium text-base md:text-sm lg:text-sm">© 2025 Ciclo.com. Todos los derechos reservados.</span>
                <a href="#" className="font-poppins font-medium text-base md:text-sm lg:text-sm text-[#2451D7] hover:underline mt-2 md:mt-0">Términos y Condiciones</a>
            </div>
        </footer>
    );
};

export default Footer;
