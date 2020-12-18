import React from "react";

const Section3 = ()=>{
    return (
        <section className="card">
            <div className="card-header" id="headingThree">
                <h2 className="clearfix mb-0">
                    <span className="btn" data-toggle="collapse"
                       data-target="#collapseThree" aria-expanded="true"
                       aria-controls="collapseThree"><i
                        className="fa fa-chevron-circle-down"/>Is Bunchofbrains right for me?</span>
                </h2>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                 data-parent="#accordionExample">
                <div className="card-body">
                    Bunchofbrains may be right for you if you're looking to improve
                    the quality of your life. Whenever there is anything that interferes
                    with your happiness or prevents you from achieving your goals,
                    we may be able to help. We also have various volunteers who had
                    experienced a specific issues, such as stress, anxiety, relationships,
                    parenting, depression, addictions, eating, sleeping, trauma, anger,
                    family conflicts, LGBT matters, grief, religion, self-esteem and more.
                    <p>
                        Bunchofbrains IS NOT THE RIGHT SOLUTION for you if any
                        of the following is true :
                    </p>

                    <div className={'ml-5'}>

                        <ul>
                            <li>
                                You have thoughts of hurting yourself or others
                            </li>
                            <li>
                                You are a minor or you are under the care of a legal guardian
                            </li>
                            <li>
                                You are in an urgent crisis or an emergency situation
                            </li>
                            <li>
                                You have been diagnosed with a severe mental illness, or if you have
                                been advised to be in psychological supervision or psychiatric care
                            </li>
                            <li>
                                You were required to undergo therapy or counseling either by a court
                                order or by any other authority
                            </li>
                            <li>
                                You do not have a device that can connect to the Internet or you
                                do not have a reliable Internet connection
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section3