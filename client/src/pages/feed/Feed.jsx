import React from 'react';
import Layout from '../../components/Layout';
import './feed.scss';
import PostCards from '../../components/PostCards/PostCards';

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
        <Layout>
            <h1>Feed</h1>
            <div className="post-card-container">
                {posts?.map(post => (
                    <PostCards key={post?.id} post={post} />
                ))}
            </div>
        </Layout>
    )
}

export default Feed;
