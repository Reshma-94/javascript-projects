const searchBtn = document.querySelector('.search');
const searchContainer = document.querySelector('.search-container');
const searchInput = document.querySelector('.search-input');

searchBtn.addEventListener('click', () => {
  searchContainer.classList.toggle('active');
  searchInput.focus();
});
