import React from 'react'
import Banner from './Banner'
import NewsBanner from "./NewsBanner";
import FooterWrapper from '../chunks/FooterWrapper'
class Footer extends React.Component {
    render() {
        return (
            <FooterWrapper className="container-fluid text-center text-md-left page-footer pt-5 pb-2 px-5">
                    <NewsBanner/>
                    <hr/>
                    <Banner/>
            </FooterWrapper>
        )
    }
}

export default Footer