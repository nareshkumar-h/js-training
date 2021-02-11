const {UserService} = require("./user.service");

class UserController{

    userService ;

    constructor(){
        this.userService = new UserService();
    }

    async getUsers(req,res){

        let role = req.query.role;//?role=USER
        //let role = req.param.role; // localhost:8080/api/users/USER
        let users = await this.userService.getUsers(role);
        res.json(users);
    }

    async getUser(req,res){

        let id = req.params.id;
        let user = await this.userService.getUser(id);
        res.json(user);
    }
    
    async getUsersForRole(req,res){

        let users = await this.userService.getUsers();
        res.json(users);
    }
    async login(req,res){

        let { email,password, role } = req.body;
        try{
            //let user = await this.userService.login(email,password,role);
            let user = await this.userService.login(req.body.email,req.body.password,req.body.password);
            //console.log(user);
            res.setStatus(200).json(user);
        }
        catch(err){
            res.setStatus(400).json({message : err.message});
        }
        
    }

}
exports.UserController = UserController;


//let userService = new UserService();
//let userController = new UserController(userService);
//let userController = new UserController();