import React from "react";
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {ReactComponent as GoogleIcon} from "./GoogleIcon.svg";
import {withFirebase} from "../../../../Firebase";


class GoogleLogIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    onSubmit = event => {
        this.props.firebase
            .doSignInWithGoogle()
            .then(socialAuthUser => {
                // store data to the redux store
                this.props.onSetPhotoURL(socialAuthUser.user.photoURL);
                return this.props.firebase
                    .user(socialAuthUser.user.uid)
                    .set({
                        username: socialAuthUser.user.displayName,
                        email: socialAuthUser.user.email,
                        photoURL: socialAuthUser.user.photoURL,
                        roles: {},
                    });
            })
            .then(() => {
                this.setState({ error: null });
                this.props.history.push("/profile");
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    render(){
        const { error } = this.state;
        return (
            <form onSubmit={this.onSubmit} className={'col-md-10 col-sm-12 text-center'}>
                <button className="col-6 mb-2 btn social">
                    <GoogleIcon style={{float: "left"}}/>
                    <span>Google</span>
                </button>
                {error && <p className={'requirement text-danger'}>{error.message}</p>}
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onSetAuthUser: authUser =>
        dispatch({ type: 'AUTH_USER_SET', authUser }),
    onSetPhotoURL: photoURL =>
        dispatch({ type: 'PICTURE_URL_SET', photoURL }),
});

export default compose(
    withRouter,
    withFirebase,
    connect(
        null,
        mapDispatchToProps,
    ),
)(GoogleLogIn);