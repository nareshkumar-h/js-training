const { UserController } = require("./user.controller");
const { Response } = require("./response");
const userController = new UserController();

function testValidLogin() {

    const res = new Response();
    let body = { email: "naresh@gmail.com", password: "naresh", role: "USER" };
    let req = { body: body };


    userController.login(req, res).then(data => {
        console.log(res.toString());
    });


}

function testInValidLogin() {

    const res = new Response();
    let body = { email: "invalid@gmail.com", password: "guru", role: "U" };
    let req = { body: body };


    userController.login(req, res).then(data => {
        console.log(res.toString());
    });
}

function testLoginWithMailEmpty() {

    const res = new Response();
    let body = { email: null, password: "pass123", role: "U" };
    let req = { body: body };


    userController.login(req, res).then(data => {
        console.log(res.toString());
    });
}


function testLoginWithMailEmptyString() {

    const res = new Response();
    let body = { email: "", password: "pass123", role: "U" };
    let req = { body: body };


    userController.login(req, res).then(data => {
        console.log(res.toString());
    });
}

function testRegisterWithPasswordStrength() {

    const res = new Response();
    let body = { email: "", password: "pass123", role: "U" };
    let req = { body: body };


    userController.login(req, res).then(data => {
        console.log(res.toString());
    });
}

function testGetUsers() {

    const res = new Response();
    let body = { };
    let req = { body: body , query: { }};


    userController.getUsers(req, res).then(data => {
        console.log(res.toString());
    });
}

function testGetUsersWithRole() {

    const res = new Response();
    let body = { };
    let req = { body: body , query: { role:"USER" }};


    userController.getUsers(req, res).then(data => {
        console.log(res.toString());
    });
}

function testGetUsersWithAdminRole() {

    const res = new Response();
    let body = { };
    let req = { body: body , query: { role:"ADMIN" }};


    userController.getUsers(req, res).then(data => {
        console.log(res.toString());
    });
}
function testGetUser() {

    const res = new Response();
    let body = { };
    let req = { body: body , params: { id:1}};

    userController.getUser(req, res).then(data => {
        console.log(res.toString());
    });
}

//testValidLogin();
//testInValidLogin();
//testLoginWithMailEmpty();
 //testLoginWithMailEmptyString();
 //testLoginWithPasswordStrength();
 //testGetUsers();
 //testGetUsersWithRole();
//testGetUsersWithAdminRole();
testGetUser();