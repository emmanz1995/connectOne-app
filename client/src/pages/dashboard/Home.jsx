import React, { useState, useEffect } from 'react';
import './home.scss';
import Banner from '../../components/banner/Banner';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '../../app/action/posts';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import moment from 'moment';

function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector(state => state?.posts)
    const auth = useSelector(state => state?.auth)
    const { isAuthenticated } = auth;
    useEffect(() => {
        dispatch(getPostsAction())
    }, [])
    return (
        <div className="posts">
            {isAuthenticated ? (
                <>
                    <div className="posts__info__container">
                        <h3>Posts</h3>
                        <button className="create-btn">Create Post</button>
                    </div>
                    <div className="posts__container1">
                        {data?.slice(0, 2).map(post => (
                            <Card key={post?._id} post={post} />
                        ))}
                    </div>
                    <div className="posts__container2">
                        {data?.slice(2).map(post => (
                            <div className="sm-card" onClick={() => navigate(`/post/${post?._id}`)}>
                                <div className="img">
                                    <img className="img__post" src={post.image} alt={post?.title} />
                                </div>
                                <div className="posts-content">
                            <span>
                                <h3>{post?.title}</h3>
                                <p>{moment(post?.createdAt).format('MMMM DD, YYYY')}</p>
                            </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="no-access">
                    <h1>You are not authorized to access this page Login to get access!</h1>
                </div>
            )}
        </div>
    );
}

export default Home;
