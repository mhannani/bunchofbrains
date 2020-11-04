import React, {useState} from 'react';
import {GoogleSignUp, FaceBookSignUp, AppleSignUp, FormSeparatorWithOr} from "./SignUpEntyties";
import Form from './Form'
const SignUp = (props)=>{
    const [usingEmail, changeUsingEmail] = useState(false);
    const signUpInToggler = ()=>{
        props.changeIsLogIn(!props.isLogIn)
    }
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
                        <GoogleSignUp/>
                        <FaceBookSignUp/>
                        <AppleSignUp/>
                        <FormSeparatorWithOr/>
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
                                <span>Already a member ?</span>
                                <button className="link text-decoration-none" onClick={()=>signUpInToggler()}>Sign In</button>
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