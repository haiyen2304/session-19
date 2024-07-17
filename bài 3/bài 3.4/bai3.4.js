// let hide = document.getElementsByClassName("an")[0];
// let text = document.getElementById("text");
// hide.onclick = function () {
//   text.style.display = "none";
// };

let tooltip = document.getElementsByClassName("tooltip")[0];
let hover = document.getElementsByClassName("hover")[0];
hover.onmouseover = function () {
  tooltip.style.display = "block";
};

hover.onmouseout = function () {
  tooltip.style.display = "none";
};
