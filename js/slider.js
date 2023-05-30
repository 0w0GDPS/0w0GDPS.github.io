const next = document.getElementById('next');
const prev = document.getElementById('prev');
const BlocksArr = document.getElementsByClassName('list-link-item');
const blocksLenght = document.getElementsByClassName('list-link-item').length;
let iter = 0;

next.addEventListener('click', (e) => {
    e.preventDefault();
    NextSlide();
})

prev.addEventListener('click', (e) => {
    e.preventDefault();
    PrevSlide();
})

function ShowImage() {
    for(let j = 0; j < blocksLenght; j++) {
        if(iter == j) {
            BlocksArr[j].classList.add('active');
            BlocksArr[j].querySelector('img').classList.add('active');
            break;
        }
    }
}

function NextSlide() {
    iter++;
    if(iter >= blocksLenght) iter = 0;

    let activeBlock = document.querySelector('div .active');
    let img = document.querySelector('.list-link-img.active');
    img.classList.remove('active');
    activeBlock.classList.remove('active');
    console.log(iter);
    ShowImage();
}

function PrevSlide() {
    iter--;
    if(iter < 0) iter = blocksLenght - 1;

    let activeBlock = document.querySelector('div .active');
    let img = document.querySelector('.list-link-img.active');
    img.classList.remove('active');
    activeBlock.classList.remove('active');
    console.log(iter);
    ShowImage();
}