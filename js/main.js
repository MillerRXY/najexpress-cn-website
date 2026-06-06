const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenuClose = document.getElementById("mobileMenuClose");
const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");

if (mobileMenuBtn && mobileMenuClose && mobileMenuOverlay) {
  mobileMenuBtn.addEventListener("click", function () {
    mobileMenuOverlay.classList.add("show");
  });

  mobileMenuClose.addEventListener("click", function () {
    mobileMenuOverlay.classList.remove("show");
  });

  const mobileLinks = mobileMenuOverlay.querySelectorAll("a");

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenuOverlay.classList.remove("show");
    });
  });
}

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2
  }
);

revealElements.forEach(function (element) {
  revealObserver.observe(element);
});