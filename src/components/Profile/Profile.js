import React from "react";
import UserAvatar from 'react-user-avatar'
import { withAuthorization } from '../../Session';
import {withFirebase} from "../../Firebase";
import {useSelector} from "react-redux";

const Profile = ()=>{
    const authUser = useSelector(state => state.sessionState.authUser)
    const photoURL = useSelector(state => state.sessionState.photoURL)
    return(
                <div className={'user-profile container'}>
                    <div className={'row'}>
                        <div className="col">
                            <UserAvatar size="150" name='user avatar' src={photoURL}/>
                        </div>

                        <div className={'col mt-5'}>
                            <h5>Username: {authUser.username}</h5>
                            <h5>Email: {authUser.email}</h5>
                        </div>
                    </div>
                </div>

    )
}

const condition = authUser => !!authUser;
export default withFirebase(withAuthorization(condition)((Profile)));