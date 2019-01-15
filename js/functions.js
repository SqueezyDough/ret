// https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos && window.pageYOffset) {
    document.getElementById("navbar").classList.remove("nav-up");
  } else {
    document.getElementById("navbar").classList.add("nav-up")
  }
  prevScrollpos = currentScrollPos;

  if (window.pageYOffset <= 0){
    document.getElementById("navbar").classList.remove("nav-up");
    console.log(window.pageYOffset);
  }
}