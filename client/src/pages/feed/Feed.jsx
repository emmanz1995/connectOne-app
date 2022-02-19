import React, { useEffect, useState, useRef } from 'react';
import './feed.scss';
import PostCards from '../../components/PostCards/PostCards';
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Auth } from "../../api/auth";
function Feed() {
    const mount = useRef(true)
    const [profile, setProfile] = useState({});

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

    return (
        <div>
            <Navbar />
            <div className="feed">
                <div className="feed__main">
                    <h3>{profile?.username}</h3>
                    {/*{posts?.map(post => (*/}
                    {/*    <PostCards key={post?.id} post={post} />*/}
                    {/*))}*/}
                </div>
                <div className="feed__sidebar__wrapper">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default Feed;
