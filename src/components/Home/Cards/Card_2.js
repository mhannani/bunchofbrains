import React from 'react'
import Card from "../../chunks/Card";
import Button from "../../chunks/Button";
import {Link} from "react-router-dom";

class CardN2 extends React.Component{
    render() {
        return (
            <Card className="card d-flex justify-content-between mx-sm-12 py-5 px-4">
                <h2 className={'text-center'}>Anxiety</h2>
                <div className={'row'}>
                    <div className="card-body description">
                        Everyone experiences anxiety at one time or
                        another. Feeling a little anxious is perfectly normal.
                        Anxiety protects us and can help us cope with a worrying
                        or perhaps dangerous situation ...

                    </div>

                </div>
                <div className="ml-auto mr-auto row">
                    <Link to={"/all-troubles/anxiety"} className={'trouble_button'}>
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
export default CardN2