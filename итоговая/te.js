


const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modalImg');

const openModal = (event) => {
  modal.style.display = 'block';
  modalImg.src = event.target.src;
};

const closeModal = () => {
  modal.style.display = 'none';
};

images.forEach((image) => {
  image.addEventListener('click', openModal);
});

const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', closeModal);

