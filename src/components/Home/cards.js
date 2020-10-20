import React from 'react'

import CardN1 from "./Cards/Card_1";
import CardN2 from "./Cards/Card_2";
import CardN3 from "./Cards/Card_3";
import CardN4 from "./Cards/Card_4";

class Cards extends React.Component{

    render(){
        return (
            <div className={'container my-5 card_section'}>
                <div className={'row'}>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <CardN1/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <CardN2/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <CardN3/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <CardN4/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards