document.addEventListener("DOMContentLoaded", function () {
    const predictButton = document.getElementById("predictButton");
    const predictionResult = document.getElementById("predictionResult");
    const previewImage = document.getElementById("previewImage");

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
});
