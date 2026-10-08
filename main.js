(function () {
  var btn = document.querySelector(".menu-btn");
  var links = document.getElementById("nav-links");
  if (btn && links) {
    btn.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) { links.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); btn.setAttribute("aria-label", "Open menu"); }
    });
  }
  // Pause one example when the other starts.
  var video = document.getElementById("explainer");
  var deck = document.getElementById("deck");
  if (video && deck) {
    video.addEventListener("play", function () {
      try { deck.contentWindow.document.querySelectorAll("audio,video").forEach(function (m) { m.pause(); }); } catch (e) {}
    });
    // Focus the deck on click so arrow keys go to it.
    deck.addEventListener("load", function () {
      try {
        deck.contentWindow.addEventListener("pointerdown", function () { video.pause(); deck.focus(); });
      } catch (e) {}
    });
  }
})();
