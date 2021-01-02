function Login()
{
  var username=document.login.username.value;
  username=username.toLowerCase();
  var password=document.login.password.value;
  password=password.toLowerCase();
     
        if (username == "mahasiswa" && password == "mahasiswa")
        {
          alert("Selamat Anda telah Login sebagai Mahasiswa IT DEL");
          window.location.href = "home.html";
        }

        else if (username == "asrama" && password == "asrama")
        {
          alert("Selamat Anda telah Login sebagai Unit Asrama IT DEL");
          window.location.href = "home.html";
        }

        else
        {
          alert("Harap Periksa Username dan Password Anda!");
        } 
} 


