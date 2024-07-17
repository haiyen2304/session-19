//Thay vì sử dụng setTimeOut để tạo ra một timer,
//ta có thể sử dụng setInterval để code có thể ngắn hơn
setTimeout(function () {
  console.log("Hello");
}, 1000);

setInterval(function () {
  console.log("Hello");
}, 1000);
