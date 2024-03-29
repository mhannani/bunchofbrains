import React from "react";
import { connect } from 'react-redux';
import { compose } from 'recompose';
import {withFirebase} from "../Firebase";

const withAuthentication = Component =>{
    class withAuthentication extends React.Component {
        constructor(props) {
            super(props);

            this.props.onSetAuthUser(
                JSON.parse(localStorage.getItem('authUser')),
            );
            this.props.onSetPhotoURL(
                JSON.parse(localStorage.getItem('photoURL')),
            );
        }

        componentDidMount() {
            this.listener = this.props.firebase.onAuthUserListener(
                authUser => {
                    localStorage.setItem('authUser', JSON.stringify(authUser));
                    this.props.onSetAuthUser(authUser);
                    localStorage.setItem('photoURL', JSON.stringify(authUser.photoURL));
                    this.props.onSetPhotoURL(authUser.photoURL);
                },
                () => {
                    localStorage.removeItem('authUser');
                    localStorage.removeItem('photoURL');
                    this.props.onSetAuthUser(null);
                },
            );
        }
        componentWillUnmount() {
            this.listener();
        }

        render(){
            return <Component {...this.props} />
        }

    }

    const mapDispatchToProps = dispatch => ({
        onSetAuthUser: authUser =>
            dispatch({ type: 'AUTH_USER_SET', authUser }),
        onSetPhotoURL: photoURL =>
            dispatch({ type: 'PICTURE_URL_SET', photoURL }),
    });

    return compose(
        withFirebase,
        connect(
            null,
            mapDispatchToProps,
        ),
    )(withAuthentication);
}

export default withAuthentication;