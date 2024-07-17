// let hide = document.getElementsByClassName("an")[0];
// let text = document.getElementById("text");
// hide.onclick = function () {
//   text.style.display = "none";
// };
// let show = document.getElementsByClassName("hien")[0];
// show.onclick = function () {
//   text.style.display = "block";
// };

let open = document.getElementById("open");
let myModal = document.getElementById("myModal");

open.onclick = function () {
  myModal.style.display = "block";
};

let close = document.getElementsByClassName("close")[0];
close.onclick = function () {
  myModal.style.display = "none";
};
