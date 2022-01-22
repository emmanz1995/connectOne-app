import React, { useState } from 'react';
import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import './postForm.scss';
import { useDispatch } from 'react-redux';
import { createPostAction } from '../../app/action/posts';
import { useNavigate } from 'react-router-dom';

const PostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialValues = {
        title: '',
        content: '',
        image: ''
    }
    const [formValues, setFormValues] = useState(initialValues);
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormValues({ ...formValues, [name]: value });
    }
    const handleEditorChange = (text) => {
        setFormValues({ ...formValues, content: text });
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const formData = {
            title: formValues.title,
            content: formValues.content,
            image: formValues.image
        }
        dispatch(createPostAction(formData)).then(() => {
            console.log('Success');
            navigate('/');
        })
    }
    return (
        <form className="post-form-container" onSubmit={handleSubmit}>
            <input className="text-field" type="text" placeholder="Your Title" value={formValues.title} onChange={handleChange} name="title" />
            <Editor
                className="text-editor"
                text={formValues.content}
                onChange={handleEditorChange}
                options={{ placeholder: true, toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'code', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'] } }}
            />
            <input className="text-field" type="text" placeholder="Add Image" value={formValues.image} onChange={handleChange} name="image" />
            <button type="submit" className="btn-add">Post</button>
        </form>
    );
}

export default PostForm;
