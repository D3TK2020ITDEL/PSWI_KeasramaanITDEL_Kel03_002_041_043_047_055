function validate(form){
    var returnValue=true;
	var email=document.getElementById("email");
	var password=document.getElementById("password");
	var repassword=document.getElementById("repassword");

    if(email.value.length < 5){
        returnValue = false;
        alert("Email tidak valid.");
        document.getElementById("email").focus();
    }
    else if(password.value.length < 6){
        returnValue = false;
        alert("Password minimal 6 karakter.");
        document.getElementById("password").focus();
    }
    else if(password.value != repassword.value){
        alert("Password tidak sesuai.\n Coba lagi.");
		document.getElementById("repassword").focus();
	}
    else{
        alert("Selamat Datang");
        window.location.href = "Proyek PSW1.html";
	}
	return returnValue;
}