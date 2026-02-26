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

// Add this to your existing script.js
const icons = document.querySelectorAll('.icon');

icons.forEach((icon, index) => {
    icon.style.opacity = "0";
    icon.style.transform = "scale(0.5)";
    
    setTimeout(() => {
        icon.style.transition = "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        icon.style.opacity = "1";
        icon.style.transform = "scale(1)";
    }, 500 + (index * 150)); // Starts after benefits list animation
});