// Mobile menu toggle
document
  .querySelector(".mobile-menu-btn")
  .addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("show");
  });

// Project filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Update active button
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    // Filter projects
    projectCards.forEach((card) => {
      if (
        filterValue === "all" ||
        card.getAttribute("data-category").includes(filterValue)
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
