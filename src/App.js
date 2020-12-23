import React from "react";
import AppRouter from './routers/AppRouter'
import {withAuthentication} from "./Session"

const App = ()=> {
    return (
      <AppRouter/>
    );
}


export default withAuthentication(App);