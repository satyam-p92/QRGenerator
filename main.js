let imgBox = document.getElementById("imgBox")
let qrImage = document.getElementById("qrimage")
let qrText = document.getElementById("qrtext")


function generateQR() {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.Value;
    imgBox.classList.add("show-img");
}