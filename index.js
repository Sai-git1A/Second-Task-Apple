var popup = document.getElementById("popup");
var sec = document.querySelector(".sec");
var click = document.getElementById("btn");
var box = document.getElementById("dark")

setTimeout(function() {
  window.onload(popupopen());
}, 1000);

function popupopen() {
  popup.style="display: block";
}

function popupclose() {
  popup.style="display: none";
}

function mode() {
  sec.classList.toggle("dark")
  if (click.innerHTML === "Dark") {
    click.innerHTML = "Light";
    click.style="color: white";
    box.style="background-color: black;border: 1px solid white;"
  } else {
    click.innerHTML = "Dark";
    click.style="color: black";
    box.style="background-color: white;border: 1px solid black;"
  }
}
