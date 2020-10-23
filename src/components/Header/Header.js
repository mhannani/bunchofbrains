import React from 'react'
import {NavLink} from "react-router-dom";
import {ReactComponent as Logo} from '../../logo.svg';
import Toggler from "./Toggler";
import Nav from '../chunks/Nav'
import HeaderLink from "../chunks/HeaderLink";
import Button from '../chunks/Button'
const Header = (props) => {

    return (

            <Nav className="{py-0 navbar navbar-expand-md navbar-light navbar-scroll fixed-top">

                <div className="navbar-brand">
                    <Logo className={'logo d-inline-block align-top'}/>
                    <a className="navbar-brand mr-1 d-none d-md-inline-block" href="/">
                        <HeaderLink>Depression</HeaderLink>
                    </a>
                </div>
                <div className={'row d-flex'}>
                    <Toggler theme={props.themeMode} toggleTheme={props.themeToggler} checked={props.theme !== 'light'}/>
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
                            ><HeaderLink>Home</HeaderLink>
                            </NavLink>
                        </li>

                        <li className={'nav-item mx-sm-1 mx-md-0 mx-lg-4'}>
                            <NavLink to={'/advice'}
                                     className={'nav-link'}
                            ><HeaderLink>Advice</HeaderLink>
                            </NavLink>
                        </li>

                        <li className={'nav-item mx-sm-1 mx-md-0 mx-lg-4'}>
                            <NavLink to={'/faq'}
                                     className={'nav-link'}
                            ><HeaderLink>FAQ</HeaderLink>
                            </NavLink>

                        </li>
                        <li className="nav-item mx-sm-1 mx-md-0 mx-lg-4">
                            <NavLink to={'/about'}
                                     className={'nav-link'}
                            ><HeaderLink>About</HeaderLink>
                            </NavLink>
                        </li>


                        <li className="nav-item mx-sm-1 mx-md-0 mx-lg-4">
                            <NavLink to={'contact'}
                                     className={'nav-link'}
                            ><HeaderLink>Contact</HeaderLink>
                            </NavLink>

                        </li>
                    </ul>
                    <form className="align-bottom d-flex align-baseline align-items-md-end form-inline float-right">
                        <button className={'align-center btn btn-transparent mx-md-2 '}>
                            <HeaderLink>Log in</HeaderLink>
                        </button>
                        <Button className={"align-center getStarted btn mx-1 "}
                                onMouseDown={e => e.preventDefault()}>Get started
                        </Button>
                    </form>
                </div>
            </Nav>

    );
}

export default Header;