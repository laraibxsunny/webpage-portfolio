const button = document.querySelector("button");

function toggleFunFact() {
  const isExpanded = button.getAttribute("aria-expanded");

  if (isExpanded === "true") {
    button.setAttribute("aria-expanded", "false");
    button.nextElementSibling.setAttribute("hidden", "");
  } else if (isExpanded === "false") {
    button.setAttribute("aria-expanded", "true");
    button.nextElementSibling.removeAttribute("hidden");
  }
}

button.addEventListener("click", toggleFunFact);
