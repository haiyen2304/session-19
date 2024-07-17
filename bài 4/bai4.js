function updateClock() {
  let now = new Date(); // Lấy thời gian hiện tại
  let hours = now.getHours().toString().padStart(2, "0"); // Lấy giờ và định dạng thành hai chữ số
  let minutes = now.getMinutes().toString().padStart(2, "0"); // Lấy phút và định dạng thành hai chữ số
  let seconds = now.getSeconds().toString().padStart(2, "0"); // Lấy giây và định dạng thành hai chữ số

  // Cập nhật lên đồng hồ
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Kiểm tra mỗi 5 phút để phát bài hát
  if (minutes % 5 === 0 && seconds === "00") {
    playSong();
  }

  // Kiểm tra mỗi 10 phút để thay đổi hình nền
  if (minutes % 10 === 0 && seconds === "00") {
    changeBackground();
  }
}

function playSong() {
  let audio = document.getElementById("audio"); // Lấy thẻ audio
  audio.play(); // Phát nhạc
}

function changeBackground() {
  let body = document.body; // Lấy thẻ body của trang
  if (body.classList.contains("background-1")) {
    body.classList.remove("background-1"); // Xóa lớp background-1 nếu đã có
    body.classList.add("background-2"); // Thêm lớp background-2 để thay đổi hình nền
  } else {
    body.classList.remove("background-2"); // Xóa lớp background-2 nếu đã có
    body.classList.add("background-1"); // Thêm lớp background-1 để thay đổi hình nền
  }
}

// Gọi hàm updateClock lần đầu khi trang web được load
updateClock();

// Cập nhật đồng hồ mỗi giây một lần
setInterval(updateClock, 1000);
