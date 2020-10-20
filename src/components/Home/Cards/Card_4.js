import React from 'react'

class CardN3 extends React.Component {
    render() {
        return (
            <div className="card d-flex justify-content-between mx-sm-12 py-5 px-4">
                <h2 className={'text-center'}>Self esteem</h2>
                <div className={'row'}>
                    <div className="card-body description">
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content here,
                    </div>

                </div>
                <div className="ml-auto mr-auto row">
                    <button className="btn px-5 col-12 font-weight-bold text-dark"
                            onMouseDown={e => e.preventDefault()}
                    >
                        something
                    </button>
                </div>
            </div>
        )
    }
}

export default CardN3