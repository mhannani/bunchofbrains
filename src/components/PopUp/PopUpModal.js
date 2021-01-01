import React from 'react';
import Modal from 'react-modal';
import {useDispatch, useSelector} from "react-redux";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";
import {ReactComponent as CloseButton} from './logo.svg';

const PopUpModal = (props) => {
    const isOpen = useSelector(state => state.popUpState.isOpen);
    const isLogIn = useSelector(state => state.popUpState.isLogIn)
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch({type: "IS_CLOSE"})
    }

    return (

        <Modal isOpen={isOpen}
               contentLabel={'Selected Option'}
               ariaHideApp={false}
               closeTimeoutMS={100}
               onRequestClose={closeModal}
               shouldCloseOnOverlayClick={true}
               className="Modal"
        >

            <button className={'close'} onClick={closeModal}>
                <CloseButton className={'closeLogo'}/>
            </button>
            {isLogIn ?
                <LogIn isLogIn={props.isLogIn} changeIsLogIn={props.changeIsLogIn}/> :
                <SignUp isLogIn={props.isLogIn} changeIsLogIn={props.changeIsLogIn}/>}
        </Modal>
    )
}

export default PopUpModal;