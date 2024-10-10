const header = document.querySelector('header');
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 100)
})
const video = document.querySelector('video');
video.playbackRate = 1.0; // Adjust the speed as needed
const menuButton = document.getElementById('menu-button');
const navlist = document.getElementById('navlist');

menuButton.addEventListener('click', () => {
    navlist.classList.toggle('active');
});

