import React from 'react'
import Card from "../../chunks/Card";
import Button from '../../chunks/Button'
import {Link} from "react-router-dom";
class CardN1 extends React.Component {
    render() {
        return (
            <Card className="card d-flex justify-content-between mx-sm-12  py-5 px-4">
                <h2 className={'text-center'}>Depression</h2>
                <div className={'row'}>
                    <div className="card-body description">
                        We can all experience emotions like anger, sadness,
                        or joy. Usually we feel that we are in control of our
                        emotions and we are able to deal with them on a daily basis.
                        A person with depression feels ...
                    </div>

                </div>
                <div className="ml-auto mr-auto row">
                    <Link to={"/all-troubles/depression"} className={'trouble_button'}>
                        <Button cardButton className="cardButton btn hvr-pulse px-5 col-12 font-weight-bold"
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

export default CardN1