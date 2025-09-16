// Testimonials slider auto-rotate
let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");
function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}
showTestimonial(currentIndex);

setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}, 4000);

// Simple scroll reveal
const revealElements = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add("visible");
    }
  });
});
