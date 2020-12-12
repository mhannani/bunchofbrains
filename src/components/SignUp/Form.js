import React from "react";

import { Formik, Field, Form } from "formik";
import {CreateNewUserUsingEmailAndPassword} from "../../actions/auth";

export const FormSignUpWithEmailAndPassword = ()=>{
    const signUpWithEmailAndPassword =  (values) => {
        const firstName = values.firstName;
        const lastName = values.lastName;
        const userName = firstName[0].concat('', lastName);
        const email = values.email;
        const password = values.password;
        CreateNewUserUsingEmailAndPassword(email, password, userName);
        console.log('Creating user ')
        console.log('done' )
    }
    return(
        <Formik
            initialValues={{ firstName: "", lastName: "", password: "",email: "" }}
            onSubmit={signUpWithEmailAndPassword}
        >

        <Form className="col-xl-10 col-sm-12 px-0 sign-up-using-email-form form-horizontal" >
            <div className="form-group">
                <div className={'row'}>
                    <div className={'col-6'}>
                        <Field type="text" className="form-control margin-bottom"
                               placeholder="First name" name="firstName"/>
                    </div>

                    <div className={'col-6'}>
                        <Field type="text" className="form-control margin-bottom"
                               placeholder="last name" name="lastName"/>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <Field type="email" className="form-control margin-bottom"
                       id="exampleInputEmail1"
                       aria-describedby="emailHelp"
                       placeholder="Email address" name="email"/>
            </div>

            <div className="form-group">
                <Field type="password" className="form-control margin-bottom"
                       id="exampleInputPassword1"
                       placeholder="Password" name="password"/>
            </div>

            <div className="form-group requirement">
                Password must be at least 8 characters long.
            </div>

            <button type="submit" className="btn w-100 col-12">Sign Up</button>
        </Form>
        </Formik>
    )
}