const Sequelize = require('sequelize');
const db = require('../config/db');

const User = db.define(
    'tableprofile',
    {
        firstName: {type: Sequelize.STRING},
        lastName: {type: Sequelize.STRING},
        email: {type: Sequelize.STRING},
        password: {type: Sequelize.STRING},
        address: {type: Sequelize.STRING},
        birthDate: {type: Sequelize.STRING},
    },
    {
        freezeTableName: true
    }
);

module.exports = User;