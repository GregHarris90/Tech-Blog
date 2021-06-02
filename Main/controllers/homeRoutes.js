const router = require('express').Router();
const { User, Blog, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all blog posts
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            attributes: ['id', 'title', 'post', 'date_created'],
            order: [
                ['date_created', 'DESC']
            ],
            include: [{
                model: User,
                attributes: ['username']
            },
            ],
        });

        const posts = blogData.map((post) => post.get({ plain: true }));

        res.render('homepage', { posts, logged_in: req.session.logged_in });
    } catch (error) {
        res.status(500).json(error);
    }
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






