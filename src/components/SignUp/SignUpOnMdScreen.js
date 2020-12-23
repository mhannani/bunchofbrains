import React, {useEffect} from 'react';
import {Animated} from "react-animated-css";
import {SignUpMessage, GoogleSignUp, FaceBookSignUp, TwitterSignUp, FormSeparatorWithOr,Confidentiality} from "./SignUpEntyties";
import FormSignUpWithEmailAndPassword from "./Form";
import {Link} from "react-router-dom";
const LogInOnMdScreen = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <Animated animationIn="bounceInRight" animationOut="fadeOut" animationInDuration={450} animationOutDuration={100} isVisible={true}>
            <div className={'container SignUpOnMdScreen d-flex  align-items-center justify-content-between'}>
                <div className="col-10 col-md-7 col-lg-5 col-xl-4 loginForm mx-auto">
                    <div className="row mt-3 d-flex justify-content-center ">
                        <SignUpMessage/>
                        <GoogleSignUp/>
                        <FaceBookSignUp/>
                        <TwitterSignUp/>
                        <FormSeparatorWithOr/>
                        <FormSignUpWithEmailAndPassword/>
                        <div className="forgot-password  mt-2 text-center ">
                            <div className="sign-up text-center mt-1">
                                <span>Already a member ?</span>
                                <Link to={"/log-in"} className={'trouble_button link text-decoration-none'}>
                                    Log In
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-10 col-md-10 col-sm-8 form-separator my-4"/>
                        <div className="forgot-password  mt-2 text-center ">
                            <Confidentiality/>
                        </div>
                    </div>
                </div>

                <div className={"d-none d-lg-flex col-2 col-md-5 col-lg-7 asideLogoOnSingUp"}>
                    On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de
                    distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem
                    Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distr
                    ibution de lettres plus ou moins normale, et en tout cas comparable avec celle du français sta
                   nçais sta
                    ndard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lor
                    em Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de
                    nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont a
                    pparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajoute
                    r de petits clins d'oeil, voire des phrases embarassantes).
                    On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de
                    distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem
                    Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distr


                </div>
            </div>
        </Animated>

    )
}
export default LogInOnMdScreen