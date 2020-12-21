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
                        <h2 className={'text-white flex-wrap col-10'}>
                            Join Bunchofbrains for Free
                        </h2>
                        <div className={'ml-3 mt-3 borderSeparator'}/>
                        <h6 className={'text-white mt-3 flex-wrap col-8'}>
                            Master psychology. Master life.
                        </h6>
                    </div>
                </div>

                <div className="col-6 loginForm d-flex align-items-center justify-content-center">
                    <div className="row mt-3 d-flex justify-content-center">
                        <GoogleSignUp/>
                        <FaceBookSignUp/>
                        <TwitterSignUp/>
                        <FormSeparatorWithOr/>
                        {
                            !usingEmail ?
                                <div className="sign-up">
                                    <button onClick={() => changeUsingEmail(!usingEmail)}
                                            className="link text-decoration-none">
                                        Sign Up Using Email
                                    </button>
                                </div>: <FormSignUpWithEmailAndPassword/>
                        }
                        <div className="col-xl-10 col-md-10 col-sm-8 form-separator mt-3"/>
                        <div className="forgot-password text-center ">
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