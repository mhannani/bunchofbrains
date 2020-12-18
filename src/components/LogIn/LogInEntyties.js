import React, {useState} from "react";
import { Formik, Field, Form } from "formik";
import {ReactComponent as GoogleIcon} from "./GoogleIcon.svg";
import {ReactComponent as FacebookIcon} from "./FacebookIcon.svg";
import {ReactComponent as TwitterIcon} from "./TwitterIcon.svg";

import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase";

export const LogInMessage = ()=>{
    return(
        <div className="col-xl-10 col-sm-12 mb-5">
            <p className={'text-center h5  font-weight-bold'}>Sign in to your bunchofbrains account</p>
        </div>
    )
}

export const GoogleLogIn = ()=>{
    return(
        <div className={'col-md-10 col-sm-12 text-center'}>
            <button className="col-6 mb-2 btn social">
                <GoogleIcon style={{float: "left"}}/>
                <span>Google</span>
            </button>
        </div>
    )
}

export const FaceBookLogIn = ()=>{
    return(
        <div className={'col-md-10 col-sm-12 text-center'}>
            <button className="col-6 mb-2 btn social">
                <FacebookIcon style={{float: "left"}}/>
                <span>Facebook</span>
            </button>
        </div>
    )
}

export const TwitterLogIn = ()=>{
    return(
        <div className={'col-md-10 col-sm-12 text-center'}>
            <button className="col-6 btn social">
                <TwitterIcon style={{float: "left"}}/>
                <span>Twitter</span>
            </button>
        </div>
    )
}

export const LogInForm = ()=>{
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (values) => {
        console.log(values.email)
        // event.preventDefault();
        auth.signInWithEmailAndPassword().catch(error => {
            // console.log(email)
            setError(error.message);
            console.error("Error signing in with password and email", error);
        });
    };


    return(
        <Formik
            initialValues={{ email: "", password: "" ,keepSignedIn:false}}
            onSubmit={signInWithEmailAndPasswordHandler}
        >
            <Form className="col-xl-10 col-sm-12 px-0 ">
                {error !== null && <div className = "py-1 bg-danger w-full text-white text-center mb-1">{error}</div>}
                <div className="form-group">
                    <Field type="email" className="form-control margin-bottom"
                           aria-describedby="emailHelp" name="email" placeholder="Email address"/>
                </div>
                <div className="form-group">
                    <Field type="password" className="form-control margin-bottom"
                           placeholder="Password" name="password" />
                </div>
                <div className="form-group form-check mb-5">
                    <Field type="checkbox" className="form-check-input" name="keepSignedIn" id="exampleCheck1"/>
                    <label className="form-check-label pl-4 " htmlFor="exampleCheck1">
                        Keep me signed in until I sign out
                    </label>
                </div>

                <button type="submit" className="w-100 col-12 btn">Sign In</button>
                <div className="forgot-password mt-2">
                    <Link className="forgot-pass-text  font-weight-bold text-decoration-none"
                       target={"_blank"} to={"reset-password"}>
                        Forgot password ?
                    </Link>

                    <div className="form-separator my-4"/>

                </div>
            </Form>
        </Formik>
    )
}

export const FormSeparatorWithOr = ()=>{
    return(
        <div className="col-xl-10 col-sm-12 form-separator my-4">
            <span>or</span>
        </div>
    )
}