const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const wrapper = document.querySelector('.container');
const list = document.getElementById('list');

openBtn.addEventListener('click', () => {
  wrapper.classList.add('show-nav');
  list.classList.add('active');
  openBtn.style.display = 'none';
  closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  wrapper.classList.remove('show-nav');
  list.classList.remove('active');
  openBtn.style.display = 'block';
  closeBtn.style.display = 'none';
});
