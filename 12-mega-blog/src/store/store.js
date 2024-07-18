import {configureStore} from '@reduxjs/toolkit'
import authServices from '../appwrite/auth';
import authSlice from './authSlice';
const store = configureStore({
    reducer:{
        auth:authSlice
    }
});

export default store