import React,{useRef, useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";

import {ReactComponent as Logo} from '../logo.svg';


const  Header = ()=>{
    const NavBarOnScrollColor = '#d6fcff';
    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 10
            if (navRef.current !== show) {
                setNavBackground(show)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])
        return (
            <nav className="py-0 sticky-top navbar navbar-expand-sm navbar-light navbar-scroll"
                 style={{backgroundColor: navBackground ?  NavBarOnScrollColor: 'transparent'}}>
                <div className="navbar-brand">
                    <Logo className={'logo d-inline-block align-top'}/>
                    <a className="navbar-brand mr-1 d-none d-md-inline-block" href="/">Depression</a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">

                    </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className={'navbar-nav ml-auto mr-auto'}>
                        <li className="nav-item mx-sm-1 mx-md-3 mx-lg-4">
                            <NavLink to={'/'}
                                     className={'nav-link'}
                            >Home
                            </NavLink>
                        </li>

                        <li className={'nav-item mx-sm-1 mx-md-3 mx-lg-4'}>
                            <NavLink to={'/advice'}
                                     className={'nav-link'}
                            >Advice
                            </NavLink>
                        </li>

                        <li className={'nav-item mx-sm-1 mx-md-3 mx-lg-4'}>
                            <NavLink to={'/faq'}
                                     className={'nav-link'}
                            >FAQ
                            </NavLink>

                        </li>
                        <li className="nav-item mx-sm-1 mx-md-3 mx-lg-4">
                            <NavLink to={'/about'}
                                     className={'nav-link'}
                            >About
                            </NavLink>
                        </li>

                        <li className="nav-item mx-sm-1 mx-md-3 mx-lg-4">
                            <NavLink to={'contact'}
                                     className={'nav-link'}
                            >Contact
                            </NavLink>

                            </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button className={'btn btn-transparent mx-md-2'}>log in</button>
                        <button className={"btn btn-success mx-1 text-white font-weight-bold getStarted"} onMouseDown={e => e.preventDefault()}>Get started</button>
                    </form>
                </div>
            </nav>
        );
}

export default Header;