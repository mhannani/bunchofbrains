import React from 'react'
import SlideShow from "./SlideShow";
import Cards from "./cards";
import Footer from "../Footer/Footer";

class Home extends React.Component{
    render(){
        return(
            <div>
                <SlideShow/>
                <Cards/>
                <Footer/>
            {/* FooterWrapper to be extracted and moved up on
            the component tree to render it anywhere on the App  */}
            </div>

        )
    }
}
export default Home