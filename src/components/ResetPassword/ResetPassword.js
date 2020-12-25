import React from 'react';
import Div from "../chunks/Div";
import Button from "../chunks/Button";
import {withFirebase} from "../../Firebase";

const INITIAL_STATE = {
    email: '',
    error: null,
};

class ResetPassword extends React.Component{

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
        document.title = props.title || "";
    }

    onSubmit = event => {
        const { email } = this.state;

        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };


    render(){
        const { email, error } = this.state;
        const isInvalid = email === '';

        return(
            <Div className="container mb-5 col-xs-12 col-sm-10 col-md-6 col-lg-4 d-flex justify-content-center align-baseline reset-password">
                <div className={'row'}>
                    <div className={'col-sm-12'}>
                        We'll send password reset instructions to the email address
                        associated with your account.
                    </div>

                    <form className="col-sm-12 sign-up-using-email-form form-horizontal"  onSubmit={this.onSubmit}  >
                        <div className="form-group">
                            <label className={'font-weight-bold mt-4'} htmlFor="email">
                                Enter Email Address
                            </label>
                            <input type="email" className="form-control mt-2" onChange={this.onChange}
                                   id="exampleInputEmail1" name="email" value={this.state.email}
                                   aria-describedby="emailHelp" placeholder="Email address"/>
                        </div>
                        <Button type="submit" disabled={isInvalid} className="resetButton btn col-xl-5 col-lg-6 col-sm-5 col-12 col-4">
                            Reset password
                        </Button>
                        {error && <p className={'requirement mt-2 text-danger'}>{error.message}</p>}
                    </form>
                </div>
            </Div>
        )
}

}


export default  withFirebase(ResetPassword);