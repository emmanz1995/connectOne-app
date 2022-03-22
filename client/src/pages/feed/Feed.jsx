import React, { useEffect, useState, useRef } from 'react';
import './feed.scss';
import PostCards from '../../components/PostCards/PostCards';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Auth } from '../../api/auth';
import { fetchPosts, onDeletePost } from '../../app/action/posts';
import { useDispatch, useSelector } from 'react-redux';
import Layout from "../../components/Layout/Layout";

function Feed() {
    const mount = useRef(true)
    const [profile, setProfile] = useState({});
    const [openDraw, setOpenDraw] = useState(false);
    const dispatch = useDispatch();

    const openSidebar = () => setOpenDraw(true);
    const closeSidebar = () => setOpenDraw(false);

    const posts = useSelector(state => state?.postsReducer);

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

    const handleDeletePost = (id) => {
        if(window.confirm('Are you sure you want to delete this post?')) {
            dispatch(onDeletePost(id))
        } else {
            return false;
        }
    }

    const displayPosts = posts?.length > 0 ? posts?.map(post => (
            <PostCards key={post?.id} post={post} deletePost={handleDeletePost} />
        )): <p>No posts Found!</p>

    return (
        <Layout>
            {displayPosts}
        </Layout>
    )
}

export default Feed;
