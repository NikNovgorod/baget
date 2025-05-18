console.log("Hello from js");

window.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    const images = document.querySelectorAll(
      ".section-description__icon-box img"
    );

    images.forEach((img, index) => {
      img.classList.toggle("img-rotate");
    });
  }
});
