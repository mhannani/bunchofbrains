import React from 'react';
import {Link} from "react-router-dom";

class Banner extends React.Component{
    render(){
        return(
            <div className="row align-items-center banner">
                <div className="col-md-12 col-lg-8 ">
                    <ul className="list-unstyled list-inline terms">
                        <li className="list-inline-item">
                            <Link type="button" to={'/terms-and-conditions'} className="link-button btn-floating" >
                                <button
                                    type="button"
                                    className="link-button btn-floating btn-sm rgba-white-slight mx-1"
                                > Terms & Conditions
                                </button>
                            </Link>
                        </li>

                        <li className="list-inline-item">
                            <Link type="button" to={'/privacy'} className="link-button btn-floating" >
                                <button
                                    type="button"
                                    className="link-button btn-floating btn-sm rgba-white-slight mx-1"
                                > Privacy
                                </button>
                            </Link>
                        </li>

                        <li className="list-inline-item">
                            <Link type="button" to={'/policy-accessibility'} className="link-button btn-floating" >
                                <button
                                    type="button"
                                    className="link-button btn-floating btn-sm rgba-white-slight mx-1"
                                > PolicyAccessibility
                                </button>
                            </Link>
                        </li>

                        <li className="list-inline-item">
                            <Link type="button" to={'/statement'} className="link-button btn-floating" >
                                <button
                                    type="button"
                                    className="link-button btn-floating btn-sm rgba-white-slight mx-1"
                                > Statement
                                </button>
                            </Link>
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