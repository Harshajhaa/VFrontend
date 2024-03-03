import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import video from "./assets/vid.mp4"
import './App.css'

function Layout() {
    return (
        <>
            <div>
                <video width="100%" height="auto" autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <Header />
            
            <Outlet />

        </>
    )
}

export default Layout