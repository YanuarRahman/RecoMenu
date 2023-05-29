import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";
const {DataTypes} = Sequelize;

const Menus = db.define('menu',{
    uuid:{
        type:DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    nama:{
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true,
            len: [6,100]
        }
    },
    rasa:{
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true,
        }
    },
    qty:{
        type:DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty:true,
        }
    },
    harga:{
        type:DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty:true,
        }
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty:true,
        }
    }
}, {
        freezeTableName: true
});
// user one to manny menu
Users.hasMany(Menus);
Menus.belongsTo(Users, {forignKey: 'userId'});

export default Menus;