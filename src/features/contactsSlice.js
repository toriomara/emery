import {createSlice} from '@reduxjs/toolkit'
import {FaFacebook, FaTwitter, FaYoutube} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'

const initialState = {
    contacts: [
        {
            link: 'https://ya.ru',
            label: 'Facebook',
            icon: <FaFacebook/>
        },
        {
            link: 'https://yandex.ru',
            label: 'Instagram',
            icon: <AiFillInstagram/>
        },
        {
            link: 'https://mail.ru',
            label: 'Youtube',
            icon: <FaYoutube/>
        },
        {
            link: 'https://google.com',
            label: 'Twitter',
            icon: <FaTwitter/>
        },
    ]
}
    const contactSlice = createSlice({
        name: 'contact',
        initialState,
        reducers: {}
    })

    export const selectContact = state => state.contact.contacts

    export default contactSlice.reducer

