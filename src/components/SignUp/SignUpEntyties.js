import React from "react";

export const SignUpMessage = ()=>{
    return(
        <div className="col-xl-10 col-sm-12 mb-5">
            <p className={'text-center h5  font-weight-bold'}>Join Bunchofbrains for Free</p>
        </div>
    )
}

export const FormSeparatorWithOr = ()=>{
    return(
        <div className="col-xl-10 col-md-10 col-sm-8 form-separator my-3">
            <span>or</span>
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