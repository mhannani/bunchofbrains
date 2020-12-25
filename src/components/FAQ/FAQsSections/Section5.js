import React from "react";

const Section5 = ()=>{
    return (
        <section className="card">
            <div className="card-header" id="headingFive">
                <h2 className="clearfix mb-0">
                    <span className="btn" data-toggle="collapse"
                       data-target="#collapseFive" aria-expanded="true"
                       aria-controls="collapseFive"><i
                        className="fa fa-chevron-circle-down"/>How will I communicate with the volunteer?</span>
                </h2>
            </div>
            <div id="collapseFive" className="collapse" aria-labelledby="headingFive"
                 data-parent="#accordionExample">
                <div className="card-body">
                    You can exchange in three ways:
                    <div className={'ml-5'}>
                        <ul>
                            <li>
                                Exchanging messages
                            </li>
                            <li>
                                Chatting live audio
                            </li>
                            <li>
                                Video conferencing
                            </li>
                        </ul>
                    </div>
                    You can use different ways at different times as you wish, based on your needs,
                    availability, and convenience.
                </div>
            </div>
        </section>
    )
}
export default Section5