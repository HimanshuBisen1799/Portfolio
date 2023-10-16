document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const scrollUpBtn = document.querySelector(".scroll-up-btn");
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".navbar .menu");
    const menuBtnIcon = document.querySelector(".menu-btn i");
  
    window.addEventListener("scroll", function () {
      // Sticky navbar on scroll script
      if (window.scrollY > 20) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
  
      // Scroll-up button show/hide script
      if (window.scrollY > 500) {
        scrollUpBtn.classList.add("show");
      } else {
        scrollUpBtn.classList.remove("show");
      }
    });
  
    // Slide-up script
    scrollUpBtn.addEventListener("click", function () {
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // Smooth scroll on Menu Items click
    document.querySelectorAll(".navbar .menu li a").forEach(function (link) {
      link.addEventListener("click", function () {
        document.documentElement.style.scrollBehavior = "smooth";
      });
    });
  
    // Toggle Navbar
    menuBtn.addEventListener("click", function () {
      menu.classList.toggle("active");
      menuBtnIcon.classList.toggle("active");
    });
  
    // Typing Text Animation
    var typedOptions = {
      strings: [
        "Fullstack Developer",
        "Software Developer",
        "Python Developer",
        "Founder",
        "Author",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };
  
    new Typed(".typing", typedOptions);
    new Typed(".typing-2", typedOptions);
  
    // Owl Carousel
    const carousel = document.querySelector(".carousel");
    if (carousel) {
      new OwlCarousel(carousel, {
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          600: {
            items: 2,
            nav: false,
          },
          1000: {
            items: 3,
            nav: false,
          },
        },
      });
    }
  });
  
  // Owl Carousel class
  class OwlCarousel {
    constructor(element, options) {
      // Initialize Owl Carousel here
    }
  }
  