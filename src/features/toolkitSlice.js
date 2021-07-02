import {createSlice} from '@reduxjs/toolkit'
//import {routesNavi} from "../data/routes";

export const routesNaviSlice = createSlice({
    name: 'routesNavi',
    initialState: {
        routesNavi: [
            {
                label: 'Главная',
                path: '/',
            },
            {
                label: 'Продукция',
                path: '/production',
            },
            {
                label: 'Документация',
                path: '/documentation',
            },
            {
                label: 'Дистрибьюция',
                path: '/distribution',
            },
            {
                label: 'Новости',
                path: '/news',
            },
            {
                label: 'Контакты',
                path: '/contacts',
            },
        ]
    },
    reducers: {

    },
})

export const {} = routesNaviSlice.actions

export const selectUser = (state) => state.user.user

export default routesNaviSlice.reducer
