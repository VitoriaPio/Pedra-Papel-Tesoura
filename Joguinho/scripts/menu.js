const openModalBtn = document.querySelector('.open-modal');
const closeModalBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const fade = document.querySelector('.fade');

// Ativando
const toggleModal = () => {
  [modal, fade].forEach((element) => element.classList.toggle('hide'));
};

// Ações para cada click nas variáveis listadas
[openModalBtn, closeModalBtn, fade].forEach((element) => {
  element.addEventListener('click', () => {
    toggleModal();
  });
});
