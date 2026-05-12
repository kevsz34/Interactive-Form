
function claim(){
const firstN = document.getElementsByClassName("firstN");
const secondN = document.getElementsByClassName("secondN");
const email = document.getElementsByClassName("email");
const password = document.getElementsByClassName("password");

let firstP = document.getElementById("firstNP")
let secondP = document.getElementById("secondNP")
let emailP = document.getElementById("emailP")
let passwordP = document.getElementById("passwordP")

if(firstN[0].value === ""){
 firstP.innerHTML = "First Name cannot be empty"
 firstN[0].classList.add("input-error");
 
}
else{
firstP.innerHTML = ""
}

 if (secondN[0].value === ""){
secondP.innerHTML = "Second Name cannot be empty"
secondN[0].classList.add("input-error");
}
else{
    secondP.innerHTML = ""
}

if (email[0].value === ""){
emailP.innerHTML = "This doesn't look like an email"
email[0].placeholder = "email@example.com"
email[0].classList.add("input-error");
}
else{
emailP.innerHTML = ""
}

if (password[0].value === ""){
passwordP.innerHTML = "You need to fill a password"
password[0].classList.add("input-error");
}
else{
passwordP.innerHTML = ""
}

}