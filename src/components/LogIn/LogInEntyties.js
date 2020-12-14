import React from "react";
import {ReactComponent as GoogleIcon} from "./GoogleIcon.svg";
import {ReactComponent as FacebookIcon} from "./FacebookIcon.svg";
import {ReactComponent as TwitterIcon} from "./TwitterIcon.svg";

import {Link} from "react-router-dom";

export const LogInMessage = ()=>{
    return(
        <div className="col-xl-10 col-sm-12 mb-5">
            <p className={'text-center h5  font-weight-bold'}>Sign in to your bunchofbrains account</p>
        </div>
    )
}

export const GoogleLogIn = ()=>{
    return(
        <button className="col-xl-10 col-sm-12 mb-2 btn social">
            <GoogleIcon style={{float: "left"}}/>
            <span>Continue with Google</span>
        </button>
    )
}

export const FaceBookLogIn = ()=>{
    return(
        <button className="col-xl-10 col-sm-12 mb-2 btn social">
            <FacebookIcon style={{float: "left"}}/>
            <span>Continue with Facebook</span>
        </button>
    )
}

export const TwitterLogIn = ()=>{
    return(
        <button className="col-xl-10 col-sm-12  btn social">
            <TwitterIcon style={{float: "left"}}/>
            <span>Continue with Twitter</span>
        </button>
    )
}

export const LogInForm = ()=>{
    return(
        <form className="col-xl-10 col-sm-12 px-0 ">
            <div className="form-group">
                <input type="email" className="form-control margin-bottom"
                       aria-describedby="emailHelp" placeholder="Email address"/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control margin-bottom"
                       placeholder="Password"/>
            </div>
            <div className="form-group form-check mb-5">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label pl-4 " htmlFor="exampleCheck1">
                    Keep me signed in until I sign out
                </label>
            </div>

            <button type="submit" className="w-100 col-12 btn ">Sign In</button>
            <div className="forgot-password mt-2">
                <Link className="forgot-pass-text  font-weight-bold text-decoration-none"
                   target={"_blank"} to={"reset-password"}>
                    Forgot password ?
                </Link>

                <div className="form-separator my-4"/>

            </div>
        </form>
    )
}
export const FormSeparatorWithOr = ()=>{
    return(
        <div className="col-xl-10 col-sm-12 form-separator my-4">
            <span>or</span>
        </div>
    )
}