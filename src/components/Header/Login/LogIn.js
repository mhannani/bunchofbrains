import React, {Component} from 'react';
import {ReactComponent as FacebookIcon} from './FacebookIcon.svg';
import {ReactComponent as GoogleIcon} from './GoogleIcon.svg';
import {ReactComponent as AppleIcon} from './AppleIcon.svg';

const LogIn = ()=>{
    return(
        <div className={'container row'}>
            <div className="welcomeMessage d-flex align-items-center">
                <div>
                    <h2 className={' text-white text-center flex-wrap col-6'}>
                    Welcome Back To Bunchofbrains
                    </h2>
                    <div className={'ml-3 mt-4 borderSeparator'}/>
                    <h6 className={'text-white mt-4 flex-wrap col-6'}>
                        Sign in to continue to your account.
                    </h6>
                </div>
            </div>
            <div className="col-7 loginForm d-flex align-items-center justify-content-center">
                    <div className="row d-flex justify-content-center">
                        <button className="col-10 mb-2 btn">
                            <GoogleIcon style={{float:"left"}}/>
                            <span>Continue with Google</span>
                        </button>
                        <button className="col-10 mb-2 btn">
                            <FacebookIcon style={{float:"left"}}/>
                            <span>Continue with Facebook</span>
                        </button>
                        <button className="col-10 mb-2 btn">
                            <AppleIcon  style={{float:"left"}}/>
                            <span>Continue with Apple</span>
                        </button>
                        <div className="col-10 form-separator my-4">
                            <span>or</span>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default LogIn;