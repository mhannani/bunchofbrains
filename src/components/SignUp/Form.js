import React, {Component} from "react";
import {withFirebase} from "../../Firebase";
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import RippleEffectButton from "../chunks/RippleEffectButton";
import {connect} from "react-redux";

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
                this.props.applyClose();
                this.props.history.push("/profile");
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username: username,
                        email: authUser.user.email,
                        photoURL: 'https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-6-2-256.png',
                        roles: {},
                    });


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
            <form className="col-xl-11 col-sm-12 sign-up-using-email-form form-horizontal"  onSubmit={this.onSubmit}>
                <div className="form-group d-flex align-items-center justify-content-center">
                    <input type="text" className="form-control margin-bottom"
                           aria-describedby="username" value={username} onChange={this.onChange}
                           placeholder="Username" name="username"/>
                </div>

                <div className="form-group d-flex align-items-center justify-content-center">
                    <input type="email" className="form-control margin-bottom"
                           id="exampleInputEmail1" value={email} onChange={this.onChange}
                           aria-describedby="emailHelp"
                           placeholder="Email address" name="email"/>
                </div>

                <div className="form-group d-flex align-items-center justify-content-center">
                    <input type="password" className="form-control margin-bottom"
                           id="exampleInputPassword1" value={password} onChange={this.onChange}
                           placeholder="Password" name="password"/>
                           <br/>
                </div>

                <div className="requirement form-group ">
                    Password must be at least 6 characters long.
                </div>

                <div className="form-group d-flex align-items-center justify-content-center">
                    <RippleEffectButton type="submit" disabled={isInvalid} className="btn w-100 mx-auto col-12">Sign Up</RippleEffectButton>
                </div>

                {error && <p className={'mt-1 requirement text-danger'}>{error.message}</p>}
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onSetAuthUser: authUser =>
        dispatch({ type: 'AUTH_USER_SET', authUser }),
    onSetPhotoURL: photoURL =>
        dispatch({ type: 'PICTURE_URL_SET', photoURL }),
    applyClose: ()  =>
        dispatch({ type: 'IS_CLOSE'}),
});

export default compose(
    withRouter,
    withFirebase,
    connect(
        null,
        mapDispatchToProps,
    ),
)(FormSignUpWithEmailAndPassword);