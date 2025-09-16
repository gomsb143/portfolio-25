// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
});

// Testimonials slider
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
