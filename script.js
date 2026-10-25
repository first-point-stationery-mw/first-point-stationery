/* ============================================================
   FIRST POINT STATIONERY & GENERAL SUPPLIES
   script.js
   ============================================================ */

(function () {
  "use strict";

  /* ----------------------------------------------------------
     1. CURRENT YEAR IN FOOTER
     ---------------------------------------------------------- */
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ----------------------------------------------------------
     2. MOBILE NAVIGATION MENU
     ---------------------------------------------------------- */
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  function openMenu() {
    if (!navLinks || !menuBtn) return;
    navLinks.classList.add("open");
    menuBtn.setAttribute("aria-expanded", "true");
    menuBtn.setAttribute("aria-label", "Close navigation menu");
    menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }

  function closeMenu() {
    if (!navLinks || !menuBtn) return;
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open navigation menu");
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
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

  // Close the menu when a navigation link is clicked
  if (navLinks) {
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  // Close the menu when clicking outside of it
  document.addEventListener("click", function (event) {
    if (!navLinks || !menuBtn) return;
    if (!navLinks.classList.contains("open")) return;

    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedMenuBtn = menuBtn.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuBtn) {
      closeMenu();
    }
  });

  // Close the menu with the Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && navLinks && navLinks.classList.contains("open")) {
      closeMenu();
      if (menuBtn) menuBtn.focus();
    }
  });

  /* ----------------------------------------------------------
     3. STICKY HEADER SHADOW ON SCROLL
     ---------------------------------------------------------- */
  const header = document.querySelector("header");

  function handle
