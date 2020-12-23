import React from "react";
import PopUpContext from "./context";

const withPopUp = Component =>{
    class withPopUp extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isOpened: false,
            };
        }

        openPopUp(){
            this.setState({ isOpened: true })
        }
        closePopUp(){
            this.setState({ isOpened: false })
        }

        render(){
            return(
                <PopUpContext.Provider value={this.state.isOpened}>
                    <Component {...this.props} />
                </PopUpContext.Provider>
            )
        }
    }
    return withPopUp;

}

export default withPopUp;

