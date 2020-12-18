import React from 'react'
import Card from "../../chunks/Card";
import Button from "../../chunks/Button";
import {Link} from "react-router-dom";

class CardN3 extends React.Component {
    render() {
        return (
            <Card className="card d-flex justify-content-between mx-sm-12 py-5 px-4">
                <h2 className={'text-center'}>Self esteem</h2>
                <div className={'row'}>
                    <div className="card-body description">
                        Self-esteem is a psychological concept that refers
                        to the overall positive or negative judgment that
                        a person has of themselves.
                        Your self-esteem will depend on many parameters ...
                    </div>

                </div>
                <div className="ml-auto mr-auto row">
                    <Link to={"/all-troubles/self-esteem"} className={'trouble_button'}>
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