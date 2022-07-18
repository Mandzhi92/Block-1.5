const readMore = document.querySelector('.read-more');
const height = document.querySelector('.brand-slider');
height.classList.add('.openCards')


let readAll = document.querySelector('.read-all');
readAll.classList.add('.rotate')
let buttonText = document.querySelector('.text-all');



readMore.addEventListener('click', () => {
   height.classList.toggle('openCards');
   
   buttonText.classList.toggle('text-all') ? buttonText.textContent = 'Показать всё' : buttonText.textContent = 'Скрыть';

   readAll.classList.toggle('rotate');

});
