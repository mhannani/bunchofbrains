import React, {useState} from 'react';
import {ReactComponent as GoogleIcon} from "../LogIn/GoogleIcon.svg";
import {ReactComponent as FacebookIcon} from "../LogIn/FacebookIcon.svg";
import {ReactComponent as AppleIcon} from "../LogIn/AppleIcon.svg";
import Form from './Form'
const SignUp = ()=>{
    const [usingEmail, changeUsingEmail] = useState(false);
    return(
        <div className={'sign-up'}>
            <div className={'container row'}>
                <div className="welcomeMessage d-flex align-items-center">
                    <div>
                        <h5 className={'text-white text-center flex-wrap col-5'}>
                            Join Bunchofbrains for Free
                        </h5>

                        <div className={'ml-3 mt-3 borderSeparator'}/>
                        <h6 className={'text-white mt-3 flex-wrap col-5'}>
                            Kick out the depression by talking
                            to our experts,
                            discuss with them, get advices, and more.
                        </h6>
                    </div>
                </div>

                <div className="col-7 loginForm d-flex align-items-center justify-content-center">
                    <div className="row mt-3 d-flex justify-content-center">
                        <button className="col-9 mb-2 btn social">
                            <GoogleIcon style={{float: "left"}}/>
                            <span>Continue with Google</span>
                        </button>
                        <button className="col-9 mb-2 btn social">
                            <FacebookIcon style={{float: "left"}}/>
                            <span>Continue with Facebook</span>
                        </button>
                        <button className="col-9 mb-2 btn social">
                            <AppleIcon style={{float: "left"}}/>
                            <span>Continue with Apple</span>
                        </button>
                        <div className="col-9 form-separator mt-1 mb-3">
                            <span>or</span>
                        </div>
                        {
                            !usingEmail ?
                            <div className="sign-up my-1">
                                <button onClick={() => changeUsingEmail(!usingEmail)}
                                        className="link text-decoration-none">
                                    Sign Up Using Email
                                </button>
                            </div>: <Form/>
                        }
                        <div className="forgot-password  mt-2 text-center ">
                            <div className="sign-up text-center mt-1">
                                <span>Already a member?</span>
                                <button className="link text-decoration-none">Sign In.</button>
                                <div className="mx-auto col-9 form-separator"/>
                            </div>
                            <div className="col-12 text-center confidentiality">
                                By signing up you agree to Bunchofbrains's Terms of Service and Privacy Policy.
                                This page is protected
                                by reCAPTCHA and is subject to Google's Terms of Service and Privacy Policy.
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignUp;