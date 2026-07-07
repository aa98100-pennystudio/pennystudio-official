(function () {
  "use strict";

  var body = document.body;
  var navToggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("#site-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var isOpen = body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        body.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  var currentPage = body.getAttribute("data-page");
  if (currentPage) {
    document.querySelectorAll("[data-nav-page]").forEach(function (link) {
      if (link.getAttribute("data-nav-page") === currentPage) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  document.querySelectorAll(".faq-question").forEach(function (button) {
    button.addEventListener("click", function () {
      var item = button.closest(".faq-item");
      var answer = item ? item.querySelector(".faq-answer") : null;
      var isOpen = item && item.classList.toggle("is-open");

      button.setAttribute("aria-expanded", String(Boolean(isOpen)));
      if (answer) {
        answer.hidden = !isOpen;
      }
    });
  });

  var filterButtons = document.querySelectorAll("[data-filter]");
  var caseCards = document.querySelectorAll("[data-category]");
  var emptyState = document.querySelector("[data-empty-state]");

  if (filterButtons.length && caseCards.length) {
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var filter = button.getAttribute("data-filter");
        var visibleCount = 0;

        filterButtons.forEach(function (item) {
          item.setAttribute("aria-pressed", String(item === button));
        });

        caseCards.forEach(function (card) {
          var categories = (card.getAttribute("data-category") || "").split(" ");
          var shouldShow = filter === "all" || categories.indexOf(filter) !== -1;
          card.hidden = !shouldShow;
          if (shouldShow) {
            visibleCount += 1;
          }
        });

        if (emptyState) {
          emptyState.hidden = visibleCount !== 0;
        }
      });
    });
  }

  var backToTop = document.querySelector("[data-back-to-top]");
  if (backToTop) {
    var toggleBackToTop = function () {
      backToTop.classList.toggle("is-visible", window.scrollY > 420);
    };

    window.addEventListener("scroll", toggleBackToTop, { passive: true });
    toggleBackToTop();

    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.querySelectorAll("[data-line-cta]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      var href = link.getAttribute("href");
      window.dispatchEvent(new CustomEvent("penny:line-cta-click", {
        detail: {
          label: link.textContent.trim(),
          page: currentPage || "",
          href: href
        }
      }));

      if (href === "#") {
        event.preventDefault();
        console.info("LINE_URL placeholder clicked. Replace # with the official LINE URL before launch.");
      }
    });
  });

  var revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealItems.length) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }
}());
