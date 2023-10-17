import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

const NavLayout = () => {

    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default NavLayout