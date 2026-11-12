// MAYBE SOUND — effect switcher + footer year.
(function () {
  "use strict";
  var year = document.getElementById("year");
  if (year) year.textContent = "© " + new Date().getFullYear();

  var TEXT = {
    delay: "Mono delay with musical band and mode/switch interactions — every band and gesture specified, nothing accidental.",
    loop: "Loop/Sample memory for capturing and replaying time — the pedal remembers, then hands it back on your terms.",
    direct: "DIRECT effects, immediate and unmediated. No menus between the gesture and the sound."
  };

  var text = document.getElementById("fx-text");
  var buttons = Array.prototype.slice.call(document.querySelectorAll(".fx-btn"));
  if (!text || !buttons.length) return;

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) {
        b.classList.remove("is-active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-pressed", "true");
      text.textContent = TEXT[btn.getAttribute("data-fx")] || "";
    });
  });
})();
