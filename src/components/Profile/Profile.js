import React from "react";
import UserAvatar from 'react-user-avatar'
import { withAuthorization } from '../../Session';
import {withFirebase} from "../../Firebase";
import AuthUserContext from "../../Session/context";
const Profile = (props)=>{
    return(
        <AuthUserContext.Consumer>

            {authUser => (
                <div className={'user-profile container'}>
                    <div className={'row'}>
                        <div className="col">
                            <UserAvatar size="200" name='user avatar' src={props.firebase.auth.currentUser.photoURL}/>
                        </div>

                        <div className={'col'}>
                            <h2>username: {authUser.username}</h2>
                            <h5>Uid: {authUser.email}</h5>
                        </div>
                    </div>
                </div>

            )
            }
        </AuthUserContext.Consumer>
    )
}

const condition = authUser => !!authUser;

export default withFirebase(withAuthorization(condition)((Profile)));