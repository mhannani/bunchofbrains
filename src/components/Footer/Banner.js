import React from 'react';

class Banner extends React.Component{
    render(){
        return(
            <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8">
                    <ul className="list-unstyled list-inline terms">
                        <li className="list-inline-item">
                            <button
                                type="button"
                                className="link-button btn-floating btn-sm rgba-white-slight mx-1"
                            > Terms & ConditionsPrivacy
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
                    <p className="text-center text-md-left">© 2020 Depression, LLC. All Rights Reserved.
                        <a href="https://depression.com/">
                            <strong> Depression.com</strong>
                        </a>
                    </p>
                </div>
                <div className="col-md-5 col-lg-4 ml-lg-0">
                    <div className="text-center text-md-right">
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