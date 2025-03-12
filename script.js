let currentOpen = null;

function toggleFAQ(id) {
  if (currentOpen && currentOpen !== id) {
    document.getElementById("faq" + currentOpen).classList.add("hidden");
  }
  const answer = document.getElementById("faq" + id);
  answer.classList.toggle("hidden");
  currentOpen = answer.classList.contains("hidden") ? null : id;
}
