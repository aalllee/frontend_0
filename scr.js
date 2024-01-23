val = document.getElementsByClassName("collapse_menu");

val[0].addEventListener("click", function () {
  console.log("test");
  var nav = document.getElementsByClassName("collapse_menu_content");

  var style = getComputedStyle(nav[0]);

  var collapse_menu_icon = document.querySelector(".collapse_menu");
  console.log(collapse_menu_icon);
  collapse_menu_icon.classList.toggle("header_icon_active");

  nav[0].style.display =
    getComputedStyle(nav[0]).display === "flex" ? "none" : "flex";
});

window.addEventListener("resize", function () {
  // Update the display property based on the window width
  var nav = document.getElementsByClassName("collapse_menu_content");

  if (window.innerWidth > 800) {
    nav[0].style.display = "none";
  } else {
    // nav[0].style.display = "block";
  }
});
