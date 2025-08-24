document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggle-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      const fullText = card.querySelector(".full-text");

      if (fullText.style.display === "block") {
        fullText.style.display = "none";
        btn.textContent = "Saiba mais";
      } else {
        fullText.style.display = "block";
        btn.textContent = "Mostrar menos";
      }
    });
  });
});
