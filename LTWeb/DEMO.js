/** ------------------------------
 *  Các hàm toán học cơ bản
 * ------------------------------ */
function add(a, b) {
  return a + b;
}

function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}

/** ------------------------------
 *  In danh sách sinh viên (đã đổi dữ liệu)
 * ------------------------------ */
function inDanhSach() {
  const danhSach = [
    { hoTen: "Trần Đức Thắng", msv: "74DCTT20011", nhom: 4 },
    { hoTen: "Phạm Hoài Nam",  msv: "74DCTT21022", nhom: 7 },
    { hoTen: "Lê Thanh Tùng",  msv: "74DCTT19233", nhom: 2 },
    { hoTen: "Bùi Minh Hiếu",  msv: "74DCTT20544", nhom: 9 },
  ];

  console.table(danhSach);
}

/** ------------------------------
 *  Callback Demo
 * ------------------------------ */
function process(x, callback) {
  console.log("Giá trị:", x);
  if (typeof callback === "function") callback();
}

function done() {
  console.log("Xử lý hoàn tất!");
}

/** ------------------------------
 *  DOM – Xử lý HTML
 * ------------------------------ */
window.onload = function () {
  const tong = add(12, 8);
  document.getElementById("ketQua").innerText =
    `Tổng 12 + 8 = ${tong}`;
};

// Đổi nội dung + style
function changeText() {
  const title = document.getElementById("title");

  title.innerText = "Tiêu đề đã được cập nhật!";
  title.style.color = "green";
  title.style.fontWeight = "bold";

  const descriptions = document.getElementsByClassName("description");
  if (descriptions.length > 0) {
    descriptions[0].classList.add("highlight");
  }
}

// Thay thế hình ảnh bằng đoạn văn mới
function replaceElement() {
  const img = document.getElementById("image");

  const newText = document.createElement("p");
  newText.innerText = "Hình ảnh đã được thay bằng đoạn mô tả mới!";
  newText.style.cssText = `
    color: darkred;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
  `;

  img.replaceWith(newText);
}

// Lấy style từ một thẻ
function getStyle() {
  const element = document.getElementById("text");
  const style = window.getComputedStyle(element);

  document.getElementById("result").innerHTML = `
      Màu chữ: ${style.color} <br>
      Cỡ chữ: ${style.fontSize} <br>
      Độ đậm: ${style.fontWeight}
  `;
}

// Gán style mới
function setStyle() {
  const element = document.getElementById("text");

  element.style.cssText = `
    color: purple;
    font-size: 26px;
    font-weight: bold;
    background-color: #f4f4a8;
  `;
}

/** ------------------------------
 *  Log thông tin cửa sổ
 * ------------------------------ */
console.log("Chiều rộng cửa sổ:", window.innerWidth);
console.log("Chiều cao cửa sổ:", window.innerHeight);
console.log("Độ rộng màn hình:", window.screen.width);
console.log("Độ cao màn hình:", window.screen.height);

/** ------------------------------
 *  Chạy thử các hàm demo
 * ------------------------------ */
inDanhSach();

console.log("Demo đệ quy:", factorial(6));

console.log("Demo callback:");
process(10, done);
