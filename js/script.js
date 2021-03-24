const toggle = document.querySelector('#toggler');
const toggleDot = document.querySelector('#toggler-dot');
const navigation = document.querySelector('.navigation');
const socialBar = document.querySelector('.social-bar');


toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    toggleDot.classList.toggle('open');
    navigation.classList.toggle('active');
    socialBar.classList.toggle('inactive');
});

