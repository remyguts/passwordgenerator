
// generate random password
function generate(){

//set password length/complexity
let complexity = document.getElementById("slider").value;

let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
//constant vs let.... which one
let password = ""; 

for (var i= 0; i <= complexity; i++) {
 //learned about complexity!!
    password = password + values.charAt(Math.floor(Math.random * Math.floor(values.length - 1 )));

}

document.getElementById("display").value = password;

document.getElementById("lastNums").innerHTML += password + "<br />";
}
document.getElementById("length").innerHTML = "Length: 25";

document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
 }
}
//function to copy password to clipboard
function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard");