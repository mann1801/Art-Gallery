document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  function revealSections() {
      sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;
          const sectionBottom = section.getBoundingClientRect().bottom;
          const windowHeight = window.innerHeight;

          if (sectionTop < windowHeight - 100) {
              section.classList.add("show");
          } else if (sectionBottom < 0 || sectionTop > windowHeight) {
              section.classList.remove("show");
          }
      });
  }

  window.addEventListener("scroll", revealSections);
  revealSections();

  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
          navbar.style.top = "-80px";
      } else {
          navbar.style.top = "0";
      }
      lastScrollTop = scrollTop;
  });
});

function flipCard(card) {
  card.classList.toggle("flipped");
}

