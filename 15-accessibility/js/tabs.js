let tabsBtn = document.querySelectorAll('.stages__nav-button');
let tabsItem = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('stages__nav-button--active') });
    e.currentTarget.classList.add('stages__nav-button--active');

    tabsItem.forEach(function (element) { element.classList.remove('tabs__item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item--active');
  });
});
