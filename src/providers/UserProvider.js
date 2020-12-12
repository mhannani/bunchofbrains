import React, { Component, createContext } from "react";
import {auth}  from "../firebase/firebase";


export const UserContext = createContext({ user: null });

class UserProvider extends Component {
    state = {
        user: null
    };

    componentDidMount = async () => {
        auth.onAuthStateChanged(async userAuth => {
            // const user = await generateUserDocument(userAuth);
            alert('auth changer')
            const user = 'hannani'
            this.setState({ user });
        });

    };

    render() {
        const { user } = this.state;

        return (
            <UserContext.Provider value={user}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;