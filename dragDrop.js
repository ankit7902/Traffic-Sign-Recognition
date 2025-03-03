document.addEventListener("DOMContentLoaded", function () {
    const dropArea = document.getElementById("dropArea");
    const imageUpload = document.getElementById("imageUpload");

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
