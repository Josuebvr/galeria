document.querySelectorAll(".item img").forEach(img => {
  img.addEventListener("click", () => {
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.innerHTML = `<img src="${img.src}" alt=""><span>X</span>`;
    document.body.appendChild(overlay);

    overlay.querySelector("span").addEventListener("click", () => {
      overlay.remove();
    });
  });
});
