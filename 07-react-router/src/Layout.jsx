import React from 'react'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Contact from './component/Contact/contact'

function Layout() {
    return (
        <>
        <Header/>
        <div className="blok w-4/5 m-auto text-center">
        <Outlet/>
        </div>
        <Footer/>
        </>
    )
}

export default Layout
