import React from 'react'
import {useDispatch} from 'react-redux'
import authServices from '../../appwrite/auth'
import { logOut } from '../../store/authSlice.js'



function LogoutBtn() {
    const dispatch = useDispatch()
    const logOutHandler = () => { 
        authServices.logOut().then(() => {
            dispatch(logOut())
         })
     }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn