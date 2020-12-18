import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

class ScrollToTopRoute extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.path === this.props.location.pathname && this.props.location.pathname !== prevProps.location.pathname) {
            window.scroll({top: 0, left: 0, behavior: 'smooth' })
            console.log('scroll to top')
        }
        window.scrollTo(0, 0)
        console.log('did update')
    }

    render() {
        const { component: Component, ...rest } = this.props;
        return <Route {...rest} />;
        // return <Route {...rest} render={props => (<Component {...props} />)} />;
    }
}

export default withRouter(ScrollToTopRoute);