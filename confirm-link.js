/*
확인 메세지 출력 후 이동하는 링크 구현
order : 
만든날짜 : 2023-03-10
*/
//confirm-link를 누르면 확인 메세지 출력
window.addEventListener("load", function () {
  var confirmLinkList = document.querySelectorAll(".confirm-link");
  for (var i = 0; i < confirmLinkList.length; i++) {
    confirmLinkList[i].addEventListener("click", function (e) {
      var text = this.dataset.message || "정말 이동하시겠습니까?";
      var choice = confirm(text);
      if (!choice) {
        e.preventDefault();
      }
    });
  }
});
