var port = chrome.extension.connect({name: "ttfAlarm"});
//port.postMessage({joke: "Knock knock"});
port.onMessage.addListener(function(msg) {
    console.log(msg);
    if(msg.identity === "ajax") {
        console.log("我收到了一条ajax发来的消息：" + msg.data.data.token);
    } else if(msg.identity === "show") {
        console.log("我收到了点击pageAction传来的消息:" + msg.msg);
    }
});