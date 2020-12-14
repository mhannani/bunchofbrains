import React from 'react';
import {GoogleLogIn, FaceBookLogIn, TwitterLogIn, LogInForm, FormSeparatorWithOr} from "./LogInEntyties"
const LogIn = (props)=>{
    const signInUpToggler = ()=>{
        props.changeIsLogIn(!props.isLogIn)
        console.log(props.isLogIn)
    }
    return(
        <div className={'container'}>
            <div className="welcomeMessage d-flex align-items-center">
                <div>
                    <h2 className={'text-white flex-wrap col-8'}>
                    Welcome Back To Bunchofbrains
                    </h2>
                    <div className={'ml-3 mt-4 borderSeparator'}/>
                    <h6 className={'text-white mt-4 flex-wrap col-8'}>
                        Sign in to continue to your account.
                    </h6>
                </div>
            </div>
            <div className={'LogInOnMdScreen'}>

                <div className="col-7 loginForm mx-auto d-flex align-items-center justify-content-center">

                    <div className="row mt-3 d-flex justify-content-center ">
                        <GoogleLogIn/>
                        <FaceBookLogIn/>
                        <TwitterLogIn/>

                        <FormSeparatorWithOr/>
                        <LogInForm/>
                        <div className="sign-up text-center mt-2">
                            <p>Not a member yet ?
                                <button className=" link text-decoration-none text-center"
                                   onClick={()=>signInUpToggler()}
                                >
                                    Sign Up
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn;