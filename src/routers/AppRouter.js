// utilities
// =========
import React from 'react'

import {BrowserRouter, Switch} from "react-router-dom";

// Components
// ==========
import Home from "../components/Home/Home";
import Header from '../components/Header/Header';
import Advice from "../components/Advice/Advice"
import Faq from "../components/FAQ/Faq"
import About from "../components/About/About"
import Contact from "../components/Contact/contact";
import Footer from "../components/Footer/Footer";
import LogInOnMdScreen from "../components/LogIn/LogInOnMdScreen";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import NoMatch from "../components/NoMatch";
import SignUpOnMdScreen from "../components/SignUp/SignUpOnMdScreen"
import News from "../components/News/News";
import Blog from "../components/Blog/Blog"
import AllTroubles from "../components/All_troubles/AllTroubles";
import Depression from "../components/All_troubles/troubles_component/Depression";
import Anxiety from "../components/All_troubles/troubles_component/Anxiety";
import PanicDisorder from "../components/All_troubles/troubles_component/PanicDisorder";
import SelfEsteem from "../components/All_troubles/troubles_component/SelfEsteem"
import Addiction from "../components/All_troubles/troubles_component/Addiction";
import Parenting from "../components/All_troubles/troubles_component/Parenting";
import BrainHealth from "../components/All_troubles/troubles_component/BrainHealth";
import CognitiveDevelopment from "../components/All_troubles/troubles_component/CognitiveDevelopment";
import EmotionalAbuse from "../components/All_troubles/troubles_component/EmotionalAbuse";
import GoalSetting from "../components/All_troubles/troubles_component/GoalSetting";
import Lowliness from "../components/All_troubles/troubles_component/Lowliness";
import MaritalIssues from "../components/All_troubles/troubles_component/MaritalIssues";
import Motivation from "../components/All_troubles/troubles_component/Motivation";
import Ocd from "../components/All_troubles/troubles_component/Ocd";
import Phobias from "../components/All_troubles/troubles_component/Phobias";
import Ptsd from "../components/All_troubles/troubles_component/Ptsd";
import RelationshipIssues from "../components/All_troubles/troubles_component/RelationshipIssues";
import Schizophrenia from "../components/All_troubles/troubles_component/Schizophrenia";
import Sexuality from "../components/All_troubles/troubles_component/Sexuality";
import Bullying from "../components/All_troubles/troubles_component/Bullying";
import Spirituality from "../components/All_troubles/troubles_component/Spirituality";
import ScrollToTopRoute from "./ScrollToTopRoute";

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
                        <ScrollToTopRoute path='/' render={() => <Home title="Home - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/about' render={() => <About title="About - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/advice' render={() => <Advice title="Advice - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/faq'  render={() => <Faq title="Faq - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/contact' render={() => <Contact title="Contact - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/blog' render={() => <Blog title="Our Blog - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/news' render={() => <News title="News - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/all-troubles' render={() => <AllTroubles title="All troubles - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/all-troubles/depression' render={() => <Depression title="Depression - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/all-troubles/anxiety' render={() => <Anxiety title="Anxiety - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/all-troubles/panic-disorder' render={() => <PanicDisorder title="Panic Disorder - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/all-troubles/self-esteem' render={() => <SelfEsteem title="Self Esteem - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/all-troubles/addiction' render={() => <Addiction title="Addiction - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/all-troubles/parenting' render={() => <Parenting title="Parenting - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/all-troubles/brain-health' render={() => <BrainHealth title="Brain Health - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/all-troubles/cognitive-development' render={() => <CognitiveDevelopment title="Cognitive Development - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/all-troubles/emotional-abuse' render={() => <EmotionalAbuse title="Emotional Abuse - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/all-troubles/goal-setting' render={() => <GoalSetting title="Goal Setting - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/all-troubles/lowliness' render={() => <Lowliness title="Lowliness - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/all-troubles/marital-issues' render={() => <MaritalIssues title="Marital Issues - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/all-troubles/motivation' render={() => <Motivation title="Motivation - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/all-troubles/ocd' render={() => <Ocd title="OCD - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/all-troubles/phobias' render={() => <Phobias title="Phobias - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/all-troubles/ptsd' render={() => <Ptsd title="PTSD - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/all-troubles/relationship-issues' render={() => <RelationshipIssues title="Relationship Issues - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/all-troubles/schizophrenia' render={() => <Schizophrenia title="Schizophrenia - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/all-troubles/sexuality' render={() => <Sexuality title="Sexuality - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/all-troubles/bullying' render={() => <Bullying title="Bullying - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/all-troubles/spirituality' render={() => <Spirituality title="Spirituality - bunchofbrains"/>} exact={true}/>

                        <ScrollToTopRoute path='/log-in' render={() => <LogInOnMdScreen title="Log In - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/sign-up' render={() => <SignUpOnMdScreen title="Sign Up - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute path='/reset-password' render={() => <ResetPassword title="Forget Password  - bunchofbrains"/>} exact={true}/>
                        <ScrollToTopRoute component={NoMatch} />
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </ThemeProvider>

        )
}
export default AppRouter