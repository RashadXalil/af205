import React from 'react'
import Header from '../../layout/site/Header/Header'
import Footer from '../../layout/site/Footer/Footer'
import { Outlet } from "react-router"

const SiteRoot = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default SiteRoot