const sideMenu = document.getElementById('sidebar');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
});

window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 1200px)").matches) {
    sideMenu.style.display = 'block';
  }
})

darkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode-vars');
  darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
  darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})