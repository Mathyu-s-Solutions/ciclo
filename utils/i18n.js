import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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

i18n
    .use(initReactI18next)
    .init({
        lng: 'es',
        fallbackLng: 'es',
        debug: false,
        resources: {
            es: {
                common: esCommon,
                contacto: esContacto,
                productos: esProductos,
                planta: esPlanta,
                servicios: esServicios,
            },
            en: {
                common: enCommon,
                contacto: enContacto,
                productos: enProductos,
                planta: enPlanta,
                servicios: enServicios,
            },
        },
        ns: ['common', 'contacto', 'productos', 'planta', 'servicios'],
        defaultNS: 'common',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
