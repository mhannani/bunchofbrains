import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withFirebase } from '../Firebase';

const withAuthorization = (condition) => Component => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if (!condition(authUser)) {
                        this.props.history.push("/log-in");
                    }
                    else{
                        console.log('authenticated')
                    }
                },
            );
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return condition(this.props.authUser) ? (
                <Component {...this.props} />
            ) : null;
        }
    }
    const mapStateToProps = state => ({
        authUser: state.sessionState.authUser,
    });

    return compose(
        withRouter,
        withFirebase,
        connect(mapStateToProps),
    )(WithAuthorization);
};

export default withAuthorization;