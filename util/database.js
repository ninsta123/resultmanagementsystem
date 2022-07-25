const Sequelize = require('sequelize');

const sequelize = new Sequelize("resultManagement","root","Surya@123",{
    dialect: "mysql",
    host: "localhost"
});

module.exports = sequelize;