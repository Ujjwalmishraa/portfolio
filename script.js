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
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      successMessage.classList.remove("hidden");
      errorMessage.classList.add("hidden");
      form.reset();

      setTimeout(() => {
        successMessage.classList.add("hidden");
      }, 3000);
    } else {
      throw new Error("Form submit failed");
    }
  } catch (error) {
    errorMessage.classList.remove("hidden");
    successMessage.classList.add("hidden");

    setTimeout(() => {
      errorMessage.classList.add("hidden");
    }, 3000);
  }
});
