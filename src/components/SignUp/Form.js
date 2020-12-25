import React, {Component} from "react";
import {withFirebase} from "../../Firebase";
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';

const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    error: null,
};

class FormSignUpWithEmailAndPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        // eslint-disable-next-line no-unused-vars
        const {username, email, password} = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                this.setState({...INITIAL_STATE});
                this.props.history.push("/");
                console.log(authUser.uid, username)

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
        const {
            username,
            email,
            password,
            error,
        } = this.state;

        const isInvalid =
            password === '' ||
            email === '' ||
            username === '';


        return(
            <form className="col-xl-10 col-sm-12 px-0 sign-up-using-email-form form-horizontal"  onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control margin-bottom"
                           aria-describedby="username" value={username} onChange={this.onChange}
                           placeholder="Username" name="username"/>
                </div>

                <div className="form-group">
                    <input type="email" className="form-control margin-bottom"
                           id="exampleInputEmail1" value={email} onChange={this.onChange}
                           aria-describedby="emailHelp"
                           placeholder="Email address" name="email"/>
                </div>

                <div className="form-group">
                    <input type="password" className="form-control margin-bottom"
                           id="exampleInputPassword1" value={password} onChange={this.onChange}
                           placeholder="Password" name="password"/>
                </div>

                <div className="form-group requirement">
                    Password must be at least 6 characters long.
                </div>

                <button type="submit" disabled={isInvalid} className="btn w-100 col-12">Sign Up</button>
                {error && <p className={'mt-1 requirement text-danger'}>{error.message}</p>}
            </form>
        );
    }
}

export default compose(
    withFirebase,
    withRouter
)(FormSignUpWithEmailAndPassword);