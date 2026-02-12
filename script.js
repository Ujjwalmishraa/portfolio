// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

// Contact form (Formspree)
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
const errorMessage = document.getElementById("errorMessage");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Hide old messages
    successMessage?.classList.add("hidden");
    errorMessage?.classList.add("hidden");

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpqjqbkv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        successMessage?.classList.remove("hidden");
        form.reset();

        setTimeout(() => {
          successMessage?.classList.add("hidden");
        }, 3000);
      } else {
        throw new Error("Form submit failed");
      }
    } catch (error) {
      console.error("Formspree error:", error);
      errorMessage?.classList.remove("hidden");

      setTimeout(() => {
        errorMessage?.classList.add("hidden");
      }, 3000);
    }
  });
}
