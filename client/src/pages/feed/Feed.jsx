import React from 'react';
import './feed.scss';
import PostCards from '../../components/PostCards/PostCards';
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

function Feed() {
    const posts = [
        {
            id: 1,
            title: "Hello World!",
            content: "The World is so beautiful!",
            author: "emmanz95",
            image: "https://res.cloudinary.com/emmanuel-cloud-storage/image/upload/v1624706917/diw7py8hbftmhidos0yk.jpg"
        },
        {
            id: 2,
            title: "Hello World!",
            content: "The World is so beautiful!",
            author: "JackSwagger",
            image: "https://res.cloudinary.com/emmanuel-cloud-storage/image/upload/v1625241552/z4fu3hifx8himmkwm6gb.jpg"
        },
        {
            id: 3,
            title: "Hello World!",
            content: "The World is so beautiful!",
            author: "emmanz95",
            image: "https://res.cloudinary.com/emmanuel-cloud-storage/image/upload/v1624714570/oc4zprjkschdjs1ehyec.jpg"
        },
        {
            id: 4,
            title: "Hello World!",
            content: "The World is so beautiful!",
            author: "emmanz95",
            image: "https://res.cloudinary.com/emmanuel-cloud-storage/image/upload/v1637538744/ubsolj4hl3d4x2sknemm.jpg"
        },
        {
            id: 5,
            title: "Hello World!",
            content: "The World is so beautiful!",
            author: "emmanz95",
            image: "https://res.cloudinary.com/emmanuel-cloud-storage/image/upload/v1637458399/upg37ddol49bpof7pphk.jpg"
        },

    ]
    return (
        <div>
            <Navbar />
            <div className="feed">
                <div className="feed__main">
                    {posts?.map(post => (
                        <PostCards key={post?.id} post={post} />
                    ))}
                </div>
                <div className="feed__sidebar__wrapper">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default Feed;
