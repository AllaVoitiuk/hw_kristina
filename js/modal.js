(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();








// function openModal() {
//   document.querySelector('.backdrop').style.display = "block";
//   document.querySelector('body').style.overflowY = 'hidden';
//  

// function closeModal() {
//   document.querySelector('.backdrop').style.display = "none";
//   document.querySelector('body').style.overflowY = 'visible';
// }


// //закриття модалки по кліку поза модалки
// window.addEventListener("click", function(event) {
//   if (event.target === document.querySelector('.backdrop')) {
//     closeModal();
//   }
// });

//закрытие модалки по esc

//  window.addEventListener("keydown", (e) => {
//   if (e.keyCode === 27) {

//      closeModal();
//    }
//  })
