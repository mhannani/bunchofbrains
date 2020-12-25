import React from 'react'
import {Link} from "react-router-dom";

import CardN1 from "./Cards/Card_1";
import CardN2 from "./Cards/Card_2";
import CardN3 from "./Cards/Card_3";
import CardN4 from "./Cards/Card_4";
// import Button from "../chunks/Button";

class Cards extends React.Component{

    render(){
        return (
            <div className={'container my-5 card_section'}>
                <div className={'row'}>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3 mb-2">
                        <CardN1/>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3 mb-2">
                        <CardN2/>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3 mb-2">
                        <CardN3/>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3 mb-2">
                        <CardN4/>
                    </div>
                </div>
                <div className={'container row mt-2'}>
                    <div className={'ml-0 mt-1'}>
                        {/*<Button className={'startFeeling btn mx-1 px-5 py-4 btn-block btn-lg'}>*/}
                        {/*    START FEELING GREAT*/}
                        {/*</Button>*/}

                        <Link to={"/all-troubles"} className={'seeAll'}>
                            <span className="btn-arrow">See all</span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards