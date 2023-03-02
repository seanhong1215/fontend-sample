// import VueI18n  from 'vue-i18n';
import { createI18n } from 'vue-i18n'
import en from './en.json';
import zhCn from './zhCn.json';


const messages = {
    zh_CN: zhCn,
    en: en,
};
const i18n = createI18n({
    // locale: store.state.lang, // set locale
    locale: en, // set locale
    fallbackLocale: 'en', // set fallback locale
    messages,
});

export default i18n;
