const { Post } = require('../models');

const postData = [
    {
        title: "The most clever thing ever written!",
        post_content: "Clever things are easy to come up with.",
        user_id: 1
    },
    {
        title: "Netflix needs to quit canceling good shows.",
        post_content: "Netflix is quite good at canceling shows right as they reach their peak.",
        user_id: 2
    },
    {
        title: "Blogs are fun.",
        post_content: "Blogs have the must fun information.",
        user_id: 3
    },
    {
        title: "Coding is fun.",
        post_content: "If you aren't having fun, then you are doing something wrong.",
        user_id: 4
    }
]

const seedPosts = () => Post. bulkCreate(postData);

module.exports = postSeeds;