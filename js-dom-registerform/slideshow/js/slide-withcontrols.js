// Section 1 -  Declare an array of elements -----------------
let myImagesArray = [
  'images/1L.jpg',
  'images/2L.jpg',
  'images/3L.jpg',
  'images/4L.jpg',
  'images/5L.jpg',
  'images/6L.jpg',
  'images/7L.jpg',
  'images/8L.jpg',
  'images/9L.jpg',
  'images/10L.jpg',
];

// -----------------------------------------------------------
// Section 2 -  Build the slide of images --------------------
let lowerLimit = 0;
let upperLimit = myImagesArray.length - 1;

//setInterval('changeImage(-1)',1000)
function changeImage(direction) {
  lowerLimit = lowerLimit + direction;
  if (lowerLimit > upperLimit) {
    lowerLimit = 0;
  }
  if (lowerLimit < 0) {
    lowerLimit = upperLimit;
  }
  document.getElementById('slideshow').src = myImagesArray[lowerLimit];
}
