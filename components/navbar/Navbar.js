import React, { useState, useEffect } from 'react';

const navbar = () => {
    const [navCo, setNavCo] = useState();
    const [navBgColor, setnavBgColor] = useState(false)


    //navbar scroll changeBackground function
    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setnavBgColor(true)
        } else {
            setnavBgColor(false)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })

    const CpNav = () => {
        setNavCo(!navCo)
    }
    return (
        <>

            <nav className={navBgColor ? "navbar nav_bg" : 'navbar'}>
                <div className="logo">
                    <img src="/Zealtechbd-logo-2.png" alt="LOGO" />
                </div>
                <div className={navCo ? "push-left" : "push-left menu-active"}>
                    <button id="menu-toggler" className="hamburger" onClick={CpNav}>
                        <span className="hamburger-line hamburger-line-top"></span>
                        <span className="hamburger-line hamburger-line-middle"></span>
                        <span className="hamburger-line hamburger-line-bottom"></span>
                    </button>


                    <ul id="primary-menu" className="menu nav-menu">
                        <li className="menu-item current-menu-item"><a className="nav__link" href="#">Home</a></li>
                        <li className="menu-item "><a className="nav__link" href="#">About</a></li>
                        <li className="menu-item "><a className="nav__link" href="#">Services</a></li>
                        <li className="menu-item "><a className="nav__link" href="#">Portfolio</a></li>
                        <li className="menu-item "><a className="nav__link" href="#">Gallery</a></li>
                        <li className="menu-item "><a className="nav__link" href="#">career</a> </li>
                        <li className="menu-item "><a className="nav__link" href="#">Contact</a></li>
                    </ul>


                </div>
            </nav>
        </>
    )
}

export default navbar;