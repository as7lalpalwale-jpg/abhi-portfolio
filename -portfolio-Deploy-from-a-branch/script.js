const typing = document.getElementById("typing");
const words = ["BCA Student", "Web Developer", "Python Learner", "Java Developer"];
let wordIndex = 0, charIndex = 0, deleting = false;

function typeEffect() {
  const word = words[wordIndex];
  typing.textContent = deleting ? word.slice(0, --charIndex) : word.slice(0, ++charIndex);
  let speed = deleting ? 55 : 90;
  if (!deleting && charIndex === word.length) { deleting = true; speed = 1200; }
  else if (deleting && charIndex === 0) { deleting = false; wordIndex = (wordIndex + 1) % words.length; speed = 350; }
  setTimeout(typeEffect, speed);
}
typeEffect();

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.getElementById("themeBtn").textContent =
    document.body.classList.contains("light") ? "☀" : "☾";
});

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => document.getElementById("navLinks").classList.remove("show"));
});

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Your form is working on the front end. Connect it to a backend/email service to receive real messages.");
  e.target.reset();
});
