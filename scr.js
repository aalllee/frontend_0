val = document.getElementsByClassName("collapse_menu");
var collapse_menu_icon = document.querySelector(".collapse_menu");

val[0].addEventListener("click", function () {
  var nav = document.getElementsByClassName("collapse_menu_content");
  console.log(collapse_menu_icon);
  collapse_menu_icon.classList.toggle("header_icon_active");
  nav[0].style.display =
    getComputedStyle(nav[0]).display === "flex" ? "none" : "flex";
});

window.addEventListener("resize", function () {
  var nav = document.getElementsByClassName("collapse_menu_content");

  if (window.innerWidth > 750) {
    nav[0].style.display = "none";

    var active_icon = document.querySelector(".header_icon_active");
    if (active_icon !== null) {
      console.log(active_icon);
      active_icon.classList.toggle("header_icon_active");
    }
  }
});
