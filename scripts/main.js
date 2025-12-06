// ---- допоміжна функція для безпечного scrollIntoView ----
function smoothScrollTo(selector) {
  requestAnimationFrame(() => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  });
}

// ------------------------------------------------------------
(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  const links = document.querySelectorAll('.js-site-nav_link');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute("aria-expanded") === "true";

    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    closeMenuBtn.setAttribute("aria-expanded", !isMenuOpen);

    mobileMenu.classList.toggle("is-open");

    // Легше для TBT через requestIdleCallback
    requestIdleCallback(() => {
      const method = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
      bodyScrollLock[method](document.body);
    });
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  // Закриття меню при ресайзі
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;

    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);

    requestIdleCallback(() => {
      bodyScrollLock.enableBodyScroll(document.body);
    });
  });

  // Клік по пунктах меню
  links.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove("is-open");

      requestIdleCallback(() => {
        bodyScrollLock.enableBodyScroll(document.body);
      });

      const href = link.getAttribute('href');

      if (href.startsWith('#')) {
        smoothScrollTo(href);
      } else {
        window.location.href = href;
      }
    });
  });

})();
