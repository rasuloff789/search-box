var searchButton = document.querySelector('.search-btn')
var openInput = document.querySelector('.search-input')

searchButton.addEventListener('click', function(){
  openInput.classList.toggle('search-input--open')
})