function showImage(imageSrc) {
    var display = document.getElementById('image-display');
    var img = document.getElementById('displayed-image');
    img.src = imageSrc;
    display.style.display = 'block'; // 이미지를 보이게 함
}