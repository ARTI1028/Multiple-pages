function loginCheck(){

var user=document.getElementById("username").value;
var pass=document.getElementById("password").value;
var role=document.getElementById("role").value;

if(user=="" || pass==""){
alert("Fields cannot be empty");
return;
}


if(user=="arti"){
console.log("User found");
}else{
console.log("Checking other users");
}

if(user=="arti" && pass=="arti123"){
alert("Arti Login Successful");
window.location="arti.html";
}

else if(user=="admin" && pass=="admin123"){
alert("Admin Login Successful");
window.location="admin.html";
}

else{

switch(role){

case "guest":
alert("Guest Login");
window.location="guest.html";
break;

case "student":
alert("Student Login");
window.location="student.html";
break;

default:
alert("Invalid Login");

}
}
if(user=="arti"){
if(pass=="1234"){
console.log("Nested if executed");
}
}
var msg=(user=="arti") ? "Special User" : "Normal User";
}