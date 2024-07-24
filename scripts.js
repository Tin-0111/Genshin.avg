function showImage(imageSrc) {
    const imageDisplay = document.getElementById('image-display');
    const displayedImage = document.getElementById('displayed-image');
    displayedImage.src = imageSrc;
    imageDisplay.style.display = 'block';
}

function showAvgButtons() {
    const buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.style.display = 'flex';
}
