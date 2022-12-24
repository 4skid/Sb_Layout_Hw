var search_btn = document.querySelector('.search-btn');
var close_btn = document.querySelector('.close-btn');
var search_box_wrap = document.querySelector('.search-bar__wrap');
var input_search = document.querySelector('.search-bar__input');

search_btn.addEventListener('click', function(){
	search_box_wrap.classList.add('active');
	input_search.focus();
  if(window.matchMedia('(max-width:320px)').matches){
    document.querySelector('.burger').style.visibility = 'hidden';
  }
});

close_btn.addEventListener('click', function(){
	search_box_wrap.classList.remove('active');
  if(window.matchMedia('(max-width:320px)').matches){
    document.querySelector('.burger').style.visibility = 'visible';
  }
});
