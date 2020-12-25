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
import UserProfile from "../components/User_profile/UserProfile";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import NoMatch from "../components/NoMatch";
import SignUpOnMdScreen from "../components/SignUp/SignUpOnMdScreen"
import News from "../components/News/News";
import Blog from "../components/Blog/Blog"
import AllTroubles from "../components/Brain_health/AllTroubles";
import Depression from "../components/Brain_health/troubles_component/Depression";
import Anxiety from "../components/Brain_health/troubles_component/Anxiety";
import PanicDisorder from "../components/Brain_health/troubles_component/PanicDisorder";
import SelfEsteem from "../components/Brain_health/troubles_component/SelfEsteem"
import Addiction from "../components/Brain_health/troubles_component/Addiction";
import Parenting from "../components/Brain_health/troubles_component/Parenting";
import BrainHealth from "../components/Brain_health/troubles_component/BrainHealth";
import CognitiveDevelopment from "../components/Brain_health/troubles_component/CognitiveDevelopment";
import EmotionalAbuse from "../components/Brain_health/troubles_component/EmotionalAbuse";
import GoalSetting from "../components/Brain_health/troubles_component/GoalSetting";
import Loneliness from "../components/Brain_health/troubles_component/Loneliness";
import MaritalIssues from "../components/Brain_health/troubles_component/MaritalIssues";
import Motivation from "../components/Brain_health/troubles_component/Motivation";
import Ocd from "../components/Brain_health/troubles_component/Ocd";
import Phobias from "../components/Brain_health/troubles_component/Phobias";
import Ptsd from "../components/Brain_health/troubles_component/Ptsd";
import RelationshipIssues from "../components/Brain_health/troubles_component/RelationshipIssues";
import Schizophrenia from "../components/Brain_health/troubles_component/Schizophrenia";
import Sexuality from "../components/Brain_health/troubles_component/Sexuality";
import Bullying from "../components/Brain_health/troubles_component/Bullying";
import Spirituality from "../components/Brain_health/troubles_component/Spirituality";

import TermsAndConditions from "../components/Terms_and_conditions/TermsAndConditions";
import Privacy from "../components/Privacy/Privacy";
import PolicyAccessibility from "../components/Policy_and_accessibility/PolicyAccessibility";
import Statement from "../components/Statement/Statement";

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
                        <ScrollToTopRoute path='/' exact={true}>
                            <Home title="Home - bunchofbrains" />
                        </ScrollToTopRoute>
                        <ScrollToTopRoute path='/about' exact={true}>
                            <About title="About - bunchofbrains"/>
                        </ScrollToTopRoute>
                        <ScrollToTopRoute path='/advice' exact={true}>
                            <Advice title="Advice - bunchofbrains"/>
                        </ScrollToTopRoute>
                        <ScrollToTopRoute path='/faq' exact={true}>
                            <Faq title="Faq - bunchofbrains"/>
                        </ScrollToTopRoute>
                        <ScrollToTopRoute path='/contact' exact={true}>
                            <Contact title="Contact - bunchofbrains"/>
                        </ScrollToTopRoute>
                        <ScrollToTopRoute path='/blog' exact={true}>
                            <Blog title="Our Blog - bunchofbrains"/>
                        </ScrollToTopRoute>
                        <ScrollToTopRoute path='/news' exact={true}>
                            <News title="News - bunchofbrains"/>
                        </ScrollToTopRoute>

                        <ScrollToTopRoute path='/all-troubles' exact={true}>
                            <AllTroubles title="Brain Health - bunchofbrains"/>
                        </ScrollToTopRoute>

                        <ScrollToTopRoute path='/all-troubles/depression' exact={true}>
                            <Depression title="Depression - bunchofbrains"/>
                        </ScrollToTopRoute>

                        <ScrollToTopRoute path='/all-troubles/anxiety' exact={true}>
                            <Anxiety title="Anxiety - bunchofbrains"/>
                        </ScrollToTopRoute>

                        <ScrollToTopRoute path='/all-troubles/panic-disorder' exact={true}>
                            <PanicDisorder title="Panic Disorder - bunchofbrains"/>
                        </ScrollToTopRoute>

                        <ScrollToTopRoute path='/all-troubles/self-esteem' exact={true}>
                            <SelfEsteem title="Self Esteem - bunchofbrains"/>
                        </ScrollToTopRoute>

                        <ScrollToTopRoute path='/all-troubles/addiction' exact={true}>
                            <Addiction title="Addiction - bunchofbrains"/>
                        </ScrollToTopRoute>

                        <ScrollToTopRoute path='/all-troubles/parenting' exact={true}>
                            <Parenting title="Parenting - bunchofbrains"/>
                        </ScrollToTopRoute>

                        <ScrollToTopRoute path='/all-troubles/brain-health' exact={true}>
                            <BrainHealth title="Brain Health - bunchofbrains"/>
                        </ScrollToTopRoute>
                        <ScrollToTopRoute path='/all-troubles/cognitive-development' exact={true}>
                            <CognitiveDevelopment title="Cognitive Development - bunchofbrains"/>
                        </ScrollToTopRoute>
                        <ScrollToTopRoute path='/all-troubles/emotional-abuse' exact={true}>
                            <EmotionalAbuse title="Emotional Abuse - bunchofbrains"/>
                        </ScrollToTopRoute>

                        <ScrollToTopRoute path='/all-troubles/goal-setting' exact={true}>
                            <GoalSetting title="Goal Setting - bunchofbrains"/>
                        </ScrollToTopRoute>
                        <ScrollToTopRoute path='/all-troubles/loneliness' exact={true}>
                            <Loneliness title="Lowliness - bunchofbrains"/>
                        </ScrollToTopRoute>

                        <ScrollToTopRoute path='/all-troubles/marital-issues' exact={true}>
                            <MaritalIssues title="Marital Issues - bunchofbrains"/>
                        </ScrollToTopRoute>
                        <ScrollToTopRoute path='/all-troubles/motivation' exact={true}>
                            <Motivation title="Motivation - bunchofbrains"/>
                        </ScrollToTopRoute>
                        <ScrollToTopRoute path='/all-troubles/ocd' exact={true}>
                            <Ocd title="OCD - bunchofbrains"/>
                        </ScrollToTopRoute>
                        <ScrollToTopRoute path='/all-troubles/phobias' exact={true}>
                            <Phobias title="Phobias - bunchofbrains"/>
                        </ScrollToTopRoute>
                        <ScrollToTopRoute path='/all-troubles/ptsd' exact={true}>
                            <Ptsd title="PTSD - bunchofbrains"/>
                        </ScrollToTopRoute>
                        <ScrollToTopRoute path='/all-troubles/relationship-issues' exact={true}>
                            <RelationshipIssues title="Relationship Issues - bunchofbrains"/>
                        </ScrollToTopRoute>

                        <ScrollToTopRoute path='/all-troubles/schizophrenia' exact={true}>
                            <Schizophrenia title="Schizophrenia - bunchofbrains"/>
                        </ScrollToTopRoute>

                        <ScrollToTopRoute path='/all-troubles/sexuality' exact={true}>
                            <Sexuality title="Sexuality - bunchofbrains"/>
                        </ScrollToTopRoute>

                        <ScrollToTopRoute path='/all-troubles/bullying' exact={true}>
                            <Bullying title="Bullying - bunchofbrains"/>
                        </ScrollToTopRoute>

                        <ScrollToTopRoute path='/all-troubles/spirituality' exact={true}>
                            <Spirituality title="Spirituality - bunchofbrains"/>
                        </ScrollToTopRoute>

                        <ScrollToTopRoute path='/terms-and-conditions' exact={true}>
                            <TermsAndConditions title="Terms And Conditions - bunchofbrains"/>
                        </ScrollToTopRoute>

                        <ScrollToTopRoute path='/privacy' exact={true}>
                            <Privacy title="Privacy - bunchofbrains"/>
                        </ScrollToTopRoute>
                        <ScrollToTopRoute path='/policy-accessibility' exact={true}>
                            <PolicyAccessibility title="policy Accessibility - bunchofbrains"/>
                        </ScrollToTopRoute>
                        <ScrollToTopRoute path='/statement' exact={true}>
                            <Statement title="Statement - bunchofbrains"/>
                        </ScrollToTopRoute>
                        <ScrollToTopRoute path='/log-in' exact={true}>
                            <LogInOnMdScreen title="Log In - bunchofbrains"/>
                        </ScrollToTopRoute>
                        <ScrollToTopRoute path='/sign-up'  exact={true}>
                            <SignUpOnMdScreen title="Sign Up - bunchofbrains"/>
                        </ScrollToTopRoute>
                        <ScrollToTopRoute path='/profile' exact={true}>
                            <UserProfile title="My account  - bunchofbrains"/>
                        </ScrollToTopRoute>
                        <ScrollToTopRoute path='/reset-password' exact={true}>
                            <ResetPassword title="Forget Password  - bunchofbrains"/>
                        </ScrollToTopRoute>
                        <ScrollToTopRoute>
                            <NoMatch title="404 - bunchofbrains"/>
                        </ScrollToTopRoute>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </ThemeProvider>

        )
}
export default AppRouter