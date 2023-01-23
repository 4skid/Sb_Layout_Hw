const element = document.querySelector('.select');
const choices = new Choices(element, {
  position: 'bottom',
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  allowHTML: true
});
document.querySelector('.choices__item--selectable').textContent = 'Материал';
