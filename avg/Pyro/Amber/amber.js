document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".color-button");
    const content = document.getElementById("content");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const buttonNumber = this.id.replace("button", "");

            if (buttonNumber === "1") {
                content.classList.remove("hidden");
            } else {
                content.classList.add("hidden");
            }
        });
    });

    // 초기 상태에서는 content를 숨깁니다.
    content.classList.add("hidden");
});
