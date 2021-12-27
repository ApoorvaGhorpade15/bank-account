let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
}

menu.onclick = () =>{
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
}




const submitBtn = document.querySelector('.submit');
const okBtn = document.querySelector('.ok-btn');
const popupBox = document.querySelector('.pop-up-overlay');

submitBtn.addEventListener('click',() => {
        popupBox.classList.add('active')
})

okBtn.addEventListener('click', () => {
  popupBox.classList.remove('active')
})