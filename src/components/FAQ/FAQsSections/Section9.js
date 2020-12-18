import React from "react";
import {NavLink} from "react-router-dom";
const Section9 = ()=>{
    return (
        <section className="card">
            <div className="card-header" id="headingNine">
                <h2 className="clearfix mb-0">
                    <span className="btn" data-toggle="collapse"
                       data-target="#collapseNine" aria-expanded="true"
                       aria-controls="collapseNine"><i
                        className="fa fa-chevron-circle-down"/>I'm a volunteer. How can I provide help using Bunchofbrains?</span>
                </h2>
            </div>
            <div id="collapseNine" className="collapse" aria-labelledby="headingNine"
                 data-parent="#accordionExample">
                <div className="card-body">
                    Please start the application process by clicking <NavLink to={"/log-in"}>here</NavLink>.
                </div>
            </div>
        </section>
    )
}
export default Section9