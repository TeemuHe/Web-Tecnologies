var intervalId;
// n = which button is used, next image: n = 1; previous image: n = -1
var imageIndex = 1;
showSlides(imageIndex);

function init() {
  //showSlides(imageIndex);
  //intervalId = window.setInterval(changeImage, 1000, '1');//, SIIHE PITÄS STRING
  //console.log(setInterval(showSlides, 1000, n));

}

function changeImage(n) {
  showSlides(imageIndex += parseInt(n));
}
// JAVASCRIPT INT TO STRING JA TOISIN PÄI

function showSlides(n) {
  //STRING TO INT HOMMA
  //console.log(n)
  var i;
  var slides = document.getElementsByClassName("myImage");
  if (n > slides.length) {
    imageIndex = 1;
  }

  if (n < 1) {
    imageIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[imageIndex - 1].style.display = "block";
}

function playSlideshow() {
  if (intervalId != null) {
    clearInterval(intervalId);
    intervalId = null;
  }
  else {
    intervalId = setInterval(changeImage, 800, '1');
  }
}
document.getElementById("buttons").addEventListener("click", function (e) {
  var target = e.target;
  target.classList.toggle("fa-pause");
  target.classList.toggle("fa-play-circle");
}, false);

