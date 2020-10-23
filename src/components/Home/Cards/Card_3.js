import React from 'react'
import Card from "../../chunks/Card";
import Button from "../../chunks/Button";

class CardN3 extends React.Component{
    render() {
        return (
            <Card className="card d-flex justify-content-between mx-sm-12 py-5 px-4">
                <h2 className={'text-center text-nowrap text-break'}>Panic disorder</h2>
                <div className={'row'}>
                    <div className="card-body description">
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content here,
                    </div>

                </div>
                <div className="ml-auto mr-auto row">
                    <Button cardButton className="btn cardButton px-5 col-12 font-weight-bold"
                            onMouseDown={e => e.preventDefault()}
                    >
                        something
                    </Button>
                </div>
            </Card>
        )
    }
}
export default CardN3