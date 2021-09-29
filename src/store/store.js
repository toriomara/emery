import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import toolkitSlice from '../features/toolkitSlice'
import catsReducer from '../features/catsReducer'
import routeSlice from '../features/routeSlice'
import productSlice from '../features/productSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        toolkit: toolkitSlice,
        cats: catsReducer,
        route: routeSlice,
        product: productSlice,
    }
})