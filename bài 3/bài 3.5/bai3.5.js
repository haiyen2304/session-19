let container = document.getElementsByClassName("container")[0];
let toggle = document.getElementsByClassName("container")[0];
let text1 = document.getElementsByClassName("text1")[0];
let text2 = document.getElementsByClassName("text2")[0];
toggle.onclick = function () {
  if (container.style.backgroundColor == "white") {
    container.style.backgroundColor = "black";
    text1.classList.add("chutrang");
    text2.classList.add("chutrang");
  } else {
    container.style.backgroundColor = "white";
    text1.classList.remove("chutrang");
    text2.classList.remove("chutrang");
    console.log(text1);
  }
};

// console.log(text1.classList);
