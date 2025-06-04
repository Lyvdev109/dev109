function isValid() {
    if (firstName() && lastName() && email()
    )
    return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

FirstName.addEventListener('blur', firstName, false);
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        };

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
};

LastName.addEventListener('blur', lastName, false);
function lastName() {
    //1) create variable
    var validLastname = false;

    //2) read value from HTML
    var lastname = document.getElementById("LastName").value;
    var errorMessages = "";

    //3) Do validation
    if (lastname === "null" || lastname === "" || lastname.length > 20) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log ("Last name invalid - length");
    } else if (lastname.match ("^[a-zA-Z ,.'-]+$") === null) {
        errorMessages += "<p> Invalid Character in last name (accepts only A-Z, a-z, and , . ' -)</p>";
        console.log("Last name invalid - bad characters");
    } else {
        validLastname = true;
        console.long("last name valid");
    }

    //4) send error message to HTML
    document.getElementById("lname").innerHTML = errorMessages;

    //5) return status of each field
    return (validLastname);
}

Email.addEventListener('blur', email, false);
function email() {
    var validEmail = false;
    var userEmail = document.getElementById("Email").value;
    var errorMessages = "";

    if (userEmail === "null" || userEmail === "") {
        errorMessages += "<p>Email address is required.</p>";
        console.log ("Email invalid - empty");
    } else if (userEmail.length > 50) {
        errorMessages += "<p>Email address cannot be more than 50 characters.</p>"
        console.log("email invalid - length");
    } else {
        //2) atpos and dotpos 
        var atpos = userEmail.indexOf("@");
        var dotpos = userEmail.lastIndexOf(".");

        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length {
            errorMessages += "<p>Invalid email address (ex: example@domain.com). </p>";
            console.log("Email invalid - format (aptos/dotpos)");
        } else {
            validEmail = true;
            console.log("Email valid");
        }
    }

        
function ValidateForm() {
    if (firstName() && lastName() && email()) {
        return true;
    } else {
        document.getElementById("submiterror").innerHTML = "<p><strong> Error submitting - see above</strong></p>";
        event.preventDefault();
        return false;
    }
}



    
