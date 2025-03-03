document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        themeToggle.innerText = "☀️ Light Mode";
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");
        themeToggle.innerText = isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
        localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    });
});
