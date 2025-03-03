document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const themeToggle = document.getElementById("themeToggle");
    const imageUpload = document.getElementById("imageUpload");
    const previewImage = document.getElementById("previewImage");
    const removeButton = document.getElementById("removeButton");
    const predictButton = document.getElementById("predictButton");
    const predictionResult = document.getElementById("predictionResult");
    const dropArea = document.getElementById("dropArea");
    
    
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

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

    imageUpload.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewImage.src = e.target.result;
                previewImage.classList.remove("hidden");
                previewImage.classList.add("show");
                removeButton.classList.remove("hidden");
            };
            reader.readAsDataURL(file);
        }
    });

    predictButton.addEventListener("click", function () {
        if (!previewImage.src || previewImage.classList.contains("hidden")) {
            alert("⚠️ Please upload an image first!");
            return;
        }
        predictButton.classList.add("loading");
        predictButton.disabled = true;
        predictionResult.classList.remove("show");
        predictionResult.innerText = "Processing...";

        setTimeout(() => {
            predictButton.classList.remove("loading");
            predictButton.disabled = false;
            predictionResult.innerText = "🚦 Predicted Sign: STOP";
            predictionResult.classList.add("show");
        }, 3000);
    });

    removeButton.addEventListener("click", function () {
        previewImage.src = "";
        previewImage.classList.add("hidden");
        removeButton.classList.add("hidden");
        predictionResult.classList.remove("show");
        predictionResult.innerText = "";
        imageUpload.value = "";
    });

    dropArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropArea.classList.add("active");
    });

    dropArea.addEventListener("dragleave", () => {
        dropArea.classList.remove("active");
    });

    dropArea.addEventListener("drop", (e) => {
        e.preventDefault();
        dropArea.classList.remove("active");

        if (e.dataTransfer.files.length) {
            imageUpload.files = e.dataTransfer.files;
            imageUpload.dispatchEvent(new Event("change"));
        }
    });
});
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
