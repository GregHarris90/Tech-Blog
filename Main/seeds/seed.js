const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userSeedData = require('./userSeedData.json');
const blogSeedData = require('./blogSeedData.json');
const commentSeedData = require('./commentSeedData.json')


// need to finish
const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userSeedData);
}