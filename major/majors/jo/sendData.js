function sendData(cardIndex) {
  // Get data from the clicked card
  var textData = document.getElementById("textData" + cardIndex).textContent;
  var imageData = document.getElementById("imageData" + cardIndex).src;
  var priceData = document.getElementById("priceData" + cardIndex).textContent;

  // Construct the URL with query parameters
  var url =
    "detail.html?text=" +
    encodeURIComponent(textData) +
    "&image=" +
    encodeURIComponent(imageData) +
    "&price=" +
    encodeURIComponent(priceData);

  // Open the detail.html page with the constructed URL
  window.open(url, "_blank");
}
