import React, { useState, useEffect } from 'react';
import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import './postForm.scss';
import { useDispatch } from 'react-redux';
import { createPostAction, updatePostsAction } from '../../app/action/posts';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { slug } = useParams();
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
    useEffect(() => {
        axios.get(`http://localhost:5001/api/posts/getpost/${slug}`).then((response) => {
            setFormValues(response.data)
        }).catch((error) => console.log(error));
    }, [])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const formData = {
            title: formValues.title,
            content: formValues.content,
            image: formValues.image
        }
        if (slug) {
            dispatch(updatePostsAction(slug, formData)).then(() => {
                navigate('/');
            })
        } else {
            dispatch(createPostAction(formData)).then(() => {
                console.log('Success');
                navigate('/');
            })
        }
    }
    return (
        <form className="postform" onSubmit={handleSubmit}>
            <input className="postform__input" type="text" placeholder="Your Title" value={formValues.title} onChange={handleChange} name="title" />
            <Editor
                className="postform__textarea"
                text={formValues.content}
                onChange={handleEditorChange}
                options={{ placeholder: false, toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'code', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'] } }}
            />
            <input className="postform__input" type="text" placeholder="Add Image" value={formValues.image} onChange={handleChange} name="image" />
            <button type="submit" className="postform__btn">{slug ? 'Update post' : 'Post'}</button>
        </form>
    );
}

export default PostForm;
