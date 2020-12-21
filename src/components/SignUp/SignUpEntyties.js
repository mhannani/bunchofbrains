import {ReactComponent as GoogleIcon} from "../LogIn/GoogleIcon.svg";
import {ReactComponent as FacebookIcon} from "../LogIn/FacebookIcon.svg";
import {ReactComponent as TwitterIcon} from "../LogIn/TwitterIcon.svg";
import {signInWithGoogle, signInWithFacebook, signInWithTwitter} from "../../firebase/firebase"
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
        <div className={'col-md-10 col-sm-12 text-center'}>
            <button className="col-6 mb-2 btn social" onClick={() => {
                try {
                    signInWithGoogle();
                } catch (error) {
                    console.error("Error signing in with Google", error);
                }
            }}>
                <GoogleIcon style={{float: "left"}}/>
                <span>Google</span>
            </button>
        </div>
    )
}

export const FaceBookSignUp = ()=>{
    return(
        <div className={'col-md-10 col-sm-12 text-center'}>
            <button className="col-6 mb-2 btn social" onClick={() => {
                try {
                    signInWithFacebook();
                } catch (error) {
                    console.error("Error signing in with Google", error);
                }
            }}>
                <FacebookIcon style={{float: "left"}}/>
                <span>Facebook</span>
            </button>
        </div>
    )
}

export const TwitterSignUp = ()=>{
    return(
        <div className={'col-md-10 col-sm-12 text-center'}>
            <button className="col-6 btn social" onClick={() => {
                try {
                    signInWithTwitter();
                } catch (error) {
                    console.error("Error signing in with Google", error);
                }
            }}>
                <TwitterIcon style={{float: "left"}}/>
                <span>Twitter</span>
            </button>
        </div>
    )
}

export const FormSeparatorWithOr = ()=>{
    return(
        <div className="col-xl-10 col-md-10 col-sm-8 form-separator my-3">
            {/*col-sm-12 instead of col-sm-8*/}
            <span>or</span>
        </div>
    )
}
export const AlreadyMember = (props) =>{
    const signUpInToggler = ()=>{
        props.changeIsLogIn(!props.isLogIn)
    }

    return(
        <div className="sign-up text-center">
            <p>Already a member ?
                <button className="link text-decoration-none" onClick={()=>signUpInToggler()}>Log In</button>
            </p>
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