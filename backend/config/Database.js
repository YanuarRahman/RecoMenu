import {Sequelize} from 'sequelize';

const db = new Sequelize('recomenu','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;