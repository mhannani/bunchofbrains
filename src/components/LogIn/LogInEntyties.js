import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import {withFirebase} from "../../Firebase";
import {compose} from 'recompose';
import {Link} from "react-router-dom";
// import RippleEffectButton from "../chunks/RippleEffectButton";
const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

export const LogInMessage = () => {
    return (
        <div className="col-xl-10 col-sm-12 mb-5">
            <p className={'text-center h5  font-weight-bold'}>Sign in to your bunchofbrains account</p>
        </div>
    )
}

class LogInForm extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {email, password} = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({...INITIAL_STATE});
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({error});
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {email, password, error} = this.state;
        const isInvalid = password === '' || email === '';
        return (
            <form className="col-md-11 col-sm-11 mx-auto" onSubmit={this.onSubmit}>
                <div className="form-group d-flex align-items-center justify-content-center">
                    <input type="email" className="form-control margin-bottom"
                           value={email} onChange={this.onChange} placeholder="Email address"
                           aria-describedby="emailHelp" name="email" />
                </div>
                <div className="form-group d-flex align-items-center justify-content-center">
                    <input type="password" className="form-control margin-bottom" value={password}
                           placeholder="Password" name="password" onChange={this.onChange}/>
                </div>

                {/*<RippleEffectButton>*/}
                    <button type="submit" disabled={isInvalid} className="d-flex align-items-center justify-content-center btn w-100 mx-auto col-12 ">Sign In</button>

                {/*</RippleEffectButton>*/}
                {error && <p className={'requirement text-danger mt-1'}>{error.message}</p>}
                <div className="forgot-password d-flex align-items-center justify-content-center btn w-100 mx-auto col-12 mt-2">
                    <Link className="forgot-pass-text  font-weight-bold text-decoration-none"
                          target={"_blank"} to={"reset-password"}>
                        Forgot password ?
                    </Link>
                    <br/>
                </div>
            </form>
        )
    }
}

export default LogInForm = compose(
    withRouter,
    withFirebase,
)(LogInForm);

export const FormSeparatorWithOr = () => {
    return (
        <div className="col-sm-10 form-separator my-4">
            <span>or</span>
        </div>
    )
}