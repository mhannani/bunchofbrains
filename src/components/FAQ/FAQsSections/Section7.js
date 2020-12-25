import React from "react";

const Section7 = ()=>{
    return (
        <section className="card">
            <div className="card-header" id="headingSeven">
                <h2 className="clearfix mb-0">
                    <span className="btn" data-toggle="collapse"
                       data-target="#collapseSeven" aria-expanded="true"
                       aria-controls="collapseSeven"><i
                        className="fa fa-chevron-circle-down"/>How is my privacy protected?</span>
                </h2>
            </div>
            <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven"
                 data-parent="#accordionExample">
                <div className="card-body">
                    We are totally obsessed about securing your privacy and confidentiality.
                    We have built a state-of-the-art technology, operation, and infrastructure with
                    one thing in mind: protecting your privacy and safeguarding the information you provide.
                    Our privacy and confidentiality standards are by far more advanced than what is required
                    by law or regulations, so you can feel safe and comfortable.
                    <p>
                        The service is provided by independent volunteers who exchange directly with you.
                        These providers are not employees of Bunchofbrains and the site doesn't oversee them
                        professionally. Our mission is to build, maintain, and support a platform that lets
                        users and volunteers communicate effectively, and to facilitate this channel so they
                        can get the most out of their interaction.
                        <span className="text-danger font-weight-bold">
                            Any advice you get from the volunteers must be discussed with
                            your doctor before taking any action.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Section7