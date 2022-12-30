var headerSearchBtn = document.querySelector('.header__search-btn');
var close_btn = document.querySelector('.close-btn');
var search_box_wrap = document.querySelector('.search-bar__wrap');
var input_search = document.querySelector('.search-bar__input');

headerSearchBtn.addEventListener('click', function () {
  search_box_wrap.classList.add('active');
  input_search.focus();
  if (window.matchMedia('(max-width:320px)').matches) {
    document.querySelector('.burger').style.visibility = 'hidden';
  }
  search_box_wrap.style = "z-index: 1500";
  document.querySelector('.header__nav').style = 'z-index: 100';
});


close_btn.addEventListener('click', function () {
  search_box_wrap.classList.remove('active');
  if (window.matchMedia('(max-width:320px)').matches) {
    document.querySelector('.burger').style.visibility = 'visible';
    document.querySelector('.burger').style = 'z-index: 2500'
  }
  search_box_wrap.style = "z-index: 200";
  document.querySelector('.header__nav').style = 'z-index: 2000';
});
