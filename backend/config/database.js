import { Sequelize } from "sequelize";
 
const db = new Sequelize('ecoway', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;