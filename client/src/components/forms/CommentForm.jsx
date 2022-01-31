import React, { useState } from 'react';
import './postForm.scss';

const CommentForm = () => {
    return (
        <form>
            <input className="input-comment" type="text" name="comment" placeholder="Type your Comment"/>
        </form>
    );
}

export default CommentForm;
