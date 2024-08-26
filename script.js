const imgContainer = document.querySelector('.image-container');
const imgContent = document.querySelectorAll('.img-content');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalImg = document.querySelector('.modal__img');
const closeModal = document.querySelector('.close__modal');

const setModalVisibility = (isVisible) => {
  modal.classList.toggle('hidden', !isVisible);
  overlay.classList.toggle('hidden', !isVisible);
  localStorage.setItem('Modal__status', JSON.stringify(isVisible));
};

const storedModalStatus = localStorage.getItem('Modal__status');
const storedImgSrc = localStorage.getItem('img__status');

if (storedModalStatus) {
  const isModalVisible = JSON.parse(storedModalStatus);
  setModalVisibility(isModalVisible);
  if (isModalVisible && storedImgSrc) {
    modalImg.src = storedImgSrc;
  }
}

imgContainer.addEventListener('click', e => {
  if (e.target.classList.contains('img-content')) {
    setModalVisibility(true);
    modalImg.src = e.target.src;
    localStorage.setItem('img__status', e.target.src);
  }
});

modal.addEventListener('click', e => {
  if (e.target === closeModal || e.target === overlay) {
    setModalVisibility(false);
    modalImg.src = '';
  }
});

document.addEventListener('keydown', e => {
  (e.key === 'Escape') && setModalVisibility(false);
});
