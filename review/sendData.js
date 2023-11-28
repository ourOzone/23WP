function sendData(cardIndex) {
  // 데이터를 가져와서 URL에 추가
  var titleData = document.getElementById("titleData" + cardIndex).textContent;
  var imageData = document.getElementById("imageData" + cardIndex).src;
  var textData = document.getElementById("textData" + cardIndex).textContent;
  var url =
    "detail.html?title=" +
    encodeURIComponent(titleData) +
    "&image=" +
    encodeURIComponent(imageData) +
    "&text=" +
    encodeURIComponent(textData);

  // 다음 페이지로 이동
  window.open(url, "_blank");
}
