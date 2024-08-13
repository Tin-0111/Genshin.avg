// 버튼과 관련된 모든 요소들을 선택
const buttons = document.querySelectorAll('.color-button');
const contentSections = document.querySelectorAll('.content-section');

// 버튼 클릭 시 발생하는 이벤트 처리
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // 모든 버튼의 active 클래스 제거
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // 클릭된 버튼에 active 클래스 추가
        this.classList.add('active');
        
        // 모든 콘텐츠 섹션 숨기기
        contentSections.forEach(section => section.style.display = 'none');
        
        // 클릭된 버튼에 연결된 콘텐츠 섹션 표시
        const target = this.getAttribute('data-target');
        document.getElementById(target).style.display = 'block';
    });
});
