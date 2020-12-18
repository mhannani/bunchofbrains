import React from "react";
import {NavLink} from "react-router-dom";
const Section8 = ()=>{
    return (
        <section className="card">
            <div className="card-header" id="headingEight">
                <h2 className="clearfix mb-0">
                    <span className="btn" data-toggle="collapse"
                       data-target="#collapseEight" aria-expanded="true"
                       aria-controls="collapseEight"><i
                        className="fa fa-chevron-circle-down"/>How can I get started with Bunchofbrains?</span>
                </h2>
            </div>
            <div id="collapseEight" className="collapse" aria-labelledby="headingEight"
                 data-parent="#accordionExample">
                <div className="card-body">
                    Click <NavLink to={"/sign-up"}>here</NavLink> to get started.
                </div>
            </div>
        </section>
    )
}
export default Section8