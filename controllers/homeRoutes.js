const router = require('express').Router();
const { User, Blog } = require('../models');
const withAuth = require('../utils/auth');

// GET ALL ROUTE FOR BLOG POSTS
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
            {
                model: Comment,
                attributes: ['comment']
            }
            ],
        });

        const posts = blogData.map((post) => post.get({ plain: true }));

        res.render('homepage', { posts, logged_in: req.session.logged_in });
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET BLOG BY ID
router.get('/blog/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const post = blogData.get({ plain: true });

        res.render('project', {
            ...post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// USE 'withAuth' MIDDLEWARE TO PREVENT ACCESS TO ROUTE
router.get('/profile', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Project }],
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
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






