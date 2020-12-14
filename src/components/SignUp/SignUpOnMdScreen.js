import React, {useEffect, useState} from 'react'
import {SignUpMessage, GoogleSignUp, FaceBookSignUp, TwitterSignUp, FormSeparatorWithOr} from "./SignUpEntyties"
import {FormSignUpWithEmailAndPassword} from "./Form";
const LogInOnMdScreen = (props)=>{
    const [usingEmail, changeUsingEmail] = useState(false);
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'container LogInOnMdScreen d-flex align-items-center justify-content-center'}>

            <div className="col-6 loginForm mx-auto d-flex align-items-center justify-content-center">

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
                            <a className="link text-decoration-none" href={'/log-in'}>Log In</a>
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
    )
}
export default LogInOnMdScreen