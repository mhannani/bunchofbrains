// utilities
// =========
import React from 'react'
import Header from '../components/Header';
import {BrowserRouter, Route, Switch} from "react-router-dom";

// Components
// ==========
import Home from "../components/Home/Home";
import Advice from "../components/Advice/Advice"
import Faq from "../components/FAQ/Faq"
import About from "../components/About/About"
import Contact from "../components/Contact/contact";
import NoMatch from "../components/NoMatch";

class AppRouter extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path='/' component={Home} exact={true}/>
                    <Route path='/advice' component={Advice} exact={true}/>
                    <Route path='/faq' component={Faq} exact={true}/>
                    <Route path='/about' component={About} exact={true}/>
                    <Route path='/contact' component={Contact} exact={true}/>
                    <Route component={NoMatch} />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default AppRouter