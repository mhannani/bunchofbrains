import React from "react";
import {useSpring, animated} from 'react-spring'
const Layout = ()=>{

    const props = useSpring({
        from:{
            fontSize: '1em',
            color:"gray"
        },
        to:{
            fontSize: '2.2em',
            color:"black",
        },
        config:{
            duration:250
        }
        })
        return(
            <animated.div style={props}>
                <div className="jumbotron d-flex align-items-center min-vh-100">
                    <div className={'container text-center'}>
                        <h2 className={'layout'}>PLEASE SPECIFY THE EXACT LAYOUT FOR THE WEBSITE</h2>
                    </div>
                </div>
            </animated.div>

        )
}
export default Layout
