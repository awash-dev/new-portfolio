// menu toggle activation
let MenuToggle = document.getElementById("menu-toggle");

MenuToggle.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  this.classList.toggle("fa-xmark");
});

// dynamic auto slideing text
let typed = new Typed(".slide-text", {
  strings: ["FullStack Developer", "Ui/Ux Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
  backDelay: 2000,
});
