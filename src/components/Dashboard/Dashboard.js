import React from "react";
import withAuthorization from "../../Session/withAuthorization";
const Dashboard = ()=>{
    return(
        <div className={'dashboard'}>
            Dashboard page...
        </div>
    )
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Dashboard);