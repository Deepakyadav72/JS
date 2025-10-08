function myFunctions(e) {
    e.preventDefault();
    
    let email = document.myForm.email.value;
    console.log('🚀 ~ email:', email);
    let pass = document.myForm.pass.value;
    console.log('🚀 ~ pass:', pass);

    //dk@gmail.com
    if (email.indexOf("@") <= 0) {
        document.getElementById("Message").innerHTML = "Inval"
        return false;
    }
    else if (
        email.charAt(email.length - 4) != "." &&
        email.charAt(email.length - 3) != "."
    ) {
        document.getElementById("Message").innerHTML
            = "Invailid email by .com/.in domain";
        return false;
    }
    //Password Validation

    if (pass !== null) {
        if (pass.trim() === "") {
            console.log(`please enter the value...`);
        }
        else if (pass.length > 8 && pass.length > 20) {
            console.log('please enter the correct length...');
        }
        else {
            const hasUpperCase = /[A-Z]/.test(pass);
            const hasLowerCase = /[a-z]/.test(pass);
            const hasNumber = /[A-Z]/.test(pass);
            const hasSpecialChar = /[!@#$%^&*()"':{}|<>]/.test(pass);

            if (!hasUpperCase) {
                console.log("password must include at least one Upper lettar...");

            } else if (!hasLowerCase) {
                console.log("password must include at least one lower letter...");
            } else if (!hasNumber) {
                console.log("password must include at least one Number...");
            } else if (!hasSpecialChar) {
                console.log("password must include at least one Speacial Char...");
            } else {
                console.log("Password is invalid....")
            }
        }
    }

}
