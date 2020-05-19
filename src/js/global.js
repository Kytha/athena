(function (window) {
  /**
   * @global
   * @namespace
   * @property {object} A.plugins - Defines all avaliable plugins.
   * @property {object} A.keys - Contains key codes of interest.
   * @property {string} A.version - Indicates the version of Athena.
   * @property {function} A.handleKeyDown
   * @property {function} A.handleKeyUp
   * @property {function} A.handleFocus
   * @property {function} A.handleBlur
   * @property {function} A.throttle
   * @property {function} A.getDocumentScrollLeft
   * @property {function} A.getDocumentScrollTop
   * @property {function} A.AutoInit - Instantiates all current Athena DOM elements as Athena Components.
   * @property {function} A.getIdFromTrigger - Returns Element object from trigger Element data-target.
   * @property {function} A.guid - Generates random uids.
   */
  A = {};
  polyfill();
})(window);

function polyfill() {
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }
}

A.version = "0.1.0";

A.keys = {
  TAB: 9,
  ENTER: 13,
  ESC: 27,
  ARROW_UP: 38,
  ARROW_DOWN: 40,
};

A.plugins = {};

A.tabPressed = false;
A.keyDown = false;

A.Alignments = {
  left: "left",
  bottom: "bottom",
  right: "right",
  overtop: "overtop",
};

/**
 * Event handler which updates global keyDown state.
 * @param {MouseEvent} e
 */
let handleKeyDown = (e) => {
  A.keyDown = true;
  if (
    e.which === A.keys.TAB ||
    e.which === A.keys.ARROW_UP ||
    e.which === A.keys.ARROW_DOWN
  )
    A.tabPressed = true;
};

/**
 * Event handler which updates global keyUp state.
 * @param {MouseEvent} e
 */
let handleKeyUp = (e) => {
  A.keyDown = false;
  if (
    e.which === A.keys.TAB ||
    e.which === A.keys.ARROW_UP ||
    e.which === A.keys.ARROW_DOWN
  )
    A.tabPressed = false;
};

/**
 * @param {MouseEvent} e
 */
let handleFocus = function (e) {
  if (A.keyDown) {
    document.body.classList.add("keyboard-focused");
  }
};

/**
 * @param {MouseEvent} e
 */
let handleBlur = function (e) {
  document.body.classList.remove("keyboard-focused");
};

document.addEventListener("keydown", handleKeyDown, true);
document.addEventListener("keyup", handleKeyUp, true);
document.addEventListener("focus", handleFocus, true);
document.addEventListener("blur", handleBlur, true);

A.getElementByClass = function (els, className) {
  for (let x in els) {
    if (els[x].classList.contains(className)) {
      return els[x];
    }
  }
  return null;
};

A.hasClass = function (className) {
  return function (el) {
    if (!el) return false;
    return el.classList.contains(className);
  };
};

A.getAllElementsByClass = function (els, className) {
  let query = [];
  for (let i in els) {
    if (els[i].classList.contains(className)) {
      query.push(els[i]);
    }
  }
  return query;
};

/**
 * @param {Element} context - root element to start initialization from
 */
A.AutoInit = (context) => {};

/**
 * Generates Unique Random ID.
 * @returns {string} UID.
 */
A.guid = (function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return function () {
    return (
      s4() +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      s4() +
      s4()
    );
  };
})();

/**
 * @param {Element} trigger
 * @returns {string} id
 */
A.getIdFromTrigger = (trigger) => {
  let id = trigger.getAttribute("data-target");
  if (!id) {
    id = trigger.getAttribute("href");
  }
  return id;
};

A.viewPortHeight = function () {
  var de = document.documentElement;

  if (!!window.innerWidth) {
    return window.innerHeight;
  } else if (de && !isNaN(de.clientHeight)) {
    return de.clientHeight;
  }

  return 0;
};

A.getDocumentScrollTop = function () {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
};
// Helper function from: http://stackoverflow.com/a/7557433/274826
A.isElementInViewport = function (el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
};

A.getDocumentScrollLeft = function () {
  return (
    window.pageXOffset ||
    document.documentElement.scrollLeft ||
    document.body.scrollLeft ||
    0
  );
};

/**
 * Searches up the DOM tree untill conditional is meet which is defined in the hook function, or until null is reached
 * @param {Element} el - Child
 * @param {Function} hook - A function which takes a HTMLelement as a parameter and returns a boolean
 * @returns {Element} Positioned parent.
 */
A.getFirstParent = function (el, hook) {
  let p = el.parentElement;
  while (p && hook(p)) {
    p = p.parentElement;
  }
  return p;
};
/**
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time. Normally, the throttled function will run
 * as much as it can, without ever going more than once per `wait` duration;
 * but if you'd like to disable the execution on the leading edge, pass
 * `{leading: false}`. To disable execution on the trailing edge, ditto.
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @param {function} func
 * @param {number} wait
 * @param {Object=} options
 * @returns {Function}
 */
A.throttle = function (func, wait, options) {
  let context, args, result;
  let timeout = null;
  let previous = 0;
  options || (options = {});
  let later = function () {
    previous = options.leading === false ? 0 : getTime();
    timeout = null;
    result = func.apply(context, args);
    context = args = null;
  };
  return function () {
    let now = getTime();
    if (!previous && options.leading === false) previous = now;
    let remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
      context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

// ENTRY POINT
document.addEventListener("DOMContentLoaded", function () {
  A.AutoInit();
});
