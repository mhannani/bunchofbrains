import React from 'react';
import Modal from 'react-modal';
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SingUp";
import {ReactComponent as CloseButton} from './logo.svg';
// Modal.setAppElement('#root');
const PopUpModal = (props) => {
    return (
        <Modal isOpen={props.isVisible }
               contentLabel={'Selected Option'}
               ariaHideApp={false}
               closeTimeoutMS={100}
               onRequestClose = {props.closeModal}
               shouldCloseOnOverlayClick={true}
               className="Modal"
        >

            <button className={'close'} onClick={props.closeModal}>
                <CloseButton className={'closeLogo'}/>
            </button>
            {props.isLogIn ? <LogIn/> : <SignUp/>}
        </Modal>
    )
}

export default PopUpModal;