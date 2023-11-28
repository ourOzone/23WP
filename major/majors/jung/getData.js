function showAlert() {
  alert("장바구니에 담겼습니다!");
}

window.onload = function () {
  // URL에서 데이터를 가져와서 화면에 표시
  var params = new URLSearchParams(window.location.search);
  var textData = params.get("text");
  var imageData = params.get("image");
  var priceData = params.get("price");

  document.getElementById("displayText").textContent = textData;
  document.getElementById("displayImage").src = imageData;
  document.getElementById("displayPrice").textContent = priceData;
};
