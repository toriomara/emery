import i18n from 'i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import 'flag-icon-css/css/flag-icon.min.css'

export const languages = [
	{
		code: 'ru',
		name: 'Русский',
		countryCode: 'ru'
	},
	{
		code: 'fr',
		name: 'Français',
		countryCode: 'fr'
	},
	{
		code: 'en',
		name: 'English',
		countryCode: 'gb'
	},
	{
		code: 'ar',
		name: 'عربي',
		countryCode: 'sa',
		dir: 'rtl',
	},
	{
		code: 'de',
		name: 'Deutsche',
		countryCode: 'de'
	},
	{
		code: 'zh',
		name: '中國人',
		countryCode: 'cn'
	}
]

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(HttpApi)
	.init({
		supportedLngs: ['ru', 'en', 'fr', 'ar', 'de', 'zh'],
		fallbackLng: 'ru',
		debug: 'true',
		detection: {
			order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
			caches: ['cookie']
		},
		backend: {
			loadPath: 'assets/locales/{{lng}}/translation.json'
		},
	})

export default i18n
