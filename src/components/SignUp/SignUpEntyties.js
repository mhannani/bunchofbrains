import {ReactComponent as GoogleIcon} from "../LogIn/GoogleIcon.svg";
import {ReactComponent as FacebookIcon} from "../LogIn/FacebookIcon.svg";
import {ReactComponent as AppleIcon} from "../LogIn/AppleIcon.svg";
import React from "react";

export const SignUpMessage = ()=>{
    return(
        <div className="col-xl-10 col-sm-12 mb-5">
            <p className={'text-center h5  font-weight-bold'}>Join Bunchofbrains for Free</p>
        </div>
    )
}

export const GoogleSignUp = ()=>{
    return(
        <button className="col-xl-10 col-sm-12 mb-2 btn social">
            <GoogleIcon style={{float: "left"}}/>
            <span>Continue with Google</span>
        </button>
    )
}

export const FaceBookSignUp = ()=>{
    return(
        <button className="col-xl-10 col-sm-12 mb-2 btn social">
            <FacebookIcon style={{float: "left"}}/>
            <span>Continue with Facebook</span>
        </button>
    )
}

export const AppleSignUp = ()=>{
    return(
        <button className="col-xl-10 col-sm-12  btn social">
            <AppleIcon style={{float: "left"}}/>
            <span>Continue with Apple</span>
        </button>
    )
}

export const FormSeparatorWithOr = ()=>{
    return(
        <div className="col-xl-10 col-sm-12 form-separator my-4">
            <span>or</span>
        </div>
    )
}
export const AlreadyMember = (props) =>{
    const signUpInToggler = ()=>{
        props.changeIsLogIn(!props.isLogIn)
    }

    return(
        <div className="sign-up text-center mt-1">
            <p>Already a member ?
                <button className="link text-decoration-none" onClick={()=>signUpInToggler()}>Log In</button>
            </p>
            <div className="mx-auto col-xl-10 col-sm-12 form-separator"/>
        </div>
    )
}

export const Confidentiality = ()=>{
    return(
        <div className="col-xl-11 col-sm-12 mx-auto text-center confidentiality">
            By signing up you agree to Bunchofbrains's Terms of Service and Privacy Policy.
            This page is protected
            by reCAPTCHA and is subject to Google's Terms of Service and Privacy Policy.
        </div>
    )
}