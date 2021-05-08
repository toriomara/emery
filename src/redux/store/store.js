import {combineReducers, configureStore} from '@reduxjs/toolkit'
import userReducer from '../../features/userSlice'

const reducers = combineReducers({

})

export default configureStore({
    reducer: {
        user: userReducer,
    }
})
