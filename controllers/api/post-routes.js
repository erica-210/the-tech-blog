// import models and routes
const express = require('express');
const router = express.Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET 'api/posts/' find all content and post it on page
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      attributes: ['id', 'title', 'content', 'created_at'],
      order: [['created_at', 'DESC']],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
      ],
    });

    res.json(dbPostData.reverse());
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET by id return data when user click specific post id
router.get('/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'content', 'title', 'created_at'],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
      ],
    });

    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }

    res.json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST route connect user session then create new post
router.post('/', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });

    res.json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// PUT by id route update selected post data with new data
router.put('/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }

    res.json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE route remove record from database entirely
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }

    res.json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;