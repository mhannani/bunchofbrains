import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import {withFirebase} from "../../Firebase";
import {compose} from 'recompose';

import {Link} from "react-router-dom";
// import {auth} from "../../firebase/firebase";


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
            <form className="col-sm-10 px-0" onSubmit={this.onSubmit}>
                {/*{error !== null && <div className="py-1 bg-danger w-full text-white text-center mb-1">{error}</div>}*/}
                <div className="form-group">
                    <input type="email" className="form-control margin-bottom"
                           value={email} onChange={this.onChange} placeholder="Email address"
                           aria-describedby="emailHelp" name="email" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control margin-bottom" value={password}
                           placeholder="Password" name="password" onChange={this.onChange}/>
                </div>


                <button type="submit" disabled={isInvalid} className="w-100 col-12 btn">Sign In</button>
                {error && <p className={'requirement text-danger mt-1'}>{error.message}</p>}
                <div className="forgot-password mt-2">
                    <Link className="forgot-pass-text  font-weight-bold text-decoration-none"
                          target={"_blank"} to={"reset-password"}>
                        Forgot password ?
                    </Link>

                    <div className="form-separator my-4"/>
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
        <div className="col-sm-10  form-separator my-4">
            <span>or</span>
        </div>
    )
}