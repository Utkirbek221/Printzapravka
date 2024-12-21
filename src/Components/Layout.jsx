import React from 'react'
import Header from '../Pages/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer'

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    )
}
