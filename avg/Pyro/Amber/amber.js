document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".color-button");
    const content = document.getElementById("content");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            toggleContent(index + 1);
        });
    });

    function toggleContent(buttonNumber) {
        if (buttonNumber === 1) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }
    }

    // 초기 상태에서는 content를 숨깁니다.
    content.classList.add("hidden");
});