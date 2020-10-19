import React from 'react'

class NoMatch extends React.Component{
    render(){
        return(
            <div className={'container-fluid'}><p className={'text-center'}>
                Unable to found what you looking for,Please try again
            </p></div>
        )
    }
}

export default NoMatch