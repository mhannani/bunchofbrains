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
            </div>

        )
    }
}
export default Home