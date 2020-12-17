import React from 'react';
import Logo from './brain.png';

class NewsBanner extends React.Component {
    render() {
        return (
            <div className="row text-md-left mt-3 pb-5 News">
                <div className="col-md-4 d-lg-inline-block d-none">
                    <div className={'row ml-0 d-flex align-items-center'}>
                        <img  src={Logo} width={'70px'}  height={'70px'} className={'d-xl-inline-block d-none'} alt="logo"/>
                        <h6 className="col-6 font-weight-bold h2 ">Bunchofbrains.com</h6>
                    </div>

                    <ul className="list-unstyled list-inline row mt-5 ml-1">
                        <li className="list-inline-item col-lg-3 col-md-4">
                            <button
                                type="button"
                                className="link-button btn-floating btn-sm rgba-white-slight text-white-50 "
                            > Home
                            </button>
                        </li>
                        <li className="list-inline-item col-lg-3 col-md-4">
                            <button
                                type="button"
                                className="link-button btn-floating btn-sm rgba-white-slight text-white-50 "
                            > Advice
                            </button>
                        </li>
                        <li className="list-inline-item col-lg-3 col-md-4">
                            <button
                                type="button"
                                className="link-button btn-floating btn-sm rgba-white-slight text-white-50 "
                            > FAQ
                            </button>
                        </li>
                        <li className="list-inline-item col-lg-3 col-md-4">
                            <button
                                type="button"
                                className="link-button btn-floating btn-sm rgba-white-slight text-white-50 "
                            > About
                            </button>
                        </li>
                        <li className="list-inline-item col-lg-3 col-md-4">
                            <button
                                type="button"
                                className="link-button btn-floating btn-sm rgba-white-slight text-white-50 "
                            > Contact
                            </button>
                        </li>
                        <li className="list-inline-item col-lg-3 col-md-4">
                            <button
                                type="button"
                                className="link-button btn-floating btn-sm rgba-white-slight text-white-50 "
                            > Support
                            </button>
                        </li>
                    </ul>
                </div>
                <div className={'col-md-4 d-lg-inline-block d-none'}>
                    <p>
                        <i className="fa fa-home mr-3"/>
                        XXXXX, XX XXXX, XX
                    </p>

                    <p>
                        <i className="fa fa-envelope mr-3"/>
                        brainsbunchof@gmail.com
                    </p>
                    <p>
                        <i className="fa fa-phone mr-3"/>
                        + 01 234 567 88
                    </p>
                    <p>
                        <i className="fa fa-print mr-3"/>
                        + 01 234 567 89
                    </p>
                </div>

                <div className="col-sm-12 col-md-8 col-lg-4 row  mx-auto">
                    <div className={'col-md-12 text-center'}><p>Get the freshest Bunchofbrains news</p></div>
                    <div className={'col-md-12 float-right'}>
                        <form className="form-inline row-cols-sm-3">

                            <input type="email" className="bg-transparent form-control mb-2 col-sm-12 col-lg-8"
                                   id="inlineFormInputName2"
                                   placeholder="Ex. name@gmail.com"/>
                            <button type="submit" className="btn btn-primary mb-2 col-sm-12 col-lg-4 submitNewsLetter"
                                    onMouseDown={e => e.preventDefault()}
                            >Submit
                            </button>
                        </form>
                    </div>

                    <div className={'col-10'}>
                        <div className="checkbox">
                            <input type="checkbox" value=""/>
                            <label>
                                By checking the box, you agree that you are at least 16 years of age.
                            </label>
                        </div>
                    </div>

                </div>

            </div>

        )
    }
}

export default NewsBanner