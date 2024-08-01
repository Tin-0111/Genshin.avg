function changeButtonColor(button) {
    const buttons = document.querySelectorAll('.color-button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}
