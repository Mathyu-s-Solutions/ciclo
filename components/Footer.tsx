
"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation("common");
    return (
        <footer className="bg-[#1F1B3B] text-[#F2F2F2] pt-20 pb-30 px-6 md:px-12 lg:px-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-x-8 md:gap-x-10 lg:gap-x-16 gap-y-8 text-[#F2F2F2]">
                <div className="sm:col-span-2 md:col-span-2 lg:col-span-2 flex flex-col min-w-[180px] md:max-w-sm lg:max-w-md">
                    <div className="mb-1">
                        <Image src="/img/ciclo-white.png" alt="Ciclo Logo" width={140} height={45} />
                    </div>
                    <h3 className="font-bricolage font-normal text-base md:text-sm lg:text-sm mb-8 text-[#F2F2F2] max-w-xs md:max-w-sm lg:max-w-md text-left break-words">{t('footer.descripcion')}</h3>
                    <div className="flex gap-4 text-2xl text-[#4F5BFF]">
                        <a href="#" aria-label="YouTube">
                            <Image
                                src="/img/youtube.png"
                                alt="YouTube"
                                width={48}
                                height={48}
                            />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <Image
                                src="/img/facebook.png"
                                alt="Facebook"
                                width={48}
                                height={48}
                            />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <Image
                                src="/img/instagram.png"
                                alt="Instagram"
                                width={48}
                                height={48}
                            />
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <Image
                                src="/img/linkedin.png"
                                alt="LinkedIn"
                                width={48}
                                height={48}
                            />
                        </a>
                    </div>
                </div>
                <div className="min-w-[120px]">
                    <h3 className="font-bricolage font-medium text-lg md:text-xl lg:text-2xl mb-6">{t('footer.servicios')}</h3>
                    <ul className="font-bricolage font-normal text-sm md:text-sm lg:text-sm space-y-4 text-[#F2F2F2]">
                        <li className="text-base md:text-sm lg:text-sm">{t('footer.servicios_gestion')}</li>
                        <li className="text-base md:text-sm lg:text-sm">{t('footer.servicios_reciclaje')}</li>
                        <li className="text-base md:text-sm lg:text-sm">{t('footer.servicios_valorizacion')}</li>
                    </ul>
                </div>
                <div className="min-w-[120px]">
                    <h3 className="font-bricolage font-medium text-lg md:text-xl lg:text-2xl mb-6">{t('footer.productos')}</h3>
                    <ul className="font-bricolage font-normal text-sm md:text-sm lg:text-sm space-y-4 text-[#F2F2F2]">
                        <li className="text-base md:text-sm lg:text-sm">{t('footer.productos_ecoadoquines')}</li>
                        <li className="text-base md:text-sm lg:text-sm">{t('footer.productos_bloques')}</li>
                        <li className="text-base md:text-sm lg:text-sm">{t('footer.productos_agregados')}</li>
                    </ul>
                </div>
                <div className="min-w-[150px]">
                    <h3 className="font-bricolage font-medium text-lg md:text-xl lg:text-2xl mb-6">{t('footer.contacto')}</h3>
                    <ul className="font-bricolage font-normal text-sm md:text-sm lg:text-sm space-y-4 text-[#F2F2F2]">
                        <li className="text-base md:text-sm lg:text-sm">
                            {t('footer.direccion').split('\n').map((line, i, arr) => (
                                <React.Fragment key={i}>
                                    {line}
                                    {i < arr.length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </li>
                        <li className="text-base md:text-sm lg:text-sm">{t('footer.telefono')}</li>
                        <li className="text-base md:text-sm lg:text-sm">{t('footer.email')}</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-[#C9A86A] my-6"></div>
            <div className="flex flex-col md:flex-row justify-between text-base md:text-sm lg:text-sm items-center text-[#F2F2F2]/80 w-full">
                <span className="w-full md:w-auto text-left truncate font-bricolage font-medium text-base md:text-sm lg:text-sm">{t('footer.copyright')}</span>
                <a href="#" className="font-bricolage font-medium text-base md:text-sm lg:text-sm text-[#2451D7] hover:underline mt-2 md:mt-0">{t('footer.terminos')}</a>
            </div>
        </footer>
    );
};

export default Footer;
