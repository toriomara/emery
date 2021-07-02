import {createSlice} from "@reduxjs/toolkit"

const initialState = {
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
    ],
    routes: [
        {
            index: true,
            label: 'Korund',
            path: '/',
        },
        {
            label: 'Production',
            path: '/production',
        },
        {
            label: 'Documentation',
            path: '/documentation',
        },
        {
            label: 'Distribution',
            path: '/distribution',
        },
        {
            label: 'News',
            path: '/news',
        },
        {
            label: 'Contacts',
            path: '/contacts',
        },
        {
            label: 'Classic',
            path: '/classic',
        },
        {
            label: 'Winter',
            path: '/winter',
        },
        {
            label: 'Anticorrosive',
            path: '/anticorrosive',
        },
        {
            label: 'Facade',
            path: '/front',
        },
        {
            label: 'Account',
            path: '/account',
        },
    ]
}

const routeSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {}
})

export const selectRoutes = state => state.route.routesNavi
export const selectAllRoutes = state => state.route.routes

export default routeSlice.reducer

