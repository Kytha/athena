import AnchorJS from "anchor-js";
const anchors = new AnchorJS();
document.addEventListener("DOMContentLoaded", function (event) {
  anchors.options = {
    placement: "right",
    visible: "hover",
  };
  anchors.add(".anchored");
});

window.addEventListener("load", function (event) {
  document.querySelectorAll("pre code").forEach((block) => {
    hljs.highlightBlock(block);
  });
});
