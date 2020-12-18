import React, {useEffect} from 'react'
import {LogInMessage, GoogleLogIn, FaceBookLogIn, TwitterLogIn, LogInForm, FormSeparatorWithOr} from "./LogInEntyties"
import {Link} from "react-router-dom";
const LogInOnMdScreen = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'container LogInOnMdScreen'}>

            <div className="col-6 loginForm mx-auto d-flex align-items-center justify-content-center">

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
    )
}
export default LogInOnMdScreen