

document.getElementById("register-btn").addEventListener("click", function() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm-password").value;

    document.getElementById("username_error").innerText = "";
    document.getElementById("email_error").innerText = "";
    document.getElementById("password_error").innerText = ""; 
	document.getElementById("confirm-password").innerText = "";
    


    let request_emailregex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if ((username == "") || (username.length <= 2) || (username.length >= 25)) {
        document.getElementById("username_error").innerText = "**Username is required and must be 3 and 25 letters";
        document.getElementById("username_error").style.color = "red";
    } else if (email == ""){
        document.getElementById("email_error").innerText = "**Email is required";
        document.getElementById("email_error").style.color = "red";
    } else if (!email.match(request_emailregex)){
        document.getElementById("email_error").innerText = "**Email Format is wrong";
        document.getElementById("email_error").style.color = "red";
    }  else if ((password == "") || (confirm != password)){
        document.getElementById("password_error").innerText = "**Password is required and not matching";
        document.getElementById("password_error").style.color = "red";
    }  else {
        swal("Welcome!", "Login Successfully", "success");
    }
});




