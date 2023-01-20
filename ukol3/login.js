let userpass1 = "admin.admin";
let userpass2 = "stefan.ucitel";
let userpass3 = "michael.legenda";
function login(){
    let username = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let userpass = username + "." + password

    if(userpass === userpass1 || userpass === userpass2 || userpass === userpass3){
        alert("Vítejte, " + username);
    }else{
        alert("Nesprávné heslo nebo uživatelské jméno.");
    }
}