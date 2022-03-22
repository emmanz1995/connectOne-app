import React, { useEffect, useState} from 'react';
import axios from 'axios';
import './post.scss';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Bin from '../../assets/icons/trash.svg'
import { useSelector, useDispatch } from 'react-redux';
import { getComments } from '../../app/action/comments';
import Layout from "../../components/Layout/Layout";

function Post() {
    const dispatch = useDispatch();
    const comments = useSelector(state => state?.commentsReducer)
    const [post, setPost] = useState({});
    const { id } = useParams();
    const { REACT_APP_API_URL } = process.env;
    useEffect(() => {
        const getPost = () => {
            axios.get(`${REACT_APP_API_URL}/api/posts/getpost/${id}`).then((response) => {
                setPost(response?.data);
            }).catch((error) => {
                console.log(error);
            })
        }
        getPost()
    }, [])
    useEffect(() => {
        dispatch(getComments(post?._id))
    }, [dispatch])
    return (
        <Layout>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <div className="post">
                    <div className="post__rightSide">
                        <img src={post?.image} alt="" width="600" height="400" className="icon" />
                    </div>
                    <div className="post__leftSide">
                        <div className="comments">
                            <div className="comments__header">
                                <div className="user-container">
                                    <div className="user-icon-container">
                                        <img src={post?.postedBy?.avatar} alt="" className="user-icon" />
                                    </div>
                                    <h3>{post?.postedBy?.username}</h3>
                                </div>
                                <div className="bin-container">
                                    <img src={Bin} alt="" className="icon" />
                                </div>
                            </div>
                            <div className="comments-section">
                                <div>
                                    {comments?.length > 0 ? comments?.map(comment => (
                                        <div key={comment._id}>
                                            <p>{comment._id}</p>
                                        </div>
                                    )):<p>No Comments found!</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Post;
