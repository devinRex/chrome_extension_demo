document.getElementById("checkPhoto").onclick = function () {
    var img = document.createElement("img");
    img.src = "1.jpg";
    document.body.appendChild(img);
};
alert("sss");
chrome.browserAction.setBadgeBackgroundColor({color: '#0000FF'});
chrome.browserAction.setBadgeText({text: 'page'});
console.log(chrome);
