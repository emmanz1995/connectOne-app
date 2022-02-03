import React, { useState, useEffect } from 'react';
import './dashboard.scss';
import Banner from '../../components/banner/Banner';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '../../app/action/posts';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';

function Dashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector(state => state?.posts)
    useEffect(() => {
        dispatch(getPostsAction())
        console.log('Running')
    }, [dispatch])
    return (
        <div className="dashboard-container">
            <Banner
                title="MERNBLOG"
                description="Write up stories that I tell others about you or your personal stuggles in life or read a interesting story and rate them with our rating system or even leave a comment if you want to go that far."
            />
            <div className="post-container">
                <div className="row">
                    {data?.slice(0, 2).map(post => (
                        <Card post={post} />
                    ))}
                </div><br />
                <h3>More Posts</h3><hr />
                <div className="post-card-container">
                    {data?.slice(2).map(post => (
                        <Card post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
