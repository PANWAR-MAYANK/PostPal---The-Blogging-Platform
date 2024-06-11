import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('/api/auth/profile', { headers: { Authorization: token } });
            setUser(response.data);
        };
        fetchUser();
    }, []);

    useEffect(() => {
        const fetchPosts = async () => {
            if (user) {
                const response = await axios.get(`/api/posts?author=${user._id}`);
                setPosts(response.data);
            }
        };
        fetchPosts();
    }, [user]);

    return (
        <div>
            {user && (
                <>
                    <h1>{user.username}'s Profile</h1>
                    <p>Email: {user.email}</p>
                </>
            )}
            <h2>Your Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post._id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Profile;
