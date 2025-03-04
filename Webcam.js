document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const webcamButton = document.getElementById("webcamButton");
    const captureButton = document.getElementById("captureButton");
    const stopWebcamButton = document.getElementById("stopWebcamButton");
    const webcam = document.getElementById("webcam");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let stream = null;

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    webcamButton.addEventListener("click", async function () {
        try {
            stream = await navigator.mediaDevices.getUserMedia({ video: true });
            webcam.srcObject = stream;
            webcam.classList.remove("hidden");
            captureButton.classList.remove("hidden");
            stopWebcamButton.classList.remove("hidden");
        } catch (error) {
            console.error("Webcam access denied", error);
            alert("⚠️ Unable to access webcam!");
        }
    });

    captureButton.addEventListener("click", function () {
        canvas.width = webcam.videoWidth;
        canvas.height = webcam.videoHeight;
        ctx.drawImage(webcam, 0, 0);
        
        let previewImage = document.getElementById("previewImage");
        let removeButton = document.getElementById("removeButton");
        previewImage.src = canvas.toDataURL("image/png");
        previewImage.classList.remove("hidden");
        removeButton.classList.remove("hidden");

        stopWebcam();
    });

    stopWebcamButton.addEventListener("click", function () {
        stopWebcam();
    });

    function stopWebcam() {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }
        webcam.classList.add("hidden");
        captureButton.classList.add("hidden");
        stopWebcamButton.classList.add("hidden");
    }
});
