import React from 'react'
import Banner from './Banner'
class News extends React.Component {
    render() {
        return (
            <footer className="bg-danger page-footer font-small mdb-color pt-4">
                <div className="container text-center text-md-left">
                    <div className="row text-center text-md-left mt-3 pb-3">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Depression</h6>
                            <p> It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                                The point of using Lorem Ipsum is that it has a more-or-less
                                normal distribution of letters, as opposed to using 'Content here,
                                content here', making it look like readable English. Many desktop

                            </p>
                        </div>
                        <hr className="w-100 clearfix d-md-none"/>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Section 1</h6>
                            <p>
                                <button
                                    type="button"
                                    className="link-button btn-floating btn-sm rgba-white-slight mx-1"
                                > option 1
                                </button>
                            </p>
                            <p>
                                <button
                                    type="button"
                                    className="link-button btn-floating btn-sm rgba-white-slight mx-1"
                                > option 1
                                </button>
                            </p>
                            <p>
                                <button
                                    type="button"
                                    className="link-button btn-floating btn-sm rgba-white-slight mx-1"
                                > option 1
                                </button>
                            </p>

                            <p>
                                <button
                                    type="button"
                                    className="link-button btn-floating btn-sm rgba-white-slight mx-1"
                                > option 1
                                </button>
                            </p>
                        </div>

                        <hr className="w-100 clearfix d-md-none"/>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                            <p>
                                <button
                                    type="button"
                                    className="link-button btn-floating btn-sm rgba-white-slight mx-1"
                                > option 1
                                </button>
                            </p>
                            <p>
                                <button
                                    type="button"
                                    className="link-button btn-floating btn-sm rgba-white-slight mx-1"
                                > option 1
                                </button>
                            </p>
                            <p>
                                <button
                                    type="button"
                                    className="link-button btn-floating btn-sm rgba-white-slight mx-1"
                                > option 1
                                </button>
                            </p>
                            <p>
                                <button
                                    type="button"
                                    className="link-button btn-floating btn-sm rgba-white-slight mx-1"
                                > Help
                                </button>
                            </p>
                        </div>
                        <hr className="w-100  d-md-none"/>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p>
                                <i className="fa fa-home mr-3"/> XXXXX, XX XXXX, XX</p>
                            <p>
                                <i className="fa fa-envelope mr-3"/> X@gmail.com</p>
                            <p>
                                <i className="fa fa-phone mr-3"/> + 01 234 567 88</p>
                            <p>
                                <i className="fa fa-print mr-3"/> + 01 234 567 89</p>
                        </div>

                    </div>
                    <hr/>
                    <Banner/>
                </div>
            </footer>
        )
    }
}

export default News