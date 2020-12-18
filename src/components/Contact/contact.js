import React, {useEffect} from 'react'
import Button from "../chunks/Button";
import Div from "../chunks/Div";

const Contact = (props) => {
    useEffect(() => {
        document.title = props.title || "";
    })

    return (
        <Div className="container contact d-flex justify-content-center">

            <form className={'my-5'}>
                <div className={'row d-flex justify-content-center'}>
                    <div className="form-group col-xl-7 col-lg-8">
                        <h1>Get in touch</h1>
                        please fill out the quick form and we will be in touch with lightening speed.
                    </div>

                    <div className="form-group col-xl-7 col-lg-8">
                        <input type="text" className="form-control" placeholder="Name"/>
                    </div>

                    <div className="form-group col-xl-7 col-lg-8">
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                    </div>

                    <div className="form-group col-xl-7 col-lg-8">
                            <textarea className="h-auto form-control rounded-0" id="exampleFormControlTextarea1"
                                      rows="7"/>
                    </div>

                    <div className="form-group col-xl-7 col-lg-8">
                        <Button type="submit" className="rounded-0 text-white bg-success col-xl-12 btn font-weight-bold"
                                placeholder="Message">
                            Sign in
                        </Button>
                    </div>
                </div>


            </form>
        </Div>
    )
}
export default Contact