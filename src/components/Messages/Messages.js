import React from "react";
import withAuthorization from "../../Session/withAuthorization";
import {withFirebase} from "../../Firebase";

const Messages = ()=>{
    return(
        <div className={'messages'}>
            Messages page...
        </div>
    )
}

const condition = authUser => !!authUser;

export default withFirebase(withAuthorization(condition)((Messages)));