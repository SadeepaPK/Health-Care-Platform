const animatedElements = document.querySelectorAll(".animate");

window.addEventListener("scroll", () => {
  animatedElements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add("show");
    }
  });
});
