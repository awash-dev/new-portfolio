// menu toggle activation
let MenuToggle = document.getElementById("menu-toggle");

MenuToggle.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  this.classList.toggle('fa-xmark')
});
