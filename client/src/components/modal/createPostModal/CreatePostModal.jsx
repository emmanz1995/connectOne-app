import React, { useState } from 'react';
import Backdrop from '../backdrop/Backdrop';
import './createPostModal.scss';
import Close from '../../../assets/icons/cross.svg';
import { useDispatch } from 'react-redux';
import { onCreatePost } from '../../../app/action/posts';
import { motion } from 'framer-motion';

const CreatePostModal = ({ toggle }) => {
    const dispatch = useDispatch();
    const formValue = {
        title: '',
        content: '',
        image: ''
    }
    const [postValue, setPostValue] = useState(formValue);
    const [loading, setLoading] = useState(false);
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setPostValue({ ...postValue, [name]: value });
    }

    function handleCreatePost(evt) {
        evt.preventDefault();
        setLoading(true);
        const formData = {
            title: postValue?.title,
            content: postValue?.content,
            image: postValue?.image
        }
        dispatch(onCreatePost(formData)).then(() => {
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        })
    }

    return (
        <Backdrop toggle={toggle}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="modal" onClick={(evt) => evt.stopPropagation()}>
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
                        <form className="modal__form" onSubmit={handleCreatePost}>
                            <div className="control-form">
                                <label htmlFor="title">Title</label>
                                <input type="text" name="title" className="modal__input" value={postValue?.title} onChange={handleChange} />
                            </div>
                            <div className="control-form">
                                <label htmlFor="body">Whats on your mind</label>
                                <textarea name="content" id="" cols="30" rows="10" className="modal__textarea" value={postValue?.content} onChange={handleChange} />
                            </div>
                            <div className="control-form">
                                <label htmlFor="title">Upload Picture</label>
                                <input type="text" name="image" className="modal__input" value={postValue?.image} onChange={handleChange} />
                            </div>
                            <button className="modal__btn">{!loading ? 'Submit' : 'Loading...'}</button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </Backdrop>
    );
}

export default CreatePostModal;
