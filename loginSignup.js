var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

var userId = document.getElementById("username");
var Password = document.getElementById("userpass");
let submit = document.getElementById("#submit-btn");

submit.onclick = () =>
{
    confirm.log("hello");
}


function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px"
}