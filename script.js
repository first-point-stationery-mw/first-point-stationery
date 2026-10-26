/* ============================================================
   FIRST POINT STATIONERY & GENERAL SUPPLIES
   script.js
   ============================================================ */

(function () {
  "use strict";

  /* ==========================================================
     1. CURRENT YEAR IN FOOTER
     ========================================================== */

  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }


  /* ==========================================================
     2. MOBILE NAVIGATION MENU
     ========================================================== */

  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  function openMenu() {
    if (!navLinks || !menuBtn) return;

    navLinks.classList.add("open");

    menuBtn.setAttribute("aria-expanded", "true");
    menuBtn.setAttribute("aria-label", "Close navigation menu");

    menuBtn.innerHTML =
      '<i class="fa-solid fa-xmark"></i>';
  }


  function closeMenu() {
    if (!navLinks || !menuBtn) return;

    navLinks.classList.remove("open");

    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open navigation menu");

    menuBtn.innerHTML =
      '<i class="fa-solid fa-bars"></i>';
  }


  function toggleMenu() {
    if (!navLinks) return;

    if (navLinks.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  }


  if (menuBtn) {
    menuBtn.addEventListener("click", toggleMenu);
  }


  /* Close menu when a navigation link is clicked */

  if (navLinks) {
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }


  /* Close menu when clicking outside */

  document.addEventListener("click", function (event) {

    if (!navLinks || !menuBtn) return;

    if (!navLinks.classList.contains("open")) return;

    const clickedInsideMenu =
      navLinks.contains(event.target);

    const clickedMenuButton =
      menuBtn.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
      closeMenu();
    }
  });


  /* Close menu using Escape key */

  document.addEventListener("keydown", function (event) {

    if (
      event.key === "Escape" &&
      navLinks &&
      navLinks.classList.contains("open")
    ) {
      closeMenu();

      if (menuBtn) {
        menuBtn.focus();
      }
    }
  });


  /* Close mobile menu when screen becomes desktop size */

  window.addEventListener("resize", function () {

    if (window.innerWidth > 768) {
      closeMenu();
    }

  });


  /* ==========================================================
     3. STICKY HEADER SHADOW
     ========================================================== */

  const header = document.querySelector("header");

  function handleScroll() {

    if (!header) return;

    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  }

  window.addEventListener("scroll", handleScroll);

  handleScroll();


  /* ==========================================================
     4. REVEAL ELEMENTS WHEN SCROLLING
     ========================================================== */

  const revealElements =
    document.querySelectorAll(".reveal");


  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      function (entries, observerInstance) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observerInstance.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.12
      }
    );


    revealElements.forEach(function (element) {
      observer.observe(element);
    });

  } else {

    /* Fallback for older browsers */

    revealElements.forEach(function (element) {
      element.classList.add("visible");
    });

  }


  /* ==========================================================
     5. SMOOTH SCROLL FOR INTERNAL LINKS
     ========================================================== */

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });


  /* ==========================================================
     END OF SCRIPT
     ========================================================== */

})();
