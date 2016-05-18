document.getElementById("checkPhoto").onclick = function () {
    var img = document.createElement("img");
    img.src = "1.jpg";
    document.body.appendChild(img);
};
new Notification("我的消息",{
    body : '哎哟不错，这个屌',
    icon : '1.jpg'
});
notification.show();
