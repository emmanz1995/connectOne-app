import React, { useEffect, useState, useRef } from 'react';
import './feed.scss';
import PostCards from '../../components/PostCards/PostCards';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Auth } from '../../api/auth';
import { fetchPosts } from '../../app/action/posts';
import { useDispatch, useSelector } from 'react-redux';

function Feed() {
    const mount = useRef(true)
    const [profile, setProfile] = useState({});
    const dispatch = useDispatch();

    const getPosts = useSelector(state => state?.postsReducer);

    useEffect(() => {
        Auth.getUser().then((response) => {
            if(mount.current) {
                setProfile(response);
            }
        }).catch((error) => {
            console.log(error);
        })

         return () => (mount.current = false);
    }, [])

    useEffect(() => {
        if(mount.current) {
            dispatch(fetchPosts())
        }

        return () => (mount.current) = false;
    }, [dispatch])

    const { posts, error, loading } = getPosts;

    return (
        <div>
            <Navbar />
            <div className="feed">
                {loading ?
                    <div className="feed__main">
                        {posts?.length > 0 ? posts?.map(post => (
                            <PostCards key={post?.id} post={post} />
                        )): <p>No posts Found!</p>}
                    </div> : <p>Posts are loading...</p>
                }
                <div className="feed__sidebar__wrapper">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default Feed;
