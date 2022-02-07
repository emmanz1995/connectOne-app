import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Banner from '../../components/banner/Banner';
import './home.scss';
import Comments from '../../components/Comments/Comments';
import { useDispatch } from 'react-redux';
import { deletePostsAction } from '../../app/action/posts';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

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
            console.log('Running!')
        })
    }, [])
    function handleDeletePost() {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => alert('Click Yes')
                },
                {
                    label: 'No',
                    onClick: () => false
                }
            ]
        })
        dispatch(deletePostsAction(slug)).then(() => {
            navigate('/dashboard');
        })
    }
    // confirmAlert({
    //     customUI: ({ onClose }) => {
    //         return (
    //             <div></div>
    //         )
    //     }
    // })

    return (
        <div>
            <Banner
                title={post?.title}
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto atque cum doloribus eos excepturi fuga, illum in ipsa iste magnam nam nesciunt, tempore vero."
            />
            <br/>
            <div className="post-content">
                <p style={{ textAlign: "justify" }}>{post?.content}</p>
            </div>
            <div className="post-action">
                <span className="action-icons">
                    <div>
                        <i className="fas fa-trash" onClick={handleDeletePost} />{' '}
                        <i className="far fa-edit" onClick={() => navigate(`/update-post/${slug}`)} />
                    </div>
                    <div>
                        This Rocks <i className="far fa-star" />
                    </div>
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
