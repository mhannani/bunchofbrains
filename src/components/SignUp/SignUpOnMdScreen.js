import React, {useEffect, useState} from 'react';
import {Animated} from "react-animated-css";
import {SignUpMessage, GoogleSignUp, FaceBookSignUp, TwitterSignUp, FormSeparatorWithOr} from "./SignUpEntyties";
import {FormSignUpWithEmailAndPassword} from "./Form";
import {Link} from "react-router-dom";
const LogInOnMdScreen = (props)=>{
    const [usingEmail, changeUsingEmail] = useState(false);
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <Animated animationIn="bounceInRight" animationOut="fadeOut" animationInDuration={450} animationOutDuration={100} isVisible={true}>
            <div className={'container LogInOnMdScreen d-flex align-items-center justify-content-center'}>
                <div className="col-5 loginForm mx-auto d-flex align-items-center justify-content-center">
                    <div className="row mt-3 d-flex justify-content-center ">
                        <SignUpMessage/>
                        <GoogleSignUp/>
                        <FaceBookSignUp/>
                        <TwitterSignUp/>
                        <FormSeparatorWithOr/>
                        
                        {
                            !usingEmail ?
                                <div className="sign-up my-1">
                                    <button onClick={() => changeUsingEmail(!usingEmail)}
                                            className="link text-decoration-none">
                                        Sign Up Using Email
                                    </button>
                                </div>: <FormSignUpWithEmailAndPassword/>
                        }
                        <div className="forgot-password  mt-2 text-center ">
                            <div className="sign-up text-center mt-1">
                                <span>Already a member ?</span>
                                <Link to={"/log-in"} className={'trouble_button link text-decoration-none'}>
                                    Log In
                                </Link>
                                <div className="mx-auto col-xl-10 col-sm-12 form-separator"/>
                            </div>

                            <div className="col-xl-11 col-sm-12 mx-auto text-center confidentiality">
                                By signing up you agree to Bunchofbrains's Terms of Service and Privacy Policy.
                                This page is protected
                                by reCAPTCHA and is subject to Google's Terms of Service and Privacy Policy.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Animated>

    )
}
export default LogInOnMdScreen