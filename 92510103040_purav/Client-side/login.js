function validate(){
    var email = document.getElementById("emails").value;
    var pasword = document.getElementById("pasa").value;


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

        if(pasword == ""){
    document.getElementById("pas").innerHTML = "Please Enter Your Password";

    return false;
    }
    var paswordformat = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if(paswordformat.test(pasword)){
    document.getElementById('pas').innerHTML = "";

    return false;
    }else{

    document.getElementById('pas').innerHTML = "Please enter Minimum 8 characters at least 1 Alphabet and 1 Number";

    return false;
    }













}