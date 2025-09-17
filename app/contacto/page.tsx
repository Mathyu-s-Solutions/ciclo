"use client"

import { useState } from "react";
import emailjs from 'emailjs-com';
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ContactoPage() {
    const { t } = useTranslation("contacto");
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
    const [status, setStatus] = useState('');

    function validate() {
        const newErrors: any = {};
        if (!form.nombre.trim()) newErrors.nombre = t('validacion.nombre');
        if (!form.email.trim()) newErrors.email = t('validacion.email');
        else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = t('validacion.email_invalido');
        if (!form.asunto.trim()) newErrors.asunto = t('validacion.asunto');
        if (!form.mensaje.trim()) newErrors.mensaje = t('validacion.mensaje');
        else if (form.mensaje.length < 10) newErrors.mensaje = t('validacion.mensaje_min');
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
            setStatus('Enviando...');
            emailjs.send(
                'service_p6q4vdu',
                'template_ezuhvpu',
                {
                    from_name: form.nombre,
                    from_email: form.email,
                    subject: form.asunto,
                    message: form.mensaje,
                },
                'qwRtMAUUeU0B_yrRf'
            )
                .then(() => {
                    setStatus(t('exito'));
                    setForm({ nombre: '', email: '', asunto: '', mensaje: '' });
                })
                .catch(() => {
                    setStatus(t('error'));
                });
        }
    }

    return (
        <main className="max-w-6xl mx-auto px-4 py-12 font-bricolage">
            <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex flex-col w-full md:w-2/3">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h1 className="my-8 max-w-2xl text-2xl sm:text-3xl lg:text-4xl font-medium">
                            {t('titulo')}
                        </h1>
                        <p className="mb-10 text-base sm:text-xl lg:text-2xl">
                            {t('descripcion')}
                        </p>
                        <div className="bg-white rounded-lg p-8 w-full max-w-md shadow flex flex-col gap-4 mb-20 md:mb-30">
                            <div className="flex flex-col gap-4">
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <label className="font-medium text-[#1F1B3B]" htmlFor="nombre">{t('nombre')}</label>
                                    <input
                                        name="nombre"
                                        id="nombre"
                                        className={`border border-[#B3B3B3] rounded-[8px] px-4 py-2 ${errors.nombre ? 'border-red-500' : ''}`}
                                        placeholder={t('placeholder')}
                                        value={form.nombre}
                                        onChange={handleChange}
                                    />
                                    {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre}</span>}

                                    <label className="font-medium text-[#1F1B3B]" htmlFor="email">{t('email')}</label>
                                    <input
                                        name="email"
                                        id="email"
                                        className={`border border-[#B3B3B3] rounded-[8px] px-4 py-2 ${errors.email ? 'border-red-500' : ''}`}
                                        placeholder={t('placeholder')}
                                        value={form.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

                                    <label className="font-medium text-[#1F1B3B]" htmlFor="asunto">{t('asunto')}</label>
                                    <input
                                        name="asunto"
                                        id="asunto"
                                        className={`border border-[#B3B3B3] rounded-[8px] px-4 py-2 ${errors.asunto ? 'border-red-500' : ''}`}
                                        placeholder={t('placeholder')}
                                        value={form.asunto}
                                        onChange={handleChange}
                                    />
                                    {errors.asunto && <span className="text-red-500 text-sm">{errors.asunto}</span>}

                                    <label className="font-medium text-[#1F1B3B]" htmlFor="mensaje">{t('mensaje')}</label>
                                    <textarea
                                        name="mensaje"
                                        id="mensaje"
                                        className={`border border-[#B3B3B3] rounded-[8px] px-4 py-2 ${errors.mensaje ? 'border-red-500' : ''}`}
                                        rows={3}
                                        placeholder={t('placeholder')}
                                        value={form.mensaje}
                                        onChange={handleChange}
                                    />
                                    {errors.mensaje && <span className="text-red-500 text-sm">{errors.mensaje}</span>}

                                    <button type="submit" className="bg-[#FFD34E] text-[#1F1B3B] font-medium px-6 py-2 rounded-lg mt-4 hover:bg-[#1F1B3B] hover:text-[#FFD34E] transition-colors duration-200 cursor-pointer">
                                        {t('enviar')}
                                    </button>
                                    {status && <span className="text-sm mt-2">{status}</span>}
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
                        <span className="absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center text-[#FFD44D] font-medium text-lg">{t('novedades')}</span>
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
