require('dotenv').config();

const dev_config = {
    HOST: process.env.HOST,
    USER: "digi",
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DEV_DB,
    dialect: "mysql",
};

const test_config = {
    HOST: process.env.HOST,
    USER: "digi",
    PASSWORD: process.env.PASSWORD,
    DB: process.env.TEST_DB,
    dialect: "mysql",
};

module.exports = {dev_config,test_config};