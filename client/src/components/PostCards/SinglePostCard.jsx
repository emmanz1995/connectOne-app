import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SinglePostCard = () => {
    const [post, setPost] = useState({});
    const { REACT_APP_API_URL } = process.env;
    useEffect(() => {
        const getPost = (id) => {
            axios.get(`${REACT_APP_API_URL}/api/posts/getpost${id}`).then((response) => {
                setPost(response?.data);
            }).catch((error) => {
                console.log(error);
            })
        }
        getPost()
    })
    return (
        <div></div>
    );
}

export default SinglePostCard;