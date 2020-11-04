import React from 'react';
import {GoogleLogIn, FaceBookLogIn, AppleLogIn, LogInForm, FormSeparatorWithOr} from "./LogInEntyties"
const LogIn = (props)=>{
    const signInUpToggler = ()=>{
        props.changeIsLogIn(!props.isLogIn)
        console.log(props.isLogIn)
    }
    return(
        <div className={'container'}>
            <div className="welcomeMessage d-flex align-items-center">
                <div>
                    <h2 className={'text-white flex-wrap col-8'}>
                    Welcome Back To Bunchofbrains
                    </h2>
                    <div className={'ml-3 mt-4 borderSeparator'}/>
                    <h6 className={'text-white mt-4 flex-wrap col-8'}>
                        Sign in to continue to your account.
                    </h6>
                </div>
            </div>
            <div className={'LogInOnMdScreen'}>

                <div className="col-7 loginForm mx-auto d-flex align-items-center justify-content-center">

                    <div className="row mt-3 d-flex justify-content-center ">
                        <GoogleLogIn/>
                        <FaceBookLogIn/>
                        <AppleLogIn/>

                        <FormSeparatorWithOr/>
                        <LogInForm/>
                        <div className="sign-up text-center mt-2">
                            <p>Not a member yet ?
                                <button className=" link text-decoration-none text-center"
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


//
// <div className="col-md-7 col-sm-1 loginForm d-flex align-items-center justify-content-center">
//     <div className="row mt-3 d-flex justify-content-center">
//         <button className="col-9 mb-2 btn social">
//             <GoogleIcon style={{float:"left"}}/>
//             <span>Continue with Google</span>
//         </button>
//         <button className="col-9 mb-2 btn social">
//             <FacebookIcon style={{float:"left"}}/>
//             <span>Continue with Facebook</span>
//         </button>
//         <button className="col-9 btn social">
//             <AppleIcon  style={{float:"left"}}/>
//             <span>Continue with Apple</span>
//         </button>
//         <div className="col-9 form-separator my-3">
//             <span>or</span>
//         </div>
//         <form className="col-10">
//             <div className="form-group">
//                 <input type="email" className="form-control margin-bottom"
//                        aria-describedby="emailHelp" placeholder="Email address"/>
//             </div>
//             <div className="form-group">
//                 <input type="password" className="form-control margin-bottom"
//                        placeholder="Password"/>
//             </div>
//             <div className="form-group form-check mb-5">
//                 <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//                 <label className="form-check-label pl-4 " htmlFor="exampleCheck1">
//                     Keep me signed in until I sign out
//                 </label>
//             </div>
//             <button type="submit"  className="col-12 btn">Sign In</button>
//         </form>
//         <div className="forgot-password mt-2 text-center ">
//             <a className="forgot-pass-text  font-weight-bold text-decoration-none"
//                target="_blank" href="/reset-password">
//                 Forgot password ?
//             </a>
//             <div className="sign-up text-center mt-2">
//                 <span>Not a member yet ?</span>
//                 <button className="link text-decoration-none" onClick={()=>signInUpToggler()}>Sign Up</button>
//             </div>
//         </div>
//
//     </div>
//
// </div>