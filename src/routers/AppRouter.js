// utilities
// =========
import React from 'react'
import Header from '../components/Header/Header';
import {BrowserRouter, Route, Switch} from "react-router-dom";

// Components
// ==========
import Home from "../components/Home/Home";
import Advice from "../components/Advice/Advice"
import Faq from "../components/FAQ/Faq"
import About from "../components/About/About"
import Contact from "../components/Contact/contact";
import Footer from "../components/Footer/Footer";
import LogInOnMdScreen from "../components/LogIn/LogInOnMdScreen";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import NoMatch from "../components/NoMatch";
import SignUpOnMdScreen from "../components/SignUp/SignUpOnMdScreen"
import UserProvider from "../providers/UserProvider"

// Theme
// =====
import {UseDarkMode} from "../components/Themer/UseDarkMode";
import {darkTheme, lightTheme} from "../components/Themer/Themes";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "../components/Themer/GlobalStyle";

const AppRouter = ()=>{
        const [theme, themeToggler,componentMounted] = UseDarkMode();
        const themeMode = theme === 'light' ? lightTheme : darkTheme;
        if (!componentMounted) {
            return <div />
        }

        return(
            <ThemeProvider theme={themeMode}>
                <GlobalStyles/>
                <BrowserRouter>
                    <UserProvider>
                        <Header themeToggler={themeToggler} theme={theme}/>
                    </UserProvider>

                    <Switch>
                        <Route path='/' render={() => <Home title="Home - bunchofbrains"/>} exact={true}/>
                        <Route path='/advice' render={() => <Advice title="Advice - bunchofbrains"/>} exact={true}/>
                        <Route path='/faq'  render={() => <Faq title="Faq - bunchofbrains"/>} exact={true}/>
                        <Route path='/about' render={() => <About title="About - bunchofbrains"/>} exact={true}/>
                        <Route path='/contact' render={() => <Contact title="Contact - bunchofbrains"/>} exact={true}/>
                        <Route path='/log-in' render={() => <LogInOnMdScreen title="Log In - bunchofbrains"/>} exact={true}/>
                        <Route path='/sign-up' render={() => <SignUpOnMdScreen title="Sign Up - bunchofbrains"/>} exact={true}/>
                        <Route path='/reset-password' render={() => <ResetPassword title="Forget Password  - bunchofbrains"/>} exact={true}/>
                        <Route component={NoMatch} />
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </ThemeProvider>

        )
}
export default AppRouter