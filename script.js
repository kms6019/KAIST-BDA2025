document.addEventListener('DOMContentLoaded', function () {
  const pages = document.querySelectorAll('.page');
  let currentPage = 0;

  // 버튼 요소 가져오기
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // 페이지 업데이트 함수
  function updatePage() {
    pages.forEach((page, index) => {
      if (index === currentPage) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });
  }

  // 이전 버튼 클릭 이벤트
  prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      updatePage();
    }
  });

  // 다음 버튼 클릭 이벤트
  nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
      currentPage++;
      updatePage();
    }
  });

  // 초기 페이지 설정
  updatePage();
});
