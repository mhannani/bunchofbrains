import React from 'react'
import {LogInMessage, GoogleLogIn, FaceBookLogIn, AppleLogIn, LogInForm, FormSeparatorWithOr} from "./LogInEntyties"
const LogInOnMdScreen = ()=>{

    return(
        <div className={'container LogInOnMdScreen'}>

            <div className="col-6 loginForm mx-auto d-flex align-items-center justify-content-center">

                <div className="row mt-3 d-flex justify-content-center ">
                    <LogInMessage/>
                    <GoogleLogIn/>
                    <FaceBookLogIn/>
                    <AppleLogIn/>

                    <FormSeparatorWithOr/>
                    <LogInForm/>
                    <div className="sign-up text-center mt-2">
                        <p>Not a member yet ?
                            <a className=" link text-decoration-none text-center"
                               href={'/sign-up'}
                            >
                                Sign Up
                            </a>
                        </p>
                    </div>


                </div>

            </div>
        </div>
    )
}
export default LogInOnMdScreen