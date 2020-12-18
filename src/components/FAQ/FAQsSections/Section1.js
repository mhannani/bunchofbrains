import React from "react";

const Section1 = ()=>{

    return (
        <section className="card">
            <div className="card-header" id="headingOne">
                <h2 className="clearfix mb-0">
                    <span className="btn" data-toggle="collapse"
                       data-target="#collapseOne" aria-expanded="true"
                       aria-controls="collapseOne"><i
                        className="fa fa-chevron-circle-down"/>What is Bunchofbrains?</span>
                </h2>
            </div>
            <div id="collapseOne" className="collapse" aria-labelledby="headingOne"
                 data-parent="#accordionExample">
                <div className="card-body">
                    After you sign up, you will find numerous volunteers who match your
                    experience, and the type of issues you are dealing with for an audio
                    or video chat, so you can pick their minds about their successful
                    experience.
                    We have found that we are able to provide a successful match most of
                    the time.
                </div>
            </div>
        </section>
    )
}
export default Section1