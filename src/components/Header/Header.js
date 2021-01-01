import React, {useEffect} from 'react'
import $ from 'jquery';
import {NavLink, useHistory} from "react-router-dom";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {ReactComponent as Logo} from './brain.svg';
// import Toggler from "./Toggler";
import Nav from '../chunks/Nav'
import HeaderLink from "../chunks/HeaderLink";
import Button from '../chunks/Button';
import I from '../chunks/I';
import PopUpModal from '../PopUp/PopUpModal'


import UserAction from "./UserActions";

const Header = () => {
    const history = useHistory();
    const authUser = useSelector(state => state.sessionState.authUser)
    const dispatch = useDispatch();

    useEffect(() => {
        $('button.navbar-toggle').focusout(function () {
            $(".navbar-collapse").collapse('hide');
        });

        // Close Bootstrap 3 navbar when a nav item is clicked
        $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
            $('.navbar-toggle:visible').click();
        });

        $(function () {
            $(document).click(function () {
                $('.navbar-collapse').collapse('hide');
            });
        });
        $(document).ready(function () {
            function checkOffset() {
                $(".navbar-collapse").collapse('hide');
            }

            // Run function when scrolling
            $(window).scroll(function () {
                checkOffset();
            });
            // Run function on Clicking
            $(window).click(function () {
                checkOffset();
            });
        });
    })

    const logInHandler = () => {
        const mql = window.matchMedia('(max-width: 900px)')
        if (mql.matches) {
            // The viewport is less than 670px
            history.push("/log-in");
        } else {
            // The viewport is wider than 670px
            dispatch({type: "IS_LOG_IN"})
            dispatch({type: "IS_OPEN"})
        }
    }

    const signUpHandler = () => {
        const mql = window.matchMedia('(max-width: 900px)')
        if (mql.matches) {
            // The viewport is less than 670px
            history.push("/sign-up");
        } else {
            // The viewport is wider than 670px
            dispatch({type: "IS_SIGN_UP"})
            dispatch({type: "IS_OPEN"})
        }
    }

    return (
        <Nav className="{py-0 navbar navbar-expand-lg navbar-light navbar-scroll fixed-top">

            <div className="navbar-brand">
                <Link to={'/'}>
                    <Logo className={'logo d-inline-block align-top mr-2'}/>
                </Link>
                <Link to={'/'}>
                    <HeaderLink className="navbar-brand mr-0 d-none d-sm-inline-block">Bunchofbrains</HeaderLink>
                </Link>
            </div>

            <div className={'row d-flex'}>
                {/*<Toggler theme={props.theme} toggleTheme={props.themeToggler} checked={props.theme !== 'light'}/>*/}
                <button className="navbar-toggler col" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span>
                        <I className="fa fa-reorder"/>
                    </span>
                </button>
            </div>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className={'navbar-nav ml-auto mr-auto'}>
                    <li className="nav-item mx-sm-1 mx-md-0 mx-lg-2">
                        <NavLink to={'/'} activeClassName="selected" exact
                                 className={'nav-link'}
                        ><HeaderLink>Home</HeaderLink>
                        </NavLink>
                    </li>

                    <li className="nav-item mx-sm-1 mx-md-0 mx-lg-2">
                        <NavLink to={'/about'} activeClassName="selected"
                                 className={'nav-link'}
                        ><HeaderLink>About</HeaderLink>
                        </NavLink>
                    </li>

                    <li className={'nav-item mx-sm-1 mx-md-0 mx-lg-2'}>
                        <NavLink to={'/advice'} activeClassName="selected"
                                 className={'nav-link'}
                        ><HeaderLink>Advice</HeaderLink>
                        </NavLink>
                    </li>

                    <li className={'nav-item mx-sm-1 mx-md-0 mx-lg-2'}>
                        <NavLink to={'/faq'} activeClassName="selected"
                                 className={'nav-link'}
                        ><HeaderLink>FAQ</HeaderLink>
                        </NavLink>
                    </li>

                    <li className="nav-item mx-sm-1 mx-md-0 mx-lg-2">
                        <NavLink to={'/news'} activeClassName="selected"
                                 className={'nav-link'}
                        ><HeaderLink>News</HeaderLink>
                        </NavLink>
                    </li>

                    <li className="nav-item mx-sm-1 mx-md-0 mx-lg-2">
                        <NavLink to={'/blog'} activeClassName="selected"
                                 className={'nav-link'}
                        ><HeaderLink>Blog</HeaderLink>
                        </NavLink>
                    </li>

                    <li className="nav-item mx-sm-1 mx-md-0 mx-lg-2">
                        <NavLink to={'/contact'} activeClassName="selected"
                                 className={'nav-link'}
                        ><HeaderLink>Contact</HeaderLink>
                        </NavLink>
                    </li>
                </ul>

                <form className="align-top d-flex align-baseline align-items-md-end form-inline float-right">
                    {authUser ? <UserAction className={'mx-5'}/>
                        :
                        <div>
                            <button type="button" className={'align-center btn btn-transparent mx-md-1 '}>
                                <HeaderLink onClick={logInHandler}>Log in</HeaderLink>
                            </button>
                            <Button type="button" className={"align-center getStarted btn mx-0 "}
                                    onMouseDown={e => e.preventDefault()} onClick={signUpHandler}>
                                <HeaderLink className={'excluded'}>Get started</HeaderLink>
                            </Button>
                        </div>
                    }
                </form>
            </div>
            <PopUpModal/>
        </Nav>
    );
}

export default Header;
