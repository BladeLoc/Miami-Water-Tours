// slider
let current = -1;
const slider = e => {
    const images = document.querySelectorAll('.infinity-slider img');
    for(let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0');
    }

    if(e.target.classList[0].split('-')[2] === 'right'){
        current + 1 === images.length ? current = 0 : current++; 
        images[current].classList.remove('opacity0');

    } else if(e.target.classList[0].split('-')[2] === 'left') {
        current - 1 < 0 ? current = images.length - 1 : current--; 
        images[current].classList.remove('opacity0');
    }
}
document.querySelector('.main').addEventListener('click', e =>{
    if(e.target.matches('.btn-to-right')||e.target.matches('.btn-to-left')) slider(e);
});
