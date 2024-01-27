/*MENU 2########*/

var acc = document.getElementsByClassName("accordion-m2");
var i;
console.log(acc.length);
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    console.log("TEST");
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/*MENU 3########*/
var btnForward = document.getElementById("forward-m3");
var btnBack = document.getElementById("back-m3");
console.log(btnForward);

var scrollContainer = document.getElementsByClassName("scroll-outer-m3")[0];
console.log(scrollContainer);

btnForward.addEventListener("click", function () {
  if (scrollContainer.scrollLeft === 700) {
    scrollContainer.scrollLeft = 200;
  }
  scrollContainer.scrollTo({
    top: 0,
    left: scrollContainer.scrollLeft + 100,
    behavior: "smooth",
  });
});

btnBack.addEventListener("click", function () {
  if (scrollContainer.scrollLeft === 0) {
    scrollContainer.scrollLeft = 500;
  }
  scrollContainer.scrollTo({
    top: 0,
    left: scrollContainer.scrollLeft - 100,
    behavior: "smooth",
  });
  console.log(scrollContainer.scrollLeft);
});
