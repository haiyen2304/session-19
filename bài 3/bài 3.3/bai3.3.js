// let hide = document.getElementsByClassName("an")[0];
// let text = document.getElementById("text");
// hide.onclick = function () {
//   text.style.display = "none";
// };
// let show = document.getElementsByClassName("hien")[0];
// show.onclick = function () {
//   text.style.display = "block";
// };

let square1 = document.getElementById("square1");
let square2 = document.getElementById("square2");
let square3 = document.getElementById("square3");

let rectangle = document.getElementById("rectangle");

square1.onmouseover = function () {
  rectangle.style.backgroundColor = "orange";
};
square2.onmouseover = function () {
  rectangle.style.backgroundColor = "rgb(26, 255, 0)";
};
square3.onmouseover = function () {
  rectangle.style.backgroundColor = "rgb(255, 0, 149)";
};
