const express = require('express');
const Post = require('../models/Post');
const auth = require('../middleware/auth');

const router = express.Router();

// Create a post
router.post('/', auth, async (req, res) => {
    const { title, content } = req.body;
    try {
        const post = new Post({ title, content, author: req.user.id });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'username').sort({ createdAt: -1 });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a post by ID
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('author', 'username');
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Search posts
router.get('/search', async (req, res) => {
    const { q } = req.query;
    try {
        const posts = await Post.find({ $or: [{ title: { $regex: q, $options: 'i' } }, { content: { $regex: q, $options: 'i' } }] }).populate('author', 'username');
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
