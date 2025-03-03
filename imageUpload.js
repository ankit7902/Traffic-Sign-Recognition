document.addEventListener("DOMContentLoaded", function () {
    const imageUpload = document.getElementById("imageUpload");
    const previewImage = document.getElementById("previewImage");
    const removeButton = document.getElementById("removeButton");

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

    removeButton.addEventListener("click", function () {
        previewImage.src = "";
        previewImage.classList.add("hidden");
        removeButton.classList.add("hidden");
        imageUpload.value = "";
    });
});
