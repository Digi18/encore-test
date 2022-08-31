const Sequelize = require('sequelize');
const sequelize = require('./connection');

const User = sequelize.define('user', {

    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User;