var formEl = document.querySelector('#someForm');
formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('form submitted');
});

var buttonAEl = document.querySelector('#button-a');
buttonAEl.addEventListener('click', function() {
  console.log('click event on button A');
});

var buttonBEl = document.querySelector('#button-b');
buttonBEl.addEventListener('click', function() {
  console.log('click event on button B');
});
