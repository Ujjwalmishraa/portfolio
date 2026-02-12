// Mobile menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Contact form (Formspree)
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xpqjqbkv", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      successMessage.classList.remove("hidden");
      errorMessage.classList.add("hidden");
      form.reset();
    } else {
      throw new Error("Failed");
    }
  } catch (err) {
    errorMessage.classList.remove("hidden");
    successMessage.classList.add("hidden");
  }
});
