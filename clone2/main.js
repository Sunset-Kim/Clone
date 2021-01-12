const toggleBtn = document.querySelector('.nav_toggleBtn')
const menu = document.querySelector('.list')
const icons = document.querySelector('.snsBox')

toggleBtn.addEventListener('click',() => {
  menu.classList.toggle('active')
  icons.classList.toggle('active')
})
