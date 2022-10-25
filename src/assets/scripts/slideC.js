let slideIndex = 0;
// showSlides();
var state = 0;
var delayC = 3000;
function resizeFunc() {
    var w = window.outerWidth;
    var h = window.outerHeight;
    if (w > 767 & state == 0) { 
        state = 1;

        // sliceC
        document.getElementById('slideC_1').classList.remove('mySlides');
        document.getElementById('slideC_2').classList.remove('mySlides');
        document.getElementById('slideC_3').classList.remove('mySlides');
        document.getElementById('slideC_4').classList.remove('mySlides');
        document.getElementById('slideC_1').classList.remove('hidden');
        document.getElementById('slideC_2').classList.remove('hidden');
        document.getElementById('slideC_3').classList.remove('hidden');
        document.getElementById('slideC_4').classList.remove('hidden');
        delayC = 999;
    } else if (w < 767 & state == 1) {
        state = 0;
 
        // slideC
        document.getElementById('slideC_1').classList.add('mySlides');
        document.getElementById('slideC_2').classList.add('mySlides');
        document.getElementById('slideC_3').classList.add('mySlides');
        document.getElementById('slideC_4').classList.add('mySlides');
        document.getElementById('slideC_2').classList.add('hidden');
        document.getElementById('slideC_3').classList.add('hidden');
        document.getElementById('slideC_4').classList.add('hidden');
        delayC = 3000;
        showSlides();

    }
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    // slides[i].style.display = "none";  
    slides[i].classList.add('hidden');  

  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
//   slides[slideIndex-1].style.display = "block";  
  slides[slideIndex-1].classList.remove('hidden');  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, delayC); // Change image every 2 seconds
}

if ( window.outerWidth > 767) {
    // slideC
    document.getElementById('slideC_4').classList.remove('hidden');
    document.getElementById('slideC_3').classList.remove('hidden');
    document.getElementById('slideC_2').classList.remove('hidden');
    delayC = 999;
} else {
    // slideC
    document.getElementById('slideC_4').classList.add('hidden');
    document.getElementById('slideC_3').classList.add('hidden');
    document.getElementById('slideC_2').classList.add('hidden');
    showSlides();
    delayC = 3000;
}