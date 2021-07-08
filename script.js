var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
function myfun(){
  var x1=document.getElementById('name').value;
  var x2=document.getElementById('email').value;
  var x3=document.getElementById('query').value;
  alert("Mr/Mrs"+" "+x1+" "+",we have received your query!.");
  var frm = document.getElementsByName('myForm')[0];
   frm.submit(); // Submit
   frm.reset();  // Reset
   return false;
  
  
}
