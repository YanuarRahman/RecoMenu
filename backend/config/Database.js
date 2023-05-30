import {Sequelize} from 'sequelize';

const db = new Sequelize('reco_menu','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;