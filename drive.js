
<script type = "text/javascript">


var name = document.forms["formform"]["name"];
var lname = document.forms["formform"]["lname"];
var email = document.forms["formform"]["email"];
var tel = document.forms["formform"]["phone"];
var password = document.forms["formform"]["password"];
var password_confirmation = document.forms["formform"]["password_confirmation"];
                            
                            
// get all error display objects 
                            
var name_error = document.getElementById("name_error")
var lname_error = document.getElementById("name_error")
var email_error = document.getElementById("email_error")
var tel_error = document.getElementById("tel_error")
var password_error = document.getElementById("password_error")
                                
                            
// set all event listeners 
                            
name.addEventListener("blur", nameVerify, true);
lname.addEventListener("blur", nameVerify, true);
phone.addEventListener("blur", phoneVerify, true);
email.addEventListener("blur", emailVerify, true);
password.addEventListener("blur", passwordVerify, true);
                            
// validation function 
								
	function Validate(){ 
        // name validation
        if (name.value == "") {
            name.style.border = "1px solid red";
            name_error.textContent = alert("Name is required");
            name.focus();
            return false;
        }
        // validate last name 
        if (lname.value == "") {
            lname.style.border = "1px solid red";
            lname_error.textContent = alert("Name is required");
            lname.focus();
            return false;
        }
        // validate phone 
        if (phone.value == "") {
            name.style.border = "1px solid red";
            tel_error.textContent = alert("Phone Number required");
            phone.focus();
            return false;
        }
        // validate email 
        if (email.value == "") {
            email.style.border = "1px solid red";
            email_error.textContent = alert("email is required");
            email.focus();
            return false;
        }
        // validate pw 
        if (password.value == "") {
            password.style.border = "1px solid red";
            password_error.textContent = alert("password is required");
            password.focus();
            return false;
        }
        // confirm password validation 
        if (password.value != password_confirmation.value) {
            password.style.border = "1px solid red";
            password_confirmation.style.border = "1px solid red";
            password_error.innerHTML = alert("password does not match");
            return false;
        } 

    }

    // event handler function 
    function nameVerify(){ 
    if(name.value != "") { 
        name.style.border = "1px solid red";
        name_error.innerHTML = "";
        return true; 
    }
    }
    function nameVerify(){ 
    if(lname.value != "") { 
        lname.style.border = "1px solid red";
        lname_error.innerHTML = "";
        return true; 
    }
    }
    function emailVerify(){ 
    if(email.value != "") { 
        email.style.border = "1px solid red";
        email_error.innerHTML = "";
        return true; 
    }
    }
    function passwordVerify(){ 
    if(password.value != "") { 
        password.style.border = "1px solid red";
        password_error.innerHTML = "";
        return true; 
    }
    }
</script>