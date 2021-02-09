const pool = require('./config/db')

class UserDAO {

    async findAll() {
        const result = await pool.query("select * from users");
        return result[0];
    }

    async findOne(id) {
        const result = await pool.query("select * from users where id=?", [id]);
        return result[0][0];
    }

    async findByEmail(email) {
        const result = await pool.query("select 1 from users where email=?", [email]);        
        return result[0].length !=0 ;
    }


    async save(user) {
        let params = [user.name, user.email, user.password];
        const sql = "insert into users (user_name,email,password) values ( ?,?,?)";
        const result = await pool.query(sql,params);
        return result[0].affectedRows;
    }
    async updatePassword(id, newPassword) {
        //let params = [ newPassword, id];
        const sql = "update users set password = ? where id= ?";
        const result = await pool.query(sql, [newPassword, id]);
        return result[0].affectedRows;
    }

    //findByEmailAndPassword(email,password)
    async deleteById(id) {
        const sql = "delete from users where id= ?";
        const result = await pool.query(sql, [id]);
        return result[0].affectedRows;
    }


    async updateStatus(id, status) {
        const sql = "update users set active=0,modified_date=NOW() where id= ?";
        const result = await pool.query(sql, [status, id]);
        return result[0].affectedRows;
    }
}
exports.UserDAO = UserDAO;