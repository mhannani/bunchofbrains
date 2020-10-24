import React from 'react'
import Footer from '../components/Footer/Footer'
import Page_404 from "./chunks/Page_404";
const NoMatch = () =>{
        return(
            <div>
                <Page_404 className={'_404-item-message text-center'}>
                    <h1>Oops!</h1>
                    <h4 className={'mx-2'}>404 - PAGE NOT FOUND</h4>
                    <h6 className={'mx-5'}>The page you are looking for might have been removed had its name changed or is temporarily unavailable</h6>
                </Page_404>
                <Footer/>
            </div>
        )
}

export default NoMatch