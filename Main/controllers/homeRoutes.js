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
    res.render('homepage', { posts });
});



// LOGIN ROUTE FOR USER

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});




module.exports = router;






