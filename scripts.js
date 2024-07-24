function showAvgButtons() {
    const buttonContainer = document.getElementById('buttonContainer');
    if (buttonContainer.style.display === 'none' || buttonContainer.style.display === '') {
        buttonContainer.style.display = 'flex';
    } else {
        buttonContainer.style.display = 'none';
    }
}

function showImage(imageSrc) {
    const imageDisplay = document.getElementById('image-display');
    const displayedImage = document.getElementById('displayed-image');
    displayedImage.src = imageSrc;
    imageDisplay.style.display = 'block';
}
