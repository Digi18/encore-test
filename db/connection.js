const Sequelize = require('sequelize');
const {dev_config,test_config} = require('../config/config');
let sequelize;    

if(process.env.NODE_ENV === 'test'){
     sequelize = new Sequelize(test_config.DB, test_config.USER, test_config.PASSWORD,
        {
            dialect: 'mysql',
            host: test_config.HOST,
            logging: false
        });
}
else{
    sequelize = new Sequelize(dev_config.DB, dev_config.USER, dev_config.PASSWORD,
        {
            dialect: 'mysql',
            host: dev_config.HOST,
            logging: false
        });
}

module.exports = sequelize;

