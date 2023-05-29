import {Sequelize} from 'sequelize';

const db = new Sequelize('db_recomenu','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;