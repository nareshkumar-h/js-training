const {UserDAO} = require("./user.dao");
const { UserValidator } = require("./user.validator");

// Task 1: Add User
let user = { name:null, email:"nareshkumarh@live.com",password:"pass1234", role:"USER"};
const userDAO = new UserDAO();

async function registerUser(user){
    
    await UserValidator.validateNewUser(user);

    let exists = await userDAO.findByEmail(user.email);
    console.log("Mail Exists", exists);
    if(exists){
        ////throw new DBError("Mail Already exists");
           //throw new ValidationError("Mail Already exists");
           throw new Error("Mail Already exists");
    }
    return await userDAO.save(user);
}

try{
    registerUser(user).then(response=>{
        console.log(response);
        console.log("Successfully registered");
    }).catch(err=>{
        //console.error(err);
        console.log("User Registration Error Message:", err.message);
    });
}
catch(err){
    console.error(err);
    console.log(err.message);
}

