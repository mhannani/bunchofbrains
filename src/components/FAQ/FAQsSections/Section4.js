import React from "react";

const Section4 = ()=>{
    return (
        <section className="card">
            <div className="card-header" id="headingFour">
                <h2 className="clearfix mb-0">
                    <span className="btn" data-toggle="collapse"
                       data-target="#collapseFour" aria-expanded="true"
                       aria-controls="collapseFour"><i
                        className="fa fa-chevron-circle-down"/>Can bunchofbrains substitute for traditional face-to-face therapy?</span>
                </h2>
            </div>
            <div id="collapseFour" className="collapse" aria-labelledby="headingFour"
                 data-parent="#accordionExample">
                <div className="card-body">
                    The volunteers who help through Bunchofbrains are people who had experience with a
                    specific mental health issue and found a way to overcome it or cope with it. However,
                    while the service may have benefits, it's not capable of substituting for traditional
                    face-to-face therapy in every case. Please note that your provider won't be able to
                    make any official diagnosis, to fulfill any court order or prescribe medication or
                    tells you to change your medication.
                    <span className="text-danger font-weight-bold">
                        Any advice you get from the volunteers must be discussed with
                        your doctor before taking any action.
                    </span>
                </div>
            </div>
        </section>
    )
}
export default Section4