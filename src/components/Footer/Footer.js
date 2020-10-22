import React from 'react'
import Banner from './Banner'
import News from "./News";
class Footer extends React.Component {
    render() {
        return (
            <footer className="container-fluid text-center text-md-left page-footer pt-5 pb-2 px-5">
                    <News/>
                    <hr/>
                    <Banner/>
            </footer>
        )
    }
}

export default Footer