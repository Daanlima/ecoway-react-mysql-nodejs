import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Empresa = db.define('empresas',{
    companyname:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Empresa;