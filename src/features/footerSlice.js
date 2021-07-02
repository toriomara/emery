import {createSlice} from '@reduxjs/toolkit'
import {AiOutlineMail} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {IoIosPhonePortrait} from 'react-icons/io'
import {FiPhone} from 'react-icons/fi'
import React from 'react'

const initialState = {
    logo: [

    ],
    company: [
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
    ],
    info: [
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
    ],
    contacts: [
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
}
    const footerSlice = createSlice({
        name: 'footer',
        initialState,
        reducers: {}
    })

    export const selectCompany = state => state.footer.company
    export const selectInfo = state => state.footer.info
    export const selectContacts = state => state.footer.contacts

    export default footerSlice.reducer

