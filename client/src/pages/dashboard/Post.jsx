import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Banner from '../../components/banner/Banner';
import './dashboard.scss';
import Comments from '../../components/Comments/Comments';
import { useDispatch } from 'react-redux';
import { deletePostsAction } from '../../app/action/posts';
import { useNavigate } from 'react-router-dom';

function Post() {
    const [post, setPost] = useState({})
    const { REACT_APP_API_URL } = process.env;
    const { slug } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`${REACT_APP_API_URL}/api/posts/getpost/${slug}`).then((success) => {
            setPost(success.data);
            console.log(success.data);
        })
    }, [])
    function handleDeletePost() {
        dispatch(deletePostsAction(slug)).then(() => {
            navigate('/dashboard');
        })
    }
    return (
        <div>
            <Banner
                title={post?.title}
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto atque cum doloribus eos excepturi fuga, illum in ipsa iste magnam nam nesciunt, tempore vero."
            />
            <br/>
            <div className="post-content">
                <p>{post?.content}</p>
            </div>
            <div className="post-action">
                <span>
                    <i className="fas fa-trash" onClick={handleDeletePost} />{' '}<i className="far fa-edit" onClick={() => navigate(`/update-post/${slug}`)} />{' '}<i className="far fa-star"></i>
                </span>
            </div>
            <div className="comment-content">
                <h3>Comments</h3>
                <hr />
                <Comments postId={post?._id} />
            </div>
        </div>
    );
}

export default Post;
