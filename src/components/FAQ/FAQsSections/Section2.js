import React from "react";

const Section2 = ()=>{
    return (
        <section className="card">
            <div className="card-header" id="headingTwo">
                <h2 className="clearfix mb-0">
                    <span className="btn" data-toggle="collapse"
                       data-target="#collapseTwo" aria-expanded="true"
                       aria-controls="collapseTwo"><i
                        className="fa fa-chevron-circle-down"/>Who will be helping me?</span>
                </h2>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                 data-parent="#accordionExample">
                <div className="card-body">
                    Bunchofbrains is the largest online mental health community platform
                    worldwide. We change the way people get help with facing life's challenges
                    by providing convenient, discreet and easy access to people who have
                    overcome their mental health issues. Bunchofbrains connects people who
                    still struggle with their psychological wellbeing to others who had
                    experimented the same issues and found a successful way to reestablish
                    their normal lives available anytime, anywhere, through a computer,
                    tablet or smartphone.
                </div>
            </div>
        </section>
    )
}
export default Section2