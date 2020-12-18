import React from "react";

const Section6 = ()=>{
    return (
        <section className="card">
            <div className="card-header" id="headingSix">
                <h2 className="clearfix mb-0">
                    <span className="btn" data-toggle="collapse"
                       data-target="#collapseSix" aria-expanded="true"
                       aria-controls="collapseSix"><i
                        className="fa fa-chevron-circle-down"/>What is the role of Bunchofbrains.com?</span>
                </h2>
            </div>
            <div id="collapseSix" className="collapse" aria-labelledby="headingSix"
                 data-parent="#accordionExample">
                <div className="card-body">
                    We are totally obsessed about securing your privacy and confidentiality.
                    We have built a state-of-the-art technology, operation, and infrastructure with
                    one thing in mind: protecting your privacy and safeguarding the information you provide.
                    Our privacy and confidentiality standards are by far more advanced than what is required
                    by law or regulations, so you can feel safe and comfortable.
                    <div className={'ml-5 '}>
                        <ul>
                            <li>
                                You don't need to identify yourself
                            </li>
                            <li>
                                Everything you tell is protected by strict federal and state laws.
                            </li>
                            <li>
                                We don't cooperate or work with any insurance companies or employers,
                                so nothing needs to be shared, reported or filed with them.
                            </li>
                            <li>
                                You can always click the "Shred" button next to each message that you've
                                sent
                                so it will no longer show in your account.
                            </li>
                            <li>
                                All the messages between you and the volunteer are secured and encrypted
                            </li>
                            <li>
                                Our browsing encryption system (SSL) follows modern best practices,
                                providing
                                world class online security and encryption.
                            </li>
                            <li>
                                Our databases are encrypted and scrambled so they essentially become useless
                                in the very unlikely event that they are being stolen or inappropriately
                                used.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section6