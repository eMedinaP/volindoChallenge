import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

if(localStorage.getItem('lang') === null){
  localStorage.setItem('lang', 'en');
}
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'es'],
    fallbackLng: localStorage.getItem('lang'),
    order: ['cookie', 'path','localStorage', 'htmlTag', 'querystring',  'sessionStorage', 'navigator', 'htmlTag', 'subdomain'],
    caches: ['cookie'],
    backend: {
      loadPath: '/assets/locales/{{lng}}/translations.json',
    },
  });
  

export default i18n;
