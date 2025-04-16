// Highlight the active nav link
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    const currentPage = window.location.pathname;
    const currentFile = currentPage.split("/").pop().toLowerCase();
  
    navLinks.forEach(link => {
      if (link.getAttribute("href").toLowerCase() === currentFile) {
        link.classList.add("active-link");
      }
    });
  
    // Order button click alert
    const ctaButton = document.querySelector(".cta-button");
    if (ctaButton) {
      ctaButton.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Thank you for your interest! Online orders are coming soon.");
      });
    }
  });
  