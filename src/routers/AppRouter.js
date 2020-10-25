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
import LogIn from "../components/Login/LogIn";
import SignUp from "../components/SignUp/SingUp";
import NoMatch from "../components/NoMatch";

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
                    <Header themeToggler={themeToggler} theme={theme}/>
                    <Switch>
                        <Route path='/' component={Home} exact={true}/>
                        <Route path='/advice' component={Advice} exact={true}/>
                        <Route path='/faq' component={Faq} exact={true}/>
                        <Route path='/about' component={About} exact={true}/>
                        <Route path='/contact' component={Contact} exact={true}/>
                        <Route path='/login' component={LogIn} exact={true}/>
                        <Route path='/signup' component={SignUp} exact={true}/>
                        <Route component={NoMatch} />
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>

        )
}
export default AppRouter