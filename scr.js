val = document.getElementsByClassName("collapse_menu");

val[0].addEventListener("click", function () {
  console.log("test");
  var nav = document.getElementsByClassName("collapse_menu_content");
  console.log(getComputedStyle(nav[0]));
  nav[0].style.display =
    getComputedStyle(nav[0]).display === "flex" ? "none" : "flex";
  //nav[0].style.display = nav.style.display === "block" ? "none" : "block";
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
