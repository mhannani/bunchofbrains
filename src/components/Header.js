import React from 'react'
// import {useRef, useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";

import {ReactComponent as Logo} from '../logo.svg';


const  Header = ()=>{

        return (
            <nav className="{ py-0 navbar navbar-expand-md navbar-light navbar-scroll">
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
                        <li className="nav-item mx-sm-1 mx-md-2 mx-lg-4">
                            <NavLink to={'/'}
                                     className={'nav-link'}
                            >Home
                            </NavLink>
                        </li>

                        <li className={'nav-item mx-sm-1 mx-md-2 mx-lg-4'}>
                            <NavLink to={'/advice'}
                                     className={'nav-link'}
                            >Advice
                            </NavLink>
                        </li>

                        <li className={'nav-item mx-sm-1 mx-md-2 mx-lg-4'}>
                            <NavLink to={'/faq'}
                                     className={'nav-link'}
                            >FAQ
                            </NavLink>

                        </li>
                        <li className="nav-item mx-sm-1 mx-md-2 mx-lg-4">
                            <NavLink to={'/about'}
                                     className={'nav-link'}
                            >About
                            </NavLink>
                        </li>

                        <li className="nav-item mx-sm-1 mx-md-2 mx-lg-4">
                            <NavLink to={'contact'}
                                     className={'nav-link'}
                            >Contact
                            </NavLink>

                            </li>
                    </ul>
                    <form className="align-bottom form-inline my-2 my-lg-0 w-">
                        <div className="theme-switch-wrapper mt-2">
                            <label className="theme-switch" htmlFor="checkbox">
                                <input type="checkbox" id="checkbox"
                                       />
                                <div className="slider round"/>
                            </label>
                        </div>
                        <div className={'row-cols-sm-1'}>
                            <button className={'align-top btn btn-transparent mx-md-2'}>log in</button>
                            <button className={"align-top btn btn-success mx-1 text-white font-weight-bold"}
                                    onMouseDown={e => e.preventDefault()}>Get started
                            </button>
                        </div>
                    </form>
                </div>
            </nav>
        );
}

export default Header;