const postSeeds = require('./postSeeds');
const userSeeds = require('./userSeeds');
const commentSeeds = require('./commentSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('---- DATABASE SYNCED ----');

    await userSeeds();
        console.log('---- USERS SEEDED ----');

    await postSeeds();
        console.log('---- POSTS SEEDED ----');

    await commentSeeds();
        console.log('---- COMMENTS SEEDED ----');

    process.exit(0);
};

seedAll();