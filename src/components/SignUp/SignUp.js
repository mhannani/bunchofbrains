import React from 'react';
import {FormSeparatorWithOr, Confidentiality} from "./SignUpEntyties";
import GoogleSignUp from './AuthProviders/Google/GoogleSignUp'
import FacebookSignUp from './AuthProviders/Facebook/FacebookSignUp'
import TwitterSignUp from './AuthProviders/Twitter/TwitterSignUp'
import FormSignUpWithEmailAndPassword from './Form'
import Typical from "react-typical";
import {useDispatch} from "react-redux";

const SignUp = ()=>{
    const dispatch = useDispatch();
    const signUpInToggler = ()=>{
        dispatch({ type: "IS_LOG_IN"})
    }

    return(
        <div className={'sign-up'}>
            <div className={'container row'}>
                <div className="welcomeMessage d-flex align-items-center">
                    <div>
                        <h2 className={'text-white flex-wrap col-10'}>
                            Join Bunchofbrains for Free
                        </h2>
                        <div className={'ml-3 mt-3 borderSeparator'}/>
                        <h6 className={'text-white mt-3 flex-wrap col-8'}>
                            <Typical
                                steps={['Master life.', 1500, 'Master psychology.', 500]}
                                loop={Infinity}
                                wrapper="p"
                            />
                        </h6>
                    </div>
                </div>

                <div className="col-6 loginForm d-flex align-items-center justify-content-center">
                    <div className="row mt-3 d-flex justify-content-center">
                        <GoogleSignUp/>
                        <FacebookSignUp/>
                        <TwitterSignUp/>
                        <FormSeparatorWithOr/>
                        <FormSignUpWithEmailAndPassword/>
                        <div className="forgot-password text-center ">
                            <div className="sign-up text-center">
                                <p>Already a member ?
                                    <button className="link text-decoration-none"
                                            onClick={()=>signUpInToggler()}
                                    >
                                        Log In
                                    </button>
                                </p>
                            </div>
                            <Confidentiality/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;