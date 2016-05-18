/**
 * Created by denglei on 16/4/16.
 */
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message == 'Hello'){
        $.ajax({
            url:"http://test.truckmanager.g7s.chinawayltd.com/app.php?method=truck.auth.login&username=smart002&password=Smart002&code=1d857028bddcda70bcfd62c0950ec1cc&appkey=47a7ccefe0",
            dataTypr:"json",
            success: function (data) {
                if(data.code === 0) {
                    sendResponse(data);
                }
                //console.log(data.data);
            },
            error: function () {
                console.log("ss");
            }
        });

    }
});
//chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//    if (message == 'Hello') {
//        console.log("sss");
//        sendResponse("background.js 与 popup.html建立了友好的连接");
//    }
//    if(message=="world") {
//        sendResponse("background.js 与content scripts建立了友好的连接");
//    }
//});

//chrome.runtime.sendMessage('backToContent', function(response){
//    chrome.tabs.create({
//        windowId: 1, //默认是当前的window
//        index: 0,
//        url: 'https://www.baidu.com',
//        active: true,
//        pinned: false
//    }, function(tab){
//        console.log(tab);
//    });
//});