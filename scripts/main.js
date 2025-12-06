

(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  const links = document.querySelectorAll(".js-site-nav_link");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    closeMenuBtn.getAttribute("aria-expanded") === "true" || false;
    closeMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");
    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  });

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      mobileMenu.classList.remove("is-open");
      bodyScrollLock.enableBodyScroll(document.body);

      setTimeout(() => {
        const href = link.getAttribute("href");
        if (href.startsWith("#")) {
          document.querySelector(href).scrollIntoView({
            behavior: "smooth",
          });
        } else {
          window.location.href = href;
        }
      }, 100);
    });
  });
})();
