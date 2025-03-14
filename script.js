let currentOpen = null;

function toggleFAQ(id) {
  if (currentOpen && currentOpen !== id) {
    document.getElementById("faq" + currentOpen).classList.add("hidden");
  }
  const answer = document.getElementById("faq" + id);
  answer.classList.toggle("hidden");
  currentOpen = answer.classList.contains("hidden") ? null : id;
}

document.addEventListener("DOMContentLoaded", function () {
  function toggleFixedSection() {
    const firstSection = document.getElementById("first-section");
    const fixedSection = document.getElementById("fixedSection");
    console.log(firstSection);
    console.log(fixedSection);

    if (!firstSection || !fixedSection) {
      console.error("Element not found!");
      return; // Stop execution if elements are missing
    }

    const sectionHeight = firstSection.offsetHeight;
    const scrolled = window.scrollY;

    if (scrolled > sectionHeight * 0.3) {
      fixedSection.classList.add("visible-section");
      fixedSection.classList.remove("hidden-section");
    } else {
      fixedSection.classList.add("hidden-section");
      fixedSection.classList.remove("visible-section");
    }
  }

  window.addEventListener("scroll", toggleFixedSection);
});
