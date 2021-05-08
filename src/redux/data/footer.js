import {GoLocation} from "react-icons/go"
import {AiOutlineMail} from "react-icons/ai"
import {FiPhone} from "react-icons/fi"
import {IoIosPhonePortrait} from "react-icons/io"
import React from "react"

// Все данные футера

export const footerCo = [
    {
        index: true,
        label: 'Компания',
        path: '/',
    },
    {
        label: 'О нас',
        path: '/production',
    },
    {
        label: 'Для прессы',
        path: '/documentation',
    },
    {
        label: 'Новости',
        path: '/distribution',
    },
    {
        label: 'Дилерам',
        path: '/news',
    },
    {
        label: 'Дистрибьюция',
        path: '/contacts',
    }
]

export const footerInfo = [
    {
        index: true,
        label: 'Информация',
        path: '/',
    },
    {
        label: 'Документация',
        path: '/production',
    },
    {
        label: 'Поддержка',
        path: '/documentation',
    },
    {
        label: 'Условия',
        path: '/distribution',
    },
    {
        label: 'Технология',
        path: '/news',
    },
    {
        label: 'Доставка',
        path: '/contacts',
    }
]

export const footerContacts = [
    {
        index: true,
        label: 'Контакты',
        path: '',
        icon: ''
    },
    {
        label: '400019, Россия, г. Волгоград, ул. Слесарная, 103',
        path: '',
        icon: <GoLocation/>
    },
    {
        label: 'korund@korund.ru',
        path: '',
        icon: <AiOutlineMail/>
    },
    {
        label: '+7 988 988-51-11',
        path: '',
        icon: <IoIosPhonePortrait/>
    },
    {
        label: '+7 (8442) 46-95-86',
        path: '',
        icon: <FiPhone/>
    },
    {
        label: '+7 (8442) 50-40-76',
        path: '',
        icon: ''
    },
    {
        label: '+7 (8442) 41-23-45',
        path: '',
        icon: ''
    }
]
