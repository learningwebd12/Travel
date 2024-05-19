let username = document.querySelector("#nameinput");
let password = document.querySelector("#passwordinput");
let flag = 1;

function validatefrom() {
  /* condition for username*/
  if (username.value == "") {
    document.getElementById("showerror").innerHTML = "Enter you full name";
    flag = 0;
  } else if (username.value.length < 3) {
    document.getElementById("showerror").innerHTML = "Enter at least 3 word";
    flag = 0;
  } else {
    document.getElementById("showerror").innerHTML = "";
    flag = 1;
  }
  /* condition for password*/
  if (password.value == "") {
    document.getElementById("password").innerHTML = "Enter your password";
    flag = 0;
  } else if (password.value.length < 5) {
    document.getElementById("password").innerHTML = "at least 5 character";
    flag = 0;
  } else {
    document.getElementById("password").innerHTML = "";
    flag = 1;
  }

  if (flag) {
    return true;
  } else {
    return false;
  }
}
