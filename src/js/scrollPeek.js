(function () {
  scrollPeek = {};
  scrollPeek.scroll =
    window.requestAnimationFrame ||
    // IE Fallback
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };

  scrollPeek.update = function () {
    const elementsToShow = document.querySelectorAll(
      ".active-on-scroll-to:not(.scroll-active)"
    );

    const offsetElements = document.querySelectorAll(
      ".active-on-scroll-offset"
    );

    const scrollOnClick = document.querySelectorAll(".scroll-link");

    Array.prototype.forEach.call(scrollOnClick, function (element) {
      const scrollToId = A.getIdFromTrigger(element);
      if (!scrollToId) return;
      const scrollToElement = document.getElementById(scrollToId);
      if (typeof scrollToElement !== "element") return;
      const rect = scrollToElement.getBoundingClientRect();
      if (rect.y - 5 <= 0 && rect.y + rect.height - 5 > 0) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });

    Array.prototype.forEach.call(offsetElements, function (element) {
      if (A.getDocumentScrollTop() >= element.getAttribute("data-offset")) {
        element.classList.add("scroll-active");
      }
      if (A.getDocumentScrollTop() < element.getAttribute("data-offset")) {
        element.classList.remove("scroll-active");
      }
    });
    Array.prototype.forEach.call(elementsToShow, function (element) {
      if (A.isElementInViewport(element)) {
        element.classList.add("scroll-active");
      }
    });
    scrollPeek.scroll.call(window, scrollPeek.update);
  };

  scrollPeek.init = function () {
    scrollPeek.update();
    const scrollOnClick = document.querySelectorAll(".scroll-link");
    Array.prototype.forEach.call(scrollOnClick, function (element) {
      element.addEventListener("click", (e) => {
        const scrollToId = A.getIdFromTrigger(element);
        const scrollToElement = document.getElementById(scrollToId);
        const offset = scrollToElement.getBoundingClientRect().y;
        window.anime({
          targets: "html",
          scrollTop: A.getDocumentScrollTop() + offset,
          duration: 500,
          easing: "easeOutQuint",
        });
      });
    });
  };

  A.scrollPeek = scrollPeek;
})();
