import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import esCommon from '../public/locales/es/common.json';
import enCommon from '../public/locales/en/common.json';
import esContacto from '../public/locales/es/contacto.json';
import enContacto from '../public/locales/en/contacto.json';

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
            },
            en: {
                common: enCommon,
                contacto: enContacto,
            },
        },
        ns: ['common', 'contacto'],
        defaultNS: 'common',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
