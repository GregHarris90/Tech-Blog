const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

const userSeedData = require('./userSeedData.json');
const blogSeedData = require('.blogSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulk
}