var burger = document.querySelector('.burger');
var container = document.querySelector('.container2');
var containerRed = document.querySelector('.container1');

burger.addEventListener('click', function() {
    container.classList.toggle('show');
    containerRed.classList.toggle('showRed')
})