let SearchForm = document.querySelector(".SearchForm");
let Navbar = document.querySelector(".navbar");

document.querySelector("#MenuBtn").onclick = () => {
  Navbar.classList.toggle("active");
  SearchForm.classList.remove("active");
};

const piyush = () => {
  document.getElementById("SearchBtn").value;
  SearchForm.classList.toggle("active");
  Navbar.classList.remove("active");
};



// let ThemeToggle = document.querySelector(".themeToggle");
// let ToggleBtn = document.querySelector(".ToggleBtn");

// ToggleBtn.onclick = () => {
//   ThemeToggle.classList.toggle("active");
//   // Menu.classList.remove("fa-times");
//   Navbar.classList.remove("active");
// };
// document.querySelectorAll(".themeToggle .themeBtn").forEach((btn) => {
//   btn.onclick = () => {
//     let color = btn.style.background;
//     document.querySelector(":root").style.setProperty("--main", color);
//   };
// });
