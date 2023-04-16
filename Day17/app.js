const hamBtn = document.querySelector('.hamburger');
const navItm = document.querySelector('.nav-items');

hamBtn.addEventListener('click', function() {
    hamBtn.classList.toggle('is-active')
    navItm.classList.toggle('is-active')
})
