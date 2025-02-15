const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
      body.style.color = "yellow";
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
      body.style.color = "#111";
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
      body.style.color = "#fff";
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
      body.style.color = "#111";
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
