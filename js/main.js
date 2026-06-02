const currentYear = new Date().getFullYear();

document.querySelector("#year").textContent = currentYear;
document.querySelector("#footer-year").textContent = currentYear;

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});
