const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const circleElements = document.querySelectorAll('.circle');
const progress = document.querySelector('#progress');
let btnClicked = 1;
let percentageFill = 100 / (circleElements.length - 1);

nextBtn.addEventListener('click', () => {
  const calculateFill = btnClicked * percentageFill;
  progress.style.width = `${calculateFill}%`;
  circleElements[btnClicked++].classList.add('active');
  if (prevBtn.hasAttribute('disabled')) {
    prevBtn.removeAttribute('disabled');
  }
  if (btnClicked === circleElements.length) {
    nextBtn.setAttribute('disabled', true);
  }
});

prevBtn.addEventListener('click', () => {
  let portionFill = progress.style.width.split('%')[0];
  portionFill =
    portionFill >= percentageFill
      ? portionFill - percentageFill
      : percentageFill - portionFill;
  progress.style.width = `${portionFill}%`;
  circleElements[--btnClicked].classList.remove('active');
  if (nextBtn.hasAttribute('disabled')) {
    nextBtn.removeAttribute('disabled');
  }
  if (btnClicked === 1) {
    prevBtn.setAttribute('disabled', true);
  }
});
