import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {ReactComponent as Logo} from './brain.svg';
import Toggler from "./Toggler";
import Nav from '../chunks/Nav'
import HeaderLink from "../chunks/HeaderLink";
import Button from '../chunks/Button';
import I from '../chunks/I';
import PopUpModal from '../PopUp/PopUpModal'

const selected = {
    fontWeight: "bold",
    color: "black"
}

const Header = (props) => {
    const [isVisible, toggleVisibility] =  useState(false)
    const [isLogIn, changeIsLogIn] =  useState(true)
    const logInHandler = ()=>{
        changeIsLogIn(isLogIn => true)
        toggleVisibility(!isVisible) // To change it to be initialised with true
        // Logic of log in ...
    }
    const signUpHandler = ()=>{
        toggleVisibility(!isVisible);
        changeIsLogIn(isLogIn => false)
    }
    const closeModal = ()=>{
        toggleVisibility(!isVisible);
    }
    return (

            <Nav className="{py-0 navbar navbar-expand-md navbar-light navbar-scroll fixed-top">

                <div className="navbar-brand">
                    <Logo className={'logo d-inline-block align-top mr-2'}/>
                    <a className="navbar-brand mr-0 d-none d-md-inline-block" href="/">
                        <HeaderLink>Bunchofbrains</HeaderLink>
                    </a>
                </div>
                <div className={'row d-flex'}>
                    <Toggler theme={props.theme} toggleTheme={props.themeToggler} checked={props.theme !== 'light'}/>
                    <button className="navbar-toggler col" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                            aria-label="Toggle navigation">
                    <span>
                        <I className="fa fa-reorder" />
                    </span>
                    </button>

                </div>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className={'navbar-nav ml-auto mr-auto'}>
                        <li className="nav-item mx-sm-1 mx-md-0 mx-lg-3">
                            <NavLink to={'/'} activeStyle={selected} exact
                                     className={'nav-link'}
                            ><HeaderLink>Home</HeaderLink>
                            </NavLink>
                        </li>
                        <li className={'nav-item mx-sm-1 mx-md-0 mx-lg-3'}>
                            <NavLink to={'/advice'} activeStyle={selected}
                                     className={'nav-link'}
                            ><HeaderLink>Advice</HeaderLink>
                            </NavLink>
                        </li>
                        <li className={'nav-item mx-sm-1 mx-md-0 mx-lg-3'}>
                            <NavLink to={'/faq'} activeStyle={selected}
                                     className={'nav-link'}
                            ><HeaderLink>FAQ</HeaderLink>
                            </NavLink>
                        </li>
                        <li className="nav-item mx-sm-1 mx-md-0 mx-lg-3">
                            <NavLink to={'/about'} activeStyle={selected}
                                     className={'nav-link'}
                            ><HeaderLink>About</HeaderLink>
                            </NavLink>
                        </li>
                        <li className="nav-item mx-sm-1 mx-md-0 mx-lg-3">
                            <NavLink to={'/contact'} activeStyle={selected}
                                     className={'nav-link'}
                            ><HeaderLink>Contact</HeaderLink>
                            </NavLink>
                        </li>
                    </ul>
                    <form className="align-bottom d-flex align-baseline align-items-md-end form-inline float-right">
                        <button type="button" className={'align-center btn btn-transparent mx-md-1 '}>
                            <HeaderLink onClick={logInHandler}>Log in</HeaderLink>
                        </button>
                        <Button type="button" className={"align-center getStarted btn mx-1 "}
                                onMouseDown={e => e.preventDefault()} onClick={signUpHandler}>
                            <HeaderLink className={'excluded'}>Get started</HeaderLink>
                        </Button>
                    </form>
                </div>
                <PopUpModal closeModal={closeModal}
                            changeIsLogIn={changeIsLogIn}
                            isLogIn = {isLogIn}
                            isVisible = {isVisible}
                />
            </Nav>
    );
}

export default Header;
