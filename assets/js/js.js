let count = 0;
let ClickName = 'linkClick1';
let lineName = 'lineName';

const linkClick1 = document.querySelector('.linkClick1');
const linkClick2 = document.querySelector('.linkClick2');
const linkClick3 = document.querySelector('.linkClick3');
const linkClick4 = document.querySelector('.linkClick4');

const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const line4 = document.querySelector('.line4');


linkClick1.addEventListener('click', () => {
    removeLink();
    line1.classList.add('active')
});
linkClick2.addEventListener('click', () => {
    removeLink();
    line2.classList.add('active')
});
linkClick3.addEventListener('click', () => {
    removeLink();
    line3.classList.add('active')
});
linkClick4.addEventListener('click', () => {
    removeLink();
    line4.classList.add('active')
});

function removeLink() {
    line1.classList.remove('active');
    line2.classList.remove('active');
    line3.classList.remove('active');
    line4.classList.remove('active');
}