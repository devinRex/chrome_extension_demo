document.getElementById("checkPhoto").onclick = function () {
    var img = document.createElement("img");
    img.src = "1.jpg";
    document.body.appendChild(img);
}
console.log(chrome.extension.getBackgroundPage());