document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});


document.getElementById("imageUpload").addEventListener("change", function (event) {
    let file = event.target.files[0];
    let previewImage = document.getElementById("previewImage");
    let removeButton = document.getElementById("removeButton");

    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            previewImage.src = e.target.result;
            previewImage.classList.remove("hidden");
            previewImage.classList.add("show");
            removeButton.classList.remove("hidden"); 
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById("predictButton").addEventListener("click", function () {
    let button = this;
    let predictionResult = document.getElementById("predictionResult");
    let previewImage = document.getElementById("previewImage");

 
    if (previewImage.src === "" || previewImage.classList.contains("hidden")) {
        alert("⚠️ Please upload an image first!");
        return;
    }

    button.classList.add("loading");
    button.disabled = true;
    predictionResult.classList.remove("show");
    predictionResult.innerText = "Processing...";
    setTimeout(() => {
        button.classList.remove("loading");
        button.disabled = false;
        predictionResult.innerText = "🚦 Predicted Sign: STOP";
        predictionResult.classList.add("show");
    }, 3000);
});

document.getElementById("removeButton").addEventListener("click", function () {
    let previewImage = document.getElementById("previewImage");
    let removeButton = document.getElementById("removeButton");
    let imageUpload = document.getElementById("imageUpload");
    let predictionResult = document.getElementById("predictionResult");

    previewImage.src = ""; 
    previewImage.classList.add("hidden"); 
    removeButton.classList.add("hidden"); 
    predictionResult.classList.remove("show"); 
    predictionResult.innerText = ""; 

    imageUpload.value = "";
});
const dropArea = document.getElementById("dropArea");
const fileInput = document.getElementById("imageUpload");

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
        fileInput.files = e.dataTransfer.files;
        fileInput.dispatchEvent(new Event("change"));
    }
});
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.getElementById("themeToggle").innerText = 
        document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});
