import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            const response = await axios.get(`/api/posts/${id}`);
            setPost(response.data);
        };
        fetchPost();
    }, [id]);

    useEffect(() => {
        const fetchComments = async () => {
            const response = await axios.get(`/api/comments/${id}`);
            setComments(response.data);
        };
        fetchComments();
    }, [id]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            alert('You must be logged in to comment');
            return;
        }
        const response = await axios.post(`/api/comments/${id}`, { content }, { headers: { Authorization: token } });
        setComments([...comments, response.data]);
        setContent('');
    };

    return (
        <div>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <p>by {post.author.username}</p>
                </>
            )}
            <h2>Comments</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment._id}>
                        <p>{comment.content}</p>
                        <p>by {comment.author.username}</p>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleCommentSubmit}>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}

export default PostDetail;
