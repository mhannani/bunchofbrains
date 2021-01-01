import {ReactComponent as FacebookIcon} from "../../../LogIn/AuthProviders/Facebook/FacebookIcon.svg";
import React from "react";
import {compose} from "recompose";
import {withRouter} from "react-router-dom";
import {withFirebase} from "../../../../Firebase";
import {connect} from "react-redux";

class FacebookSignUp extends React.Component{
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    onSubmit = event => {
        this.props.firebase
            .doSignInWithFacebook()
            .then(socialAuthUser => {
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
                this.props.applyClose();
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
        return(
            <form onSubmit={this.onSubmit} className={'col-md-10 col-sm-12 text-center'}>
                <button className="col-6 mb-2 btn social">
                    <FacebookIcon style={{float: "left"}}/>
                    <span>Facebook</span>
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
)(FacebookSignUp);