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
    ]
}

const routeSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {}
})

export const selectRoutes = state => state.route.routes

export default routeSlice.reducer

