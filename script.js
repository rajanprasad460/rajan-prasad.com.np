/**
 * Dr. Rajan Prasad - Academic Portfolio Website Engine
 * Manages Core UX UI Interactivity, Animation Initializations, and Mobile Menu States.
 */

document.addEventListener("DOMContentLoaded", function () {
  
  // 1. Initialize Scroll Animation Engine (AOS)
  if (typeof AOS !== "undefined") {
    AOS.init({ 
      duration: 700, 
      once: true 
    });
  }

  // 2. Automated Copyright Year Updater
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 3. Mobile Sidebar Drawer Navigation Logic
  const menuToggleBtn = document.getElementById("menuToggleBtn");
  const blurOverlay = document.getElementById("blurOverlay");

  function openMobileMenu() {
    document.body.classList.add("mobile-nav-active");
    document.body.style.overflow = "hidden"; // Block page content scroll while drawer is open
  }

  function closeMobileMenu() {
    document.body.classList.remove("mobile-nav-active");
    document.body.style.overflow = ""; // Restore default background scroll
  }

  // Toggle drawer state upon hamburger button tap
  if (menuToggleBtn) {
    menuToggleBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      if (document.body.classList.contains("mobile-nav-active")) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  // Tap backdrop overlay to safely fold sidebar away
  if (blurOverlay) {
    blurOverlay.addEventListener("click", closeMobileMenu);
  }

  // Intercept anchor clicks within drawer links to auto-collapse drawer view
  const navLinks = document.querySelectorAll("#navMenuLinks a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      closeMobileMenu();
    });
  });

  // 4. Typing Effect Engine Control Setup (Typed.js)
  const selectTyped = document.querySelector('.typed');
  if (selectTyped && typeof Typed !== "undefined") {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    if (typed_strings) {
      typed_strings = typed_strings.split(',');
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  }
  
});