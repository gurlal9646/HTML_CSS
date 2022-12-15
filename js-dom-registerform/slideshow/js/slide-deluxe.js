//declare an array of images
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

//make a slide to display the images
let ImageNumber = 0;
let difference = myImagesArray.length - 1;

let delay = 500;
let lock = false;
let run;

function ChangeImages(direction) {
  //begin function

  ImageNumber = ImageNumber + direction;

  if (ImageNumber > difference) {
    //begin inner first if
    ImageNumber = 0;
  } //end inner first if

  if (ImageNumber < 0) {
    //begin inner second if
    ImageNumber = difference;
  } //end inner second if
  document.getElementById('slideshow').src = myImagesArray[ImageNumber];
} //end function

function first() {
  //begin function
  ImageNumber = 0;
  document.getElementById('slideshow').src = myImagesArray[ImageNumber];
} //end function

function last() {
  //begin function
  ImageNumber = myImagesArray.length - 1;
  document.getElementById('slideshow').src = myImagesArray[ImageNumber];
} //end function

function auto() {
  //begin function
  // if it's currently scrolling do this
  if (lock == true) {
    //begin if
    lock = false;
    window.clearInterval(run);
  } //end if
  // if the function isn't scrolling do this
  else if (lock == false) {
    //begin else if
    lock = true;
    run = setInterval('ChangeImages(1)', delay);
  } //end else if
} //end function

function ChangeImages2() {
  //begin function

  ImageNumber = document.getElementById('slideselect').selectedIndex - 1;
  if (ImageNumber < 0) {
    //begin if
    ImageNumber = 0;
  } //end if
  document.getElementById('slideshow').src = myImagesArray[ImageNumber];
} //end function
