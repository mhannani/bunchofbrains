import React from 'react';
import Typical from 'react-typical'
import LogInForm, {FormSeparatorWithOr} from "./LogInEntyties"
import GoogleLogIn from "./AuthProviders/Google/GoogleLogIn";
import FacebookLogIn from "./AuthProviders/Facebook/FacebookLogin";
import TwitterLogIn from "./AuthProviders/Twitter/TwitterLogIn";


const LogIn = (props)=>{
    const signInUpToggler = ()=>{
        props.changeIsLogIn(!props.isLogIn)
        console.log(props.isLogIn)
    }

    return(
        <div className={'container'}>
            <div className="welcomeMessage d-flex align-items-center">
                <div>
                    <h2 className={'text-white flex-wrap col-9'}>
                        Welcome Back To Bunchofbrains
                    </h2>
                    <div className={'ml-3 mt-3 borderSeparator'}/>
                    <h6 className={'text-white mt-3 flex-wrap col-8'}>
                        <Typical
                            steps={['Master life.', 1500, 'Master psychology.', 500]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </h6>
                </div>
            </div>


            <div className={'LogInOnMdScreen'}>
                <div className="col-6 loginForm mx-auto d-flex align-items-center justify-content-center">
                    <div className="row mt-3 d-flex justify-content-center ">
                        <GoogleLogIn/>
                        <FacebookLogIn/>
                        <TwitterLogIn/>
                        <FormSeparatorWithOr/>
                        <LogInForm/>
                        <div className="sign-up text-center mt-2">
                            <p>Not a member yet ?
                                <button className="link text-decoration-none text-center"
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