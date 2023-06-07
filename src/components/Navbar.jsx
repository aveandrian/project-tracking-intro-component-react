import { useState } from 'react'
import '../styles/Navbar.css'

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false)

    function toggleIsOpen(){
        setIsOpen(prev => !prev)
    }

    return (
        <nav>
            <img className='logo' src='/images/logo.svg' alt='Logo'/>
            <img className='menu-btn' src={`/images/icon-${isOpen ? "close" : "hamburger"}.svg`} onClick={toggleIsOpen} alt='Menu Button'/>
            <div className={`nav-items ${isOpen ? "opened" : ""}`}>
                <a className='menu-item'>Product</a>
                <a className='menu-item'>Features</a>
                <a className='menu-item'>Pricing</a>
                <div className='menu-divider'></div>
                <a className='login-btn'>Login</a>
            </div>
        </nav>
    )
}