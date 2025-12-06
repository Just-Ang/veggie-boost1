
(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    mobileMenu: document.querySelector(".js-menu-container"),
    openMenuBtn: document.querySelector(".js-open-menu"),
    closeMenuBtn: document.querySelector(".js-close-menu"),
  };

  function toggleModal() {
    const show = !refs.modal.classList.contains("is-hidden");

    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle("is-hidden");

    refs.mobileMenu.classList.remove("is-open");
    refs.openMenuBtn.setAttribute("aria-expanded", false);
    refs.closeMenuBtn.setAttribute("aria-expanded", false);

    requestIdleCallback(() => {
      if (show) {
        bodyScrollLock.enableBodyScroll(document.body);
      } else {
        bodyScrollLock.disableBodyScroll(document.body);
      }
    });
  }

  refs.openModalBtn.forEach(btn => {
    btn.addEventListener("click", toggleModal);
  });

  refs.closeModalBtn.addEventListener("click", toggleModal);

  // Закриття модалки по кліку на фон
  refs.modal.addEventListener('click', (e) => {
    if (e.target === refs.modal) toggleModal();
  });

})();