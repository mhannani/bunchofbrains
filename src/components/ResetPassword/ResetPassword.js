import React from 'react';
import Div from "../chunks/Div";
import Button from "../chunks/Button";
const  ResetPassword = ()=>{
    return(
        <Div className="container mb-5 col-xs-12 col-sm-10 col-md-6 col-lg-4 d-flex justify-content-center align-baseline reset-password">
            <div className={'row'}>
                <div className={'col-sm-12'}>
                    We'll send password reset instructions to the email address
                    associated with your account.
                </div>

                <form className="col-sm-12 sign-up-using-email-form form-horizontal">
                    <div className="form-group">
                        <label className={'font-weight-bold mt-4'} htmlFor="email">
                            Enter Email Address
                        </label>
                        <input type="email" className="form-control mt-2"
                               id="exampleInputEmail1"
                               aria-describedby="emailHelp" placeholder="Email address"/>
                    </div>
                    <Button type="submit"  className="resetButton btn col-xl-5 col-lg-6 col-sm-5 col-12 col-4">
                        Reset password
                    </Button>
                </form>
            </div>
        </Div>
    )
}
export default ResetPassword