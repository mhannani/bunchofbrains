import React, {useState} from 'react';
import {GoogleSignUp, FaceBookSignUp, TwitterSignUp, FormSeparatorWithOr, AlreadyMember, Confidentiality} from "./SignUpEntyties";
import {FormSignUpWithEmailAndPassword} from './Form'
const SignUp = (props)=>{
    const [usingEmail, changeUsingEmail] = useState(false);

    return(
        <div className={'sign-up'}>
            <div className={'container row'}>
                <div className="welcomeMessage d-flex align-items-center">
                    <div>
                        <h5 className={'text-white text-center flex-wrap col-12'}>
                            Join Bunchofbrains for Free
                        </h5>
                        <div className={'ml-3 mt-3 borderSeparator'}/>
                        <h6 className={'text-white mt-3 flex-wrap col-8'}>
                            Master psychology. Master life.
                        </h6>
                    </div>
                </div>

                <div className="col-7 loginForm d-flex align-items-center justify-content-center">
                    <div className="row mt-3 d-flex justify-content-center">
                        <GoogleSignUp/>
                        <FaceBookSignUp/>
                        <TwitterSignUp/>
                        <FormSeparatorWithOr/>
                        {
                            !usingEmail ?
                                <div className="sign-up my-1">
                                    <button onClick={() => changeUsingEmail(!usingEmail)}
                                            className="link text-decoration-none">
                                        Sign Up Using Email
                                    </button>
                                </div>: <FormSignUpWithEmailAndPassword/>
                        }
                        <div className="forgot-password mt-2 text-center ">
                            <AlreadyMember isLogIn={props.isLogIn} changeIsLogIn ={props.changeIsLogIn}/>
                            <Confidentiality/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;