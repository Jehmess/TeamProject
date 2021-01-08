//STICKY NAV BAR
window.addEventListener('scroll', myFunction);
var navbar = document.getElementById("navbar"); 
var sticky = navbar.offsetTop; 

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")   
  } else {
    navbar.classList.remove("sticky");
  } 
} 


// TO PAGE TOP BUTTON
topbutton = document.getElementById("topBtn"); 

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}