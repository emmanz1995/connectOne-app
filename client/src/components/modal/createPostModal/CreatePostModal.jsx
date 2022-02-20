import React from 'react';
import Backdrop from '../backdrop/Backdrop';
import './createPostModal.scss';
import Close from '../../../assets/icons/cross.svg';

const CreatePostModal = ({ toggle }) => {
    return (
        <Backdrop toggle={toggle}>
            <div className="modal">
                <div className="modal__header">
                    <span>
                        <h2>Create New Post</h2>
                    </span>
                    <span className="modal__close">
                        <img src={Close} alt="" width="600" height="400" className="modal__cross" onClick={toggle} />
                    </span>
                </div>
            </div>
        </Backdrop>
    );
}

export default CreatePostModal;
