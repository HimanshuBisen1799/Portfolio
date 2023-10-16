document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    // Sticky navbar on scroll script
    if (window.scrollY > 20) {
      document.querySelector(".navbar").classList.add("sticky");
    } else {
      document.querySelector(".navbar").classList.remove("sticky");
    }

    // Scroll-up button show/hide script
    if (window.scrollY > 500) {
      document.querySelector(".scroll-up-btn").classList.add("show");
    } else {
      document.querySelector(".scroll-up-btn").classList.remove("show");
    }
  });

  // Slide-up script
  document.querySelector(".scroll-up-btn").addEventListener("click", function () {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelectorAll(".navbar .menu li a").forEach(function (link) {
    // Smooth scroll on Menu Items click
    link.addEventListener("click", function () {
      document.documentElement.style.scrollBehavior = "smooth";
    });
  });

  // Toggle Navbar
  document.querySelector(".menu-btn").addEventListener("click", function () {
    document.querySelector(".navbar .menu").classList.toggle("active");
    document.querySelector(".menu-btn i").classList.toggle("active");
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
