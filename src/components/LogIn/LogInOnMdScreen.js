import React, {useEffect} from 'react';
import {Animated} from "react-animated-css";
import {LogInMessage, GoogleLogIn, FaceBookLogIn, TwitterLogIn, LogInForm, FormSeparatorWithOr} from "./LogInEntyties";
import {Link} from "react-router-dom";
const LogInOnMdScreen = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <Animated animationIn="bounceInRight" animationOut="bounceOutLeft" animationInDuration={450} animationOutDuration={450} isVisible={true}>
            <div className={'container LogInOnMdScreen'}>

                <div className="col-5 loginForm mx-auto d-flex align-items-center justify-content-center">
                    <div className="row mt-3 d-flex justify-content-center ">
                        <LogInMessage/>
                        <GoogleLogIn/>
                        <FaceBookLogIn/>
                        <TwitterLogIn/>
                        <FormSeparatorWithOr/>
                        <LogInForm/>
                        <div className="sign-up text-center mt-2">
                            <p>Not a member yet ?
                                <Link to={"/sign-up"} className={'trouble_button link text-decoration-none text-center'}>
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Animated>
    )
}
export default LogInOnMdScreen