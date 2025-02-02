// copy menu for mobile
function copyMenu() {
  // copy inside .dpt-cat to .departments
  var dptCategory = document.querySelector(".dpt-cat");
  var dptPlace = document.querySelector(".departments");

  dptPlace.innerHTML = dptCategory.innerHTML;

  // copy inside nav to nav
  var mainNav = document.querySelector(".header-nav nav");
  var navPlace = document.querySelector(".off-canvas nav");

  navPlace.innerHTML = mainNav.innerHTML;

  // copy .header-top .wrapper to .thetop-nav
  var topNav = document.querySelector(".header-top .wrapper");
  var topPlace = document.querySelector(".off-canvas .thetop-nav");

  topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

//show hidden menu
const menuButton = document.querySelector(".trigger"),
  closeButton = document.querySelector(".t-close"),
  addClass = document.querySelector(".site");
menuButton.addEventListener("click", function () {
  addClass.classList.toggle("showmenu");
});
closeButton.addEventListener("click", function () {
  addClass.classList.remove("showmenu");
});

//display sub menu on mobile
const submenu = document.querySelectorAll(".has-child .icon-small");
submenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
  e.preventDefault();
  submenu.forEach((item) =>
    item != this ? item.closest(".has-child").classList.remove("expand") : null
  );
  if (this.closest(".has-child").classList != "expand");
  this.closest(".has-child").classList.toggle("expand");
}

// slider js initialization
const swiper = new Swiper(".swiper", {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});
