document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.toggle-button');
    const content = document.getElementById('content');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 1번 버튼이 눌렸을 때만 콘텐츠를 표시
            if (this.id === 'button1') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
