"use client"

import { useState } from "react";
import Image from "next/image";

export default function ContactoPage() {
    // Validación de formulario
    const [form, setForm] = useState({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
    });
    const [errors, setErrors] = useState({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
    });

    function validate() {
        const newErrors: any = {};
        if (!form.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio.';
        if (!form.email.trim()) newErrors.email = 'El email es obligatorio.';
        else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Email inválido.';
        if (!form.asunto.trim()) newErrors.asunto = 'El asunto es obligatorio.';
        if (!form.mensaje.trim()) newErrors.mensaje = 'El mensaje es obligatorio.';
        else if (form.mensaje.length < 10) newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (validate()) {
            alert('Formulario enviado correctamente');
            setForm({ nombre: '', email: '', asunto: '', mensaje: '' });
        }
    }

    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex flex-col w-full md:w-2/3">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h1 className="my-8 max-w-2xl text-2xl sm:text-3xl lg:text-4xl font-medium">
                            Ponte en Contacto
                        </h1>
                        <h2 className="mb-2 text-xl sm:text-2xl font-medium">
                            Nos gustaría saber de ti !
                        </h2>
                        <p className="mb-10 text-base sm:text-xl lg:text-2xl">
                            Si tiene alguna consulta o simplemente quiere saludarnos, utilice el formulario de contacto.
                        </p>
                        <div className="bg-white rounded-lg p-8 w-full max-w-md shadow flex flex-col gap-4 mb-20 md:mb-30">
                            <div className="font-poppins flex flex-col gap-4">
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <label className="font-medium text-[#1F1B3B]" htmlFor="nombre">Nombre</label>
                                    <input
                                        name="nombre"
                                        id="nombre"
                                        className={`border border-[#B3B3B3] rounded-[8px] px-4 py-2 ${errors.nombre ? 'border-red-500' : ''}`}
                                        placeholder="Escriba aquí ..."
                                        value={form.nombre}
                                        onChange={handleChange}
                                    />
                                    {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre}</span>}

                                    <label className="font-medium text-[#1F1B3B]" htmlFor="email">Email</label>
                                    <input
                                        name="email"
                                        id="email"
                                        className={`border border-[#B3B3B3] rounded-[8px] px-4 py-2 ${errors.email ? 'border-red-500' : ''}`}
                                        placeholder="Escriba aquí ..."
                                        value={form.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

                                    <label className="font-medium text-[#1F1B3B]" htmlFor="asunto">Asunto</label>
                                    <input
                                        name="asunto"
                                        id="asunto"
                                        className={`border border-[#B3B3B3] rounded-[8px] px-4 py-2 ${errors.asunto ? 'border-red-500' : ''}`}
                                        placeholder="Escriba aquí ..."
                                        value={form.asunto}
                                        onChange={handleChange}
                                    />
                                    {errors.asunto && <span className="text-red-500 text-sm">{errors.asunto}</span>}

                                    <label className="font-medium text-[#1F1B3B]" htmlFor="mensaje">Mensaje</label>
                                    <textarea
                                        name="mensaje"
                                        id="mensaje"
                                        className={`border border-[#B3B3B3] rounded-[8px] px-4 py-2 ${errors.mensaje ? 'border-red-500' : ''}`}
                                        rows={3}
                                        placeholder="Escriba aquí ..."
                                        value={form.mensaje}
                                        onChange={handleChange}
                                    />
                                    {errors.mensaje && <span className="text-red-500 text-sm">{errors.mensaje}</span>}

                                    <button type="submit" className="bg-[#1F1B3B] text-[#FFD34E] font-medium px-6 py-2 rounded-lg mt-4 hover:bg-[#FFD34E] hover:text-[#1F1B3B] transition-colors duration-200 cursor-pointer">
                                        Enviar
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="relative flex justify-center items-center w-full md:w-1/3 max-w-xs self-center md:self-start mt-0 md:mt-60">
                    <div
                        className="absolute -top-10 left-7/8 md:left-3/4 -translate-x-1/2 flex items-center justify-center w-36 h-20"
                        style={{
                            left: '80%', maxWidth: '9rem', minWidth: '9rem',
                            ...(typeof window !== 'undefined' && window.innerWidth <= 375 ? { left: '70%' } : {}),
                            ...(typeof window !== 'undefined' && window.innerWidth <= 320 ? { left: '60%' } : {})
                        }}
                    >
                        <Image src="/pages/contacto/chat.png" alt="Chat" width={200} height={80} className="absolute" />
                        <span className="absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center text-[#FFD44D] font-medium text-lg">Novedades...</span>
                    </div>
                    <Image
                        src="/pages/contacto/iphone.png"
                        width={256}
                        alt="iPhone"
                        height={384}
                    />
                </div>
            </div>
        </main>
    );
}
