import React from 'react'
// import {useRef, useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";

import {ReactComponent as Logo} from '../logo.svg';


const  Header = ()=>{

        return (
            <nav className="{py-0 mt-15 navbar navbar-expand-md navbar-light navbar-scroll fixed-top bg-light">
                <div className="navbar-brand">
                    <Logo className={'logo d-inline-block align-top'}/>
                    <a className="navbar-brand mr-1 d-none d-md-inline-block" href="/">Depression</a>
                </div>
                <div className={'row d-flex'}>
                    <div className="theme-switch-wrapper mt-3 mx-3">
                        <label className="theme-switch" htmlFor="checkbox">
                            <input type="checkbox" id="checkbox"
                            />
                            <div className="slider round d-flex justify-content-center align-items-center">
                                <div className={'logoNightMode'}>
                                    <span>
                                        🌜
                                    </span>
                                </div>
                                <div className={'logoLightMode'}>
                                    <span>
                                        🌞
                                    </span>
                                </div>
                            </div>
                        </label>
                    </div>
                    <button className="navbar-toggler col" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                            aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">

                    </span>
                    </button>

                </div>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className={'navbar-nav ml-auto mr-auto'}>
                        <li className="nav-item mx-sm-1 mx-md-0 mx-lg-4">
                            <NavLink to={'/'}
                                     className={'nav-link'}
                            >Home
                            </NavLink>
                        </li>

                        <li className={'nav-item mx-sm-1 mx-md-0 mx-lg-4'}>
                            <NavLink to={'/advice'}
                                     className={'nav-link'}
                            >Advice
                            </NavLink>
                        </li>

                        <li className={'nav-item mx-sm-1 mx-md-0 mx-lg-4'}>
                            <NavLink to={'/faq'}
                                     className={'nav-link'}
                            >FAQ
                            </NavLink>

                        </li>
                        <li className="nav-item mx-sm-1 mx-md-0 mx-lg-4">
                            <NavLink to={'/about'}
                                     className={'nav-link'}
                            >About
                            </NavLink>
                        </li>

                        <li className="nav-item mx-sm-1 mx-md-0 mx-lg-4">
                            <NavLink to={'contact'}
                                     className={'nav-link'}
                            >Contact
                            </NavLink>

                            </li>
                    </ul>
                    <form className="align-bottom d-flex align-baseline align-items-md-end form-inline float-right">
                        {/*<div className="theme-switch-wrapper">*/}
                        {/*    <label className="theme-switch" htmlFor="checkbox">*/}
                        {/*        <input type="checkbox" id="checkbox"*/}
                        {/*               />*/}
                        {/*        <div className="slider round"/>*/}
                        {/*    </label>*/}
                        {/*</div>*/}
                        <button className={'align-center btn btn-transparent mx-md-2 '}>Log in</button>
                        <button className={"align-center btn btn-success mx-1 text-white font-weight-bold getStarted"}
                                onMouseDown={e => e.preventDefault()}>Get started
                        </button>
                    </form>
                </div>
            </nav>

        );
}

export default Header;