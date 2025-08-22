(async () => {
  const pageId = "home";
  const url =
    "https://counter.signalwerk.workers.dev/?page=" +
    encodeURIComponent(pageId);

  // Increment once using POST (simple request: no preflight, no double count)
  const res = await fetch(url, { method: "POST" });
  document.getElementById("counter").textContent = await res.text();
})();
