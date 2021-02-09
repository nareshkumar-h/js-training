class UserValidator{

    static async validateNewUser(user){
        if (user.name == null){
            throw new Error("Name cannot be null");
        }
    }
}

exports.UserValidator = UserValidator;