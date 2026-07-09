// Softtrade IV

document.addEventListener("DOMContentLoaded", function () {
    console.log("Softtrade IV website loaded successfully.");

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function () {
            console.log("Navigating to:", this.textContent);
        });
    });
});
