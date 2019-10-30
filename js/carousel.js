var intervalId;
// n = which button is used, next image: n = 1; previous image: n = -1
var imageIndex; // = 1;
var slides;

function init() {
  imageIndex = localStorage.getItem("index");
  /*if(imageIndex == undefined) {
    imageIndex = 1;
  }*/
  imageIndex = parseInt(imageIndex);
  showSlides(imageIndex);
}

function changeImage(n) {
  showSlides(imageIndex += parseInt(n));
}

function showSlides(n) {
  var i;
  slides = document.getElementsByClassName("myImage");
  if (n > slides.length) {
    imageIndex = 1;
  }

  if (n < 1) {
    imageIndex = slides.length;
  }
  console.log(imageIndex);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //console.log(imageIndex -1);
  slides[imageIndex - 1].style.display = "block";
  
  localStorage.setItem("index", imageIndex);
}

function playSlideshow() {
  if (intervalId != null) {
    clearInterval(intervalId);
    intervalId = null;
  }
  else {
    intervalId = setInterval(changeImage, 1000, '1');
  }
}
document.getElementById("buttons").addEventListener("click", function (e) {
  var target = e.target;
  target.classList.toggle("fa-pause");
  target.classList.toggle("fa-play-circle");
}, false);

