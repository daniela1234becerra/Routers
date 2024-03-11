import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './Layout.css'
import {Button} from '../../components/button/Button'

const Layout = () => {
    return (
        <div className="Layout">
            <header className="Layout-header">
                <h1>TODO LIST</h1>
            </header>
            <body className='Layout-container'>
                <div className='container'>
                    <Outlet />
                </div>
            </body>
            <Button />
        </div>
    )
}

export default Layout
