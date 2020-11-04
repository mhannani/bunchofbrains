import React from 'react';

class Banner extends React.Component{
    render(){
        return(
            <div className="row align-items-center banner">
                <div className="col-md-12 col-lg-8 ">
                    <ul className="list-unstyled list-inline terms">
                        <li className="list-inline-item">
                            <button
                                type="button"
                                className="link-button btn-floating btn-sm rgba-white-slight mx-1"
                            > Terms & Conditions
                            </button>
                        </li>
                        <li className="list-inline-item">
                            <button
                                type="button"
                                className="link-button btn-floating btn-sm rgba-white-slight mx-1"
                            > Privacy
                            </button>
                        </li>
                        <li className="list-inline-item">
                            <button
                                type="button"
                                className="link-button btn-floating btn-sm rgba-white-slight mx-1"
                            >  PolicyAccessibility
                            </button>
                        </li>
                        <li className="list-inline-item">
                            <button
                                type="button"
                                className="link-button btn-floating btn-sm rgba-white-slight mx-1"
                            > Statement
                            </button>
                        </li>
                    </ul>
                    <p className="text-center text-md-left">© 2020 Bunchofbrains, LLC. All Rights Reserved.
                        <a href="https://bunchofbrains.com/">
                            <strong>Bunchofbrains.com</strong>
                        </a>
                    </p>
                </div>

                <div className="col-md-12 col-lg-4 mx-lg-0">
                    <div className="text-center ">
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                                <button
                                    type="button"
                                    className="link-button btn-floating btn-sm rgba-white-slight mx-1"
                                >
                                    <i className="fa fa-facebook-f"/>
                                </button>
                            </li>
                            <li className="list-inline-item">
                                <button
                                    type="button"
                                    className="link-button btn-floating btn-sm rgba-white-slight mx-2"
                                >
                                    <i className="fa fa-twitter"/>
                                </button>
                            </li>
                            <li className="list-inline-item">
                                <button
                                    type="button"
                                    className="link-button btn-floating btn-sm rgba-white-slight mx-2"
                                >
                                    <i className="fa fa-instagram"/>
                                </button>
                            </li>
                            <li className="list-inline-item">
                                <button
                                    type="button"
                                    className="link-button btn-floating btn-sm rgba-white-slight mx-2"
                                >
                                    <i className="fa fa-linkedin"/>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;

//
// language: node_js
// node_js:
//     - "7"
// script:
//     - echo "Deploy!!"
// install:
//     - npm install -g firebase-tools
// after_success:
//     - firebase deploy --project $projectId --token $FIREBASE_TOKEN