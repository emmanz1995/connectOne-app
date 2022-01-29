import React from 'react';
import PostForm from "../../components/forms/PostForm";
import Banner from "../../components/banner/Banner";

function UpdatePost() {
    return (
        <div>
            <Banner
                title="Update Current Post"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda commodi dolor ducimus fugiat ipsum, molestias necessitatibus non omnis provident! Ab ad autem earum numquam."
            />
            <PostForm />
        </div>
    );
}

export default UpdatePost;
