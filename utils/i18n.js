import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
function getCookie(name) {
    if (typeof document === 'undefined') return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

import esCommon from '../public/locales/es/common.json';
import enCommon from '../public/locales/en/common.json';
import esContacto from '../public/locales/es/contacto.json';
import enContacto from '../public/locales/en/contacto.json';
import esProductos from '../public/locales/es/productos.json';
import enProductos from '../public/locales/en/productos.json';
import esPlanta from '../public/locales/es/planta.json';
import enPlanta from '../public/locales/en/planta.json';
import esServicios from '../public/locales/es/servicios.json';
import enServicios from '../public/locales/en/servicios.json';
import esNosotros from '../public/locales/es/nosotros.json';
import enNosotros from '../public/locales/en/nosotros.json';


const cookieLang = getCookie('i18next') || 'es';

i18n
    .use(initReactI18next)
    .init({
        lng: cookieLang,
        fallbackLng: 'es',
        debug: false,
        resources: {
            es: {
                common: esCommon,
                contacto: esContacto,
                productos: esProductos,
                planta: esPlanta,
                servicios: esServicios,
                nosotros: esNosotros,
            },
            en: {
                common: enCommon,
                contacto: enContacto,
                productos: enProductos,
                planta: enPlanta,
                servicios: enServicios,
                nosotros: enNosotros,
            },
        },
        ns: ['common', 'contacto', 'productos', 'planta', 'servicios', 'nosotros'],
        defaultNS: 'common',
        interpolation: {
            escapeValue: false,
        },
    });
export default i18n;
