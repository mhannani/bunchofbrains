import React from 'react'
import Card from "../../chunks/Card";
import Button from "../../chunks/Button";
import {Link} from "react-router-dom";

class CardN3 extends React.Component{
    render() {
        return (
            <Card className="card d-flex justify-content-between mx-sm-12 py-5 px-4">
                <h2 className={'text-center text-nowrap text-break'}>Panic disorder</h2>
                <div className={'row'}>
                    <div className="card-body description">
                        Sometimes feeling anxious is quite normal. However,
                        a person can have panic disorder if they experience
                        panic attacks repeatedly and unpredictably.
                        People experiencing a panic attack experience a sense
                        of ...


                    </div>

                </div>
                <div className="ml-auto mr-auto row">
                    <Link to={"/all-troubles/panic-disorder"} className={'trouble_button'}>
                        <Button cardButton className="btn cardButton px-5 col-12 font-weight-bold"
                                onMouseDown={e => e.preventDefault()}
                        >
                            Explore more
                        </Button>
                    </Link>
                </div>
            </Card>
        )
    }
}
export default CardN3