import React from "react";
import { withAuthorization } from '../../Session';
import AuthUserContext from "../../Session/context";
const UserProfile = (props)=>{
    return(
        <AuthUserContext.Consumer>
            {authUser => (
                <div className={'user-profile'}>
                    <h5>Uid: {authUser.uid}</h5>
                    <h5>Uid: {authUser.email}</h5>
                </div>)
            }
        </AuthUserContext.Consumer>
    )
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(UserProfile);