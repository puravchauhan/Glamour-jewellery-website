function validate(){
var username = document.getElementById("user").value;
var email = document.getElementById("emails").value;
var number = document.getElementById("num").value;
var city = document.getElementById("cit").value;
var Address = document.getElementById("addres").value;





// input field is empty or not


if(username == ""){
document.getElementById("usr").innerHTML = "Please Enter Your Name";
return false;
}

if(!isNaN(username)){
document.getElementById("usr").innerHTML = "Please Ente Characters only";
return false;
}


if(email == ""){
document.getElementById("eml").innerHTML = "Please Enter Your Email"; 
return false;
}
var emailformat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if(emailformat.test(email)){

document.getElementById("eml").innerHTML = "";
}
else
{
document.getElementById("eml").innerHTML = "Please Enter correct email format";
return false;
}


if(number == ""){
document.getElementById("nm").innerHTML = "Please Enter Your Contact number";

return false;
}
if(isNaN(number)){
document.getElementById("nm").innerHTML = "Please Enter Your number only";

return false;
}
if(number.length !== 10){
document.getElementById("nm").innerHTML = "Please Enter 10 digit number";

return false;
}




if(Address == ""){
document.getElementById("Addr").innerHTML = "Please Enter Your Address";
return false;
}


if(city == ""){
document.getElementById("City").innerHTML = "Please Enter Your City";
return false;
}

if(!isNaN(city)){
document.getElementById("City").innerHTML = "Please Ente Characters only";
return false;
}

if(pasword == ""){
document.getElementById("pas").innerHTML = "Please Enter Your Password";

return false;
}
var pasawordformat = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
if(pasawordformat.test(pasword)){
document.getElementById('pas').innerHTML = "";

return false;
}else{

document.getElementById('pas').innerHTML = "Please enter Minimum 8 characters at least 1 Alphabet and 1 Number";

return false;
}


}

