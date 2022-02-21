import React from 'react';
import Backdrop from '../backdrop/Backdrop';
import './createPostModal.scss';
import Close from '../../../assets/icons/cross.svg';

const CreatePostModal = ({ toggle }) => {
    return (
        <Backdrop toggle={toggle}>
            <div className="modal" onClick={(evt) => evt.stopPropagation()}>
                <div className="modal__header">
                    <span>
                        <h2>Create New Post</h2>
                    </span>
                    <span className="modal__close">
                        <img src={Close} alt="" width="600" height="400" className="modal__cross" onClick={toggle} />
                    </span>
                </div>
                <div className="modal__body">
                    <div className="modal__background">
                        <form className="modal__form">
                            <div className="control-form">
                                <label htmlFor="title">Title</label>
                                <input type="text" name="title" className="modal__input" />
                            </div>
                            <div className="control-form">
                                <label htmlFor="body">Whats on your mind</label>
                                <textarea name="body" id="" cols="30" rows="10" className="modal__textarea" />
                            </div>
                            <div className="control-form">
                                <label htmlFor="title">Upload Picture</label>
                                <input type="file" name="title" className="modal__input" />
                            </div>
                            <button className="modal__btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </Backdrop>
    );
}

export default CreatePostModal;
