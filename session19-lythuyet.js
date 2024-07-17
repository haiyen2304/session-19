// console.dir(document);
// let h1HTML = document.getElementById("demo-id"); // lấy thẻ có tên id
// let demoClassList = document.getElementsByClassName("demo-class"); // [ div,p,div] dựa trên class
// //thì kq sẽ có được 1 kiểu dữ liệu gần giống như mảng,
// //và những phần tử cùng tên class sẽ được lần lượt liệt kê ra
// //=>có thể truy cấp vào và lấy ra chính xác phần tử đó
// demoClassList[0]; // div đầu tiên
// let divCollection = document.getElementsByTagName("div"); //[div,div,div]// dựa trên thẻ

// querySelector
// let h1 = document.querySelector("h1#demo-id.demo-class");
// console.log(h1);

// // querySelectorAll
// let classCollection = document.querySelectorAll(".demo-class");
// console.log(classCollection);

// let h1 = document.getElementById("demo-id");
// // console.dir(h1.textContent);
// // h1.textContent = "nội dung mới";

// console.log(h1.innerText); // không lấy ra được các nội dung đã bị displaunone
// console.log(h1.textContent); // bao gồm khoảng trắng+ xuống dòng+space , lất ra được toàn bộ nội dung kể cả nội dung bị display none
// console.log(h1.innerHTML); // lấy ra được toàn bộ nôi dung là HTML ở bên trong 1 phần tử HTML

// h1.innerText = "hello";
// h1.textContent = h1.textContent + " abcsajfkndjksnf";
// h1.innerHTML = `<u style="text-decoration: line-through">hello </u>`;
// let blogData = [
//   {
//     id: 1,
//     title: "tôi",
//     description: "tôi sẽ làm",
//     image: " hình 1",
//     content: "không hiểu sao tôi muốn",
//   },
//   {
//     id: 2,
//     title: "anh ấy",
//     description: "anh ấy sẽ làm",
//     image: "hình2",
//     content: "không hiểu sao anh ấy ",
//   },
//   {
//     id: 2,
//     title: "cô ấy",
//     description: "cô ấy sẽ làm",
//     image: "hình 3",
//     content: "không hiểu sao cô ấy ",
//   },
// ]; // fake lấy về từ dâtbay

// const cardContainer = document.getElementById("card-container");
// console.log(cardContainer);
// // let cardTemplate = ` <div class="card">
// //                 <h2>TITLE HEADING</h2>
// //                 <h5>Title description, Dec 7, 2017</h5>
// //                 <div class="fakeimg" style="height:200px;">Image</div>
// //                 <p>Some text..</p>
// //             </div>`;
// for (let blog of blogData) {
//   cardContainer.innerHTML =
//     cardContainer.innerHTML +
//     `<div class="card">
//                 <h2>${blog.title}</h2>
//                 <h5>${blog.description}</h5>
//                 <div class="fakeimg" style="height:200px;">${blog.image}</div>
//                 <p>${blog.content}</p>
//             </div>`;
// }

// let img = document.getElementById("img");
// console.log(img.id);
// // img.src =
// //   "https://th.bing.com/th/id/R.9b05c1b200a0701d036d8bd2e54335a1?rik=zdZCkAsKIRngZA&pid=ImgRaw&r=0";
// img.getAttribute(
//   "src",
//   "https://th.bing.com/th/id/OIP.Cn-OfX0CV3TZhJgWhSfbRwAAAA?w=417&h=626&rs=1&pid=ImgDetMain"
// );
// img.style.borderRadius = "50%";
// let div = document.getElementById("demo-style");

// let a = document.getElementById("a");
// console.log(a.href);
// let input = document.getElementById("input");
// console.log(input.placeholder);
// console.log(input.type);

console.log(div.classList);
div.classList.add("pink-circle");

let btn = document.getElementById("btn");

btn.onclick = function () {
  alert("hello baby");
};

// const anhPc = document.getElementById("anh-pc");
// anhPc.setAttribute("productId", "23");

// console.log(anhPc.getAttribute("productId"));
// function thayAnh() {
//   anhPc.setAttribute(
//     // key, và value//
//     "src",
//     "https://carshop.vn/wp-content/uploads/2022/07/hinh-nen-xe-oto-dep-7.jpg"
//   );
//   anhPc.style.borderRadius = "50%";
//   console.log(anhPc.classList);
// }
