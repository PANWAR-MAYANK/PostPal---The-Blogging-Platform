import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const history = useHistory();

    const handleCreatePost = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            alert('You must be logged in to create a post');
            return;
        }
        try {
            await axios.post('/api/posts', { title, content }, { headers: { Authorization: token } });
            history.push('/');
        } catch (error) {
            alert('Error creating post');
        }
    };

    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleCreatePost}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
}

export default CreatePost;

