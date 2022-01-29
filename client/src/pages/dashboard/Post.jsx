import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Banner from "../../components/banner/Banner";
import './dashboard.scss';

function Post() {
    const [post, setPost] = useState({})
    const { REACT_APP_API_URL } = process.env;
    const { slug } = useParams();
    useEffect(() => {
        axios.get(`${REACT_APP_API_URL}/api/posts/getpost/${slug}`).then((success) => {
            setPost(success.data);
            console.log(success);
        })
    }, [])
    console.log(post)
    return (
        <div>
            <Banner
                title={post?.title}
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto atque cum doloribus eos excepturi fuga, illum in ipsa iste magnam nam nesciunt, tempore vero."
            />
            <div className="post-content">
                <p>{post?.content}</p>
            </div>
        </div>
    );
}

export default Post;
