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

const revealElements = document.querySelectorAll(".reveal, .reveal-divider");

if (revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          revealObserver.unobserve(entry.target);
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
}

const productCarousels = document.querySelectorAll(".product-carousel");

productCarousels.forEach(function (carousel) {
  const items = carousel.querySelectorAll(".carousel-item");
  const prevBtn = carousel.querySelector(".carousel-btn-prev");
  const nextBtn = carousel.querySelector(".carousel-btn-next");
  const dotsContainer = carousel.querySelector(".carousel-dots");

  let currentIndex = 0;
  let autoPlayTimer = null;
  let isUserControlled = false;
  let dots = [];

  function createDots() {
    if (!dotsContainer || items.length <= 1) {
      return;
    }

    dotsContainer.innerHTML = "";

    items.forEach(function (_, index) {
      const dot = document.createElement("button");
      dot.className = "carousel-dot";
      dot.type = "button";
      dot.setAttribute("aria-label", "切换到第 " + (index + 1) + " 张产品图");

      dot.addEventListener("click", function () {
        stopAutoPlayForever();
        currentIndex = index;
        updateCarousel();
      });

      dotsContainer.appendChild(dot);
    });

    dots = dotsContainer.querySelectorAll(".carousel-dot");
  }

  function updateCarousel() {
    items.forEach(function (item, index) {
      item.classList.remove("is-active", "is-prev", "is-next", "is-hidden");

      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      const nextIndex = (currentIndex + 1) % items.length;

      if (index === currentIndex) {
        item.classList.add("is-active");
      } else if (index === prevIndex) {
        item.classList.add("is-prev");
      } else if (index === nextIndex) {
        item.classList.add("is-next");
      } else {
        item.classList.add("is-hidden");
      }
    });

    dots.forEach(function (dot, index) {
      dot.classList.toggle("is-active", index === currentIndex);
    });
  }

  function goToPrev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  }

  function goToNext() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }

  function startAutoPlay() {
    if (items.length <= 1) {
      return;
    }

    autoPlayTimer = setInterval(function () {
      if (!isUserControlled) {
        goToNext();
      }
    }, 3200);
  }

  function stopAutoPlayForever() {
    isUserControlled = true;

    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  if (items.length > 0) {
    createDots();

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        stopAutoPlayForever();
        goToPrev();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        stopAutoPlayForever();
        goToNext();
      });
    }

    updateCarousel();
    startAutoPlay();
  }
});