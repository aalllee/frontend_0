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

/*MENU 4########*/
var btns_m4 = document.querySelectorAll(".btn-m4");
var tabs_m4 = document.querySelectorAll(".tab-m4");
console.log(typeof tabs_m4);

for (const tab of btns_m4) {
  tab.addEventListener("click", function () {
    console.log("test_click");

    const tabId = this.getAttribute("data-tab");

    btns_m4.forEach(function (x) {
      x.classList.remove("btn-active-m4");
    });

    tabs_m4.forEach(function (x) {
      x.classList.remove("tab-active-m4");
    });

    document.getElementById(tabId).classList.add("tab-active-m4");
    tab.classList.add("btn-active-m4");
  });
}
/*
tabs_m4.array.forEach(function (tabLink) {
  tabLink.addEventListener("click", function () {
    console.log("test_click");
  });
  console.log(typeof tabs_m4);
});
*/
