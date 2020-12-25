import React, {useEffect, useState} from "react";
import { Route, Redirect } from  "react-router-dom";
// import {firebase} from "../firebase/firebase";
import $ from "jquery";

// const  PrivateRoute: React.FC<{
//     component: React.FC;
//     path: string;
//     exact: boolean;
// }> = (props) => {
//
//     const condition = true;
//     // const condition = performValidationHere();
//
//     return  condition ? (<Route  path={props.path}  exact={props.exact} component={props.component} />) :
//         (<Redirect  to="/page/login"  />);
// };
// export  default  PrivateRoute;
//
//
// import React from "react";
// import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({ children, ...rest }) => {
    const [authState,setAuthState] = useState(false);
    // useEffect(() => {
    //     firebase.auth().onAuthStateChanged((user)=>{
    //         if(user){
    //             setAuthState(true);
    //         }
    //
    //     })
    // })


    return (
        <Route
            {...rest}
            render={({ location }) =>
                authState ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/log-in",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};
export default PrivateRoute;
