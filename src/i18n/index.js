import { createI18n } from 'vue-i18n'
import en from './en.json';
import zhCn from './zhCn.json';

const messages = {
    zhCn,
    en,
};
const i18n = createI18n({
    globalInjection: true,
    locale: 'en',
    fallbackLocale: 'zhCn',
    legacy: false,
    messages,
});

export default i18n;
