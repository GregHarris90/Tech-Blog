const router = require('express').Router();
const { User, Blog, Comment } = require('../models');

// router.get('/', (req, res) => {
//     // res.send('Hello World!')
// })

router.get('/', async (req, res) => {
    const blogData = await Blog.findAll().catch((err) => {
        res.json(err);
    });
    const posts = blogData.map((post) => post.get({ plain: true }));
    res.render('all', { posts });
});

module.exports = router;
