const $ = (selector) => document.querySelector(selector);

window.onload = function () {
  $('#register').onclick = validate;
};

function validate() {
  let firstname = $('#fname');
  let namepattern = /^[a-zA-Z]{2,30}$/;
  if (firstname.value == '') {
    firstname.nextElementSibling.innerHTML = 'Please enter first name';
  } else if (!namepattern.test(firstname.value)) {
    firstname.nextElementSibling.innerHTML =
      'Please enter first name with letter only ';
  } else {
    firstname.nextElementSibling.innerHTML = 'valid first name';
  }
}
