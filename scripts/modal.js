(() => {
    const refs = {
      openModalBtn: document.querySelectorAll("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
      mobileMenu: document.querySelector(".js-menu-container"),
    openMenuBtn: document.querySelector(".js-open-menu"),
   closeMenuBtn: document.querySelector(".js-close-menu"),
    };
  
   refs.openModalBtn.forEach(btn => {
    btn.addEventListener("click", toggleModal);
  });
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle('modal-open');
      refs.modal.classList.toggle("is-hidden");
      refs.mobileMenu.classList.remove("is-open");
      refs.closeMenuBtn.setAttribute("aria-expanded", false);
        refs.openMenuBtn.setAttribute("aria-expanded", false);

    //      const isMenuOpen =
    //   refs.openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    //   console.log()
    //     const scrollLockMethod = isMenuOpen
    //   ? 'disableBodyScroll'
    //   : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);
     if (document.body.classList.contains('modal-open')) {
    bodyScrollLock.disableBodyScroll(document.body);
  } else {
    bodyScrollLock.enableBodyScroll(document.body);
  }
    }

    refs.modal.addEventListener('click', (e) => {
  if (e.target === refs.modal) {
    // refs.modal.style.display = 'none';
    // document.body.classList.remove('modal-open');
    toggleModal()
  }
});
  })();