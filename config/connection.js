//Import Sequelize construct from library
const Sequelize = require('sequlize');

require('dotenv').config();

//Creates connection from this db to MySQL info for UN and PW
let sequelize;

if (process.env.TECHBLOG_URL) {
    sequelize = new Sequelize(process.env.TECHBLOG_URL, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3001
    });
}

module.exports = sequelize;