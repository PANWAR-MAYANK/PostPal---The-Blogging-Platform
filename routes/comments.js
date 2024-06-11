const express = require('express');
const Comment = require('../models/Comment');
const auth = require('../middleware/auth');

const router = express.Router();

// Add a comment
router.post('/:postId', auth, async (req, res) => {
    const { postId } = req.params;
    const { content } = req.body;
    try {
        const comment = new Comment({ postId, content, author: req.user.id });
        await comment.save();
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get comments for a post
router.get('/:postId', async (req, res) => {
    const { postId } = req.params;
    try {
        const comments = await Comment.find({ postId }).populate('author', 'username').sort({ createdAt: -1 });
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
