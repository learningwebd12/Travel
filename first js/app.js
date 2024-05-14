const val = document.querySelector(".str");
const remfrn = document.querySelector(".remover");
const addfrn = document.querySelector(".add");
check = 0;

addfrn.addEventListener("click", function () {
  if (check == 0) {
    val.innerHTML = "friend";
    val.style.color = "green";
    addfrn.innerHTML = "Un Friend";
    check = 1;
  } else {
    val.innerHTML = "Send Request";
    val.style.color = "#6c6a6a";
    addfrn.innerHTML = "Add Friend";
    check = 0;
  }
});
