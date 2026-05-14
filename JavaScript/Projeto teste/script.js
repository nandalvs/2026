/* ========================= SCRIPT.JS ========================= */

// REMOVER DOS FAVORITOS

const removeButtons = document.querySelectorAll(".remove-book");

removeButtons.forEach(button => {

  button.addEventListener("click", () => {

    const card = button.closest(".book-card");

    card.style.transition = "0.3s";
    card.style.opacity = "0";
    card.style.transform = "scale(0.8)";

    setTimeout(() => {
      card.remove();
    }, 300);

  });

});