import React from 'react';

import {withFirebase} from "../../Firebase";
import HeaderLink from "../chunks/HeaderLink";
import Button from "../chunks/Button";

const SignOutButton = ({ firebase }) => (
    <Button type="button" onClick={firebase.doSignOut} className={"ml-5 mx-5  bg-danger col-6  btn"}
            onMouseDown={e => e.preventDefault()} >
        <HeaderLink className={'excluded'}>Log out</HeaderLink>
    </Button>
);

export default withFirebase(SignOutButton);