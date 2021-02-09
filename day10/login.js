import AuthAPI from './vendor1/authApi.js';

function login(email, password) {
    const authAPI = new AuthAPI();
    let user = { email: email, password: password };
    authAPI.login(user).then(response => {
        console.log(response);
        localStorage.setItem("LOGGED_IN_USER", JSON.stringify(response));
        document.querySelector("#message").innerHTML = "Successfully LoggedIn";
        if (response.role == "ADMIN") {

            window.location.href = "orders.html";
        }
        else {
            window.location.href = "list_products.html";
        }

    }).catch(err => {
        console.error(err.message);
        document.querySelector("#message").innerHTML = err.message;
    });
}

function loginSubmit(){
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    login(email,password);
}

document.querySelector("#submitBtn").addEventListener('click', event=>{
    event.preventDefault();
    loginSubmit();
})
