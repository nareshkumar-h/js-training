
npm init - y
npm install https://...../repository/sql-generator.git
create product.json
const { fs } = require("fs");
const { SQLUtil } = require("sql-generator");
const sqlUtil = new SQLUtil();
fs.readFile("product.json", (err, data) => {
    let dataJson = JSON.parse(data.toString());
    let queries = sqlUtil.getSQLScript(dataJSON);
    fs.write
});

//Cloud DB
- paste product.sql(Tables generate)

npm init shopping - app - db
cd shopping - app - db

npm install mysql2

const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "training_db",
    connectionLimit: 10
});


module.exports = pool;


const pool = require('../config/database')

class UserDAO {

    async findAll() {
        const result = await pool.query("select * from users");
        return result[0];
    }

    async findOne(id) {
        const result = await pool.query("select * from users where id=?", [id]);
        return result[0][0];
    }

    async save(user) {
        let params = [user.name, user.email, user.password, user.role];
        const sql = "insert into users (name,email,password,role) values ( ?,?,?,?)";
        const result = await pool.query(sql);
        return result[0].affectedRows;
    }
    async updatePassword(id, newPassword) {
        //let params = [ newPassword, id];
        const sql = "update users set password = ? where id= ?";
        const result = await pool.query(sql, [newPassword, id]);
        return result[0].affectedRows;
    }
}

async deleteById(id){
    const sql = "delete from users where id= ?";
    const result = await pool.query(sql, [id]);
    return result[0].affectedRows;
}
    }

async updateStatus(id, status){
    const sql = "update users set active=0,modified_date=NOW() where id= ?";
    const result = await pool.query(sql, [status, id]);
    return result[0].affectedRows;
}
    }
updateStatus(1, true);
updateStatus(1, false);

exports.UserDAO = UserDAO;