import {ReactComponent as FacebookIcon} from "./FacebookIcon.svg";
import React from "react";
import {compose} from "recompose";
import {withRouter} from "react-router-dom";
import {withFirebase} from "../../../../Firebase";

class FaceBookLogIn extends React.Component {
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
                        roles: {},
                    });
            })
            .then(() => {
                this.setState({ error: null });
                this.props.history.push("/");
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
                    <FacebookIcon style={{float: "left"}}/>
                    <span>Facebook</span>
                </button>
                {error && <p className={'requirement text-danger'}>{error.message}</p>}
            </form>
        )
    }
}

export default compose(
    withRouter,
    withFirebase,
)(FaceBookLogIn);