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
