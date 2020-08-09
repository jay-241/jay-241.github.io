function validate()
{
            var username = document.getElementsByName("uname");
            var password = document.getElementsByName("psw");

            if(username[0].value=="jay241" && password[0].value=="123456")
            {
                alert("Welcome!!! Correct Usename and Password");
                window.location.replace("https://jay-241.github.io/index.html");
            }
            else if(username[0].value=="jay241" && password[0].value!="123456")
            {
                alert("Invalid Password"); 
            }
            else if(username[0].value!="jay241" && password[0].value=="123456")
            {
                alert("Invalid Username"); 
            }
            else
            {
                alert("Invalid User Name and Password");
            }
}

function myFunction() {
  var x = document.getElementById("psw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
