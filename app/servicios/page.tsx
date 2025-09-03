"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
export default function ServiciosPage() {
    const router = useRouter();
    return (
        <>
            <main className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="mb-16 max-w-full text-2xl sm:text-3xl lg:text-4xl font-medium px-4 sm:px-6 lg:px-8">
                    Aprende más de nuestros servicios
                </h1>
                <div className="flex flex-col gap-20 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-base sm:text-xl lg:text-2xl text-left mb-4">Subtitulo 1</h2>
                            <p className="mb-2">Descriptivo</p>
                            <p className="mb-4">Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:</p>
                            <p className="mb-2">Permisos y autorizaciones</p>
                            <p className="mb-2">Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:</p>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-start">
                            <Image src="/pages/servicios/5-Servicios.webp" alt="Servicio 1" width={400} height={220} className="rounded-lg w-full max-w-md bg-gray-100 object-cover transition-transform duration-300 hover:-translate-y-2" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-1/2">
                                <h2 className="text-base sm:text-xl lg:text-2xl text-left mb-4">Subtitulo 2</h2>
                                <p className="mb-2">Medios digitales - Plataforma Recylink</p>
                                <p className="mb-4">Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:</p>
                                <p className="mb-2">Beneficios Ambientales</p>
                                <p className="mb-2">Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:</p>
                            </div>
                            <div className="w-full md:w-1/2 flex justify-end">
                                <Image src="/pages/servicios/5-Servicios2.webp" alt="Servicio 2" width={400} height={220} className="rounded-lg w-full max-w-md bg-gray-100 object-cover transition-transform duration-300 hover:-translate-y-2" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                            <div className="w-full md:w-1/2">
                                <h2 className="text-base sm:text-xl lg:text-2xl text-left mb-4">Subtitulo 3</h2>
                                <p className="mb-2">Descripción adicional</p>
                                <p className="mb-4">Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:</p>
                                <p className="mb-2">Más beneficios</p>
                                <p className="mb-2">Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:</p>
                            </div>
                            <div className="w-full md:w-1/2 flex justify-start mb-6 md:mb-0">
                                <Image src="/pages/servicios/5-Servicios.webp" alt="Servicio 3" width={400} height={220} className="rounded-lg w-full max-w-md bg-gray-100 object-cover transition-transform duration-300 hover:-translate-y-2" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-1/2">
                                <h2 className="text-base sm:text-xl lg:text-2xl text-left mb-4">Subtitulo 4</h2>
                                <p className="mb-2">Título adicional</p>
                                <p className="mb-4">Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:</p>
                                <p className="mb-2">Beneficio extra</p>
                                <p className="mb-2">Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:</p>
                            </div>
                            <div className="w-full md:w-1/2 flex justify-end mb-6 md:mb-0">
                                <Image src="/pages/servicios/5-Servicios2.webp" alt="Servicio 4" width={400} height={220} className="rounded-lg w-full max-w-md bg-gray-100 object-cover transition-transform duration-300 hover:-translate-y-2" />
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <section className="relative bg-[#2451D7] py-40 mt-20">
                <div className="max-w-3xl mx-auto text-center px-4">
                    <h3 className="text-[#F2F2F2] !important text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">¿Quieres ser parte del cambio?</h3>
                    <h3 className="text-[#F2F2F2] !important text-xl sm:text-3xl mb-8">Juntos dejaremos una huella positiva a las futuras generaciones.</h3>
                    <button
                        className="font-poppins inline-block font-light text-2xl underline underline-offset-4 px-8 py-4 rounded-lg transition-colors duration-200 hover:bg-[#F2F2F2]"
                        onClick={() => router.push('/contacto')}
                    >
                        Únete a nosotros &nbsp; &gt;
                    </button>
                </div>

            </section>

        </>

    );
}
