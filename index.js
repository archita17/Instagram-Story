function upload_Image() {
  const popup = document.createElement("div");
  popup.classList.add("popup");

  popup.innerHTML = `
      <div class="popup-content">
        <span class="close-btn">&times;</span>
        <h2>Upload Image</h2>
        <input type="file" accept="image/*" />
      </div>
    `;

  document.body.appendChild(popup);

  popup.querySelector(".close-btn").onclick = () => {
    popup.remove();
  };
}
