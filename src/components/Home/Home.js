import React from 'react'
import SlideShow from "./SlideShow";
import Cards from "./cards";

class Home extends React.Component{
    render(){
        return(
            <div>
                <SlideShow/>
                <Cards/>
            </div>

        )
    }
}
export default Home