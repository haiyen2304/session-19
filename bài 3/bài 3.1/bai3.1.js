let hide = document.getElementsByClassName("an")[0];
let text = document.getElementById("text");
hide.onclick = function () {
  text.style.display = "none";
};
let show = document.getElementsByClassName("hien")[0];
show.onclick = function () {
  text.style.display = "block";
};
