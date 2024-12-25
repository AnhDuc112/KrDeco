window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 0) {
    header.classList.add("sticky"); // Thêm class khi cuộn
  } else {
    header.classList.remove("sticky"); // Xóa class khi trở về đầu trang
  }
});
