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
setTimeout(() => {
  document.getElementById("consultationForm").classList.remove("hidden");
}, 10000);

const closeForm = () => {
  document.getElementById("consultationForm").classList.add("hidden");
};
const openForm = () => {
  document.getElementById("consultationForm").classList.remove("hidden");
};

document
  .getElementById("userForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    let submitButton = document.getElementById("submitButton");

    // Disable the button and change text
    submitButton.disabled = true;
    submitButton.innerHTML = "Submitting...";

    // Simulate a delay (e.g., 3 seconds) for form processing
    setTimeout(() => {
      submitButton.innerHTML = "Submitted ✅";
      submitButton.classList.remove("bg-yellow-500");
      submitButton.classList.add("bg-green-500");
    }, 6000);

    const formData = new FormData(this);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwAbpLeMVf-wq0-Tg2Kgi3WIsY5G-TrIB9s6WHBFO7_gJiqO_CTFY7LXNjlDzdCApVSXQ/exec ",
        {
          method: "POST",
          body: formData, // Use FormData for proper form submission
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        alert("✅ Form submitted successfully!");
        document.getElementById("userForm").reset();
        location.reload();
      } else {
        alert(`⚠️ Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("❌ Network error. Please try again.");
    }
  });

document
  .getElementById("userForm2")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    let submitButton = document.getElementById("submitButton2");

    // Disable the button and change text
    submitButton.disabled = true;
    submitButton.innerHTML = "Submitting...";

    // Simulate a delay (e.g., 3 seconds) for form processing
    setTimeout(() => {
      submitButton.innerHTML = "Submitted ✅";
      submitButton.classList.remove("bg-yellow-500");
      submitButton.classList.add("bg-green-500");
    }, 6000);
    const formData = new FormData(this);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwAbpLeMVf-wq0-Tg2Kgi3WIsY5G-TrIB9s6WHBFO7_gJiqO_CTFY7LXNjlDzdCApVSXQ/exec ",
        {
          method: "POST",
          body: formData, // Use FormData for proper form submission
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        alert("✅ Form submitted successfully!");
        document.getElementById("userForm").reset();
        location.reload();
      } else {
        alert(`⚠️ Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("❌ Network error. Please try again.");
    }
  });
