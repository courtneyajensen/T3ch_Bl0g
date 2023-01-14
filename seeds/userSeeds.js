const { User } = require('../models');

const userData = [
    {
        username: "courtney_jensen",
        github: "courtannjensen",
        email: "courtney@mail.com",
        password: "password123"
    },
    {
        username: "alexis_rose",
        github: "roses",
        email: "arose@mail.com",
        password: "password456"
    },
    {
        username: "david_rose",
        github: "davidsroses",
        email: "davidsroses@mail.com",
        password: "password789"
    },
    {
        username: "phil_collins",
        github: "collinscode",
        email: "philcoll@mail.com",
        password: "password000"
    }
]

const userSeeds = () => User.bulkCreate(userData);

module.exports = userSeeds;