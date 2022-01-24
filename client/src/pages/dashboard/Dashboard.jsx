import React, { useState, useEffect } from 'react';
import './dashboard.scss';
import Banner from '../../components/banner/Banner';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction, deletePostsAction } from '../../app/action/posts';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector(state => state.posts)
    useEffect(() => {
        dispatch(getPostsAction())
    }, [dispatch])
    return (
        <div className="dashboard-container">
            <Banner />
            <div className="post-container">
                <div className="flex-card">
                    {data?.length > 0 ? data?.map(post => (
                        <div className="post-card" key={post?._id}>
                            <img src={post?.image} alt="" className="image" />
                            <h3 className="post-title"><a href="" onClick={() => navigate('/post/' + post?._id)}>{post?.title}</a>{' '}<i className="far fa-edit" onClick={() => navigate('/update-post/' + post?._id)} /></h3>
                        </div>
                    )): <p>No posts found</p>}
                </div>
                <div className="sidebar-container"></div>
            </div>
        </div>
    );
}

export default Dashboard;
