document.addEventListener("DOMContentLoaded", () => {
  const popupImages = document.querySelectorAll("[data-popup]");
  popupImages.forEach(image => {
    image.addEventListener("click", () => {
      const popup = document.createElement("div");
      popup.classList.add("popup");
      popup.innerHTML = `
        <div class="popup-content">
          <img src="${image.src}" alt="${image.alt}">
          <button class="close-popup">Close</button>
        </div>
      `;
      document.body.appendChild(popup);

      const closeButton = popup.querySelector(".close-popup");
      closeButton.addEventListener("click", () => {
        popup.remove();
      });
    });
  });
});
