import {ReactComponent as GoogleIcon} from "../../../LogIn/AuthProviders/Google/GoogleIcon.svg";
import React from "react";
import {compose} from "recompose";
import {withRouter} from "react-router-dom";
import {withFirebase} from "../../../../Firebase";

class GoogleSignUp extends React.Component{
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    onSubmit = event => {
        this.props.firebase
            .doSignInWithGoogle()
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
                    <GoogleIcon style={{float: "left"}}/>
                    <span>Google</span>
                </button>
                {error && <p className={'requirement text-danger'}>{error.message}</p>}
            </form>
        )
    }
}

export default compose(
    withRouter,
    withFirebase,
)(GoogleSignUp);
