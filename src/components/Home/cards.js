import React from 'react'

import Card_N1 from "./Cards/Card_1";
import Card_N2 from "./Cards/Card_2";
import Card_N3 from "./Cards/Card_3";
import Card_N4 from "./Cards/Card_4";

class Cards extends React.Component{

    render(){
        return (
            <div className={'container my-5 card_section'}>
                <div className={'row'}>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <Card_N1/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <Card_N2/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <Card_N3/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <Card_N4/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards