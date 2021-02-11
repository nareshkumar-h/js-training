class UserService{

    users = [{ id:1, name:"Naresh", email:"naresh@gmail.com", password:"naresh", role:"ADMIN"}, 
    {id:2,name:"Dharani", email:"dharani@gmail.com",password:"dharani", role:"USER"},{id: 3,name:"Guru", email:"guru@gmail.com", password:"guru" , role:"USER"}];
    async login(email,password,role="USER"){
        
        if (email ==null || email.trim().length == 0){
            throw new Error("Email cannot be Empty");
        }
        let user = this.users.find(obj=> obj.email == email && obj.password ==password );
        if(!user){
            throw new Error("Invalid Login Credentials");
        }
        return user;
    }
    async getUsers(role= null){
        
        if (role){
            return this.users.filter(obj=>obj.role==role);
        }
        return this.users;
    }
    async getUser(id){
        
        let user =  this.users.find(obj=>obj.id == id);
        if (user == null){
            throw new Error("User not found");
        }
        return user;
    }
}
exports.UserService = UserService;