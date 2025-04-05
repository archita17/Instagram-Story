function upload_Image() {
    const popup = document.createElement("div");
    popup.classList.add("popup");

    popup.innerHTML = `
      <div class="popup-content">
        <span class="close-btn">&times;</span>
        <h2>Upload Image</h2>
        <input type="file" accept="image/*" id="upload-an-image"/>
        <img id="preview" style="max-width: 200px; margin-top: 10px;" />
      </div>
    `;

    document.body.appendChild(popup);
    let count = 0;
    setTimeout(() => {
        const getUploadedImage = document.getElementById("upload-an-image");
        const showUploadedImage = document.getElementById("preview");

        getUploadedImage.addEventListener("change", function () {
            const file = this.files[0];
            const reader = new FileReader();

            reader.onload = function (event) {
                const image_base64 = event.target.result;
                count++;
                localStorage.setItem(`Story_${count}`, image_base64);
                showUploadedImage.src = image_base64;
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        });

    }, 100);


    popup.querySelector(".close-btn").onclick = () => {
        popup.remove();
    };
}
