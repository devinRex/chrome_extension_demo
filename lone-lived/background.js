/**
 * Created by denglei on 16/4/16.
 */
//chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
//    sendResponse("1");
//    if(message == 'Hello'){
//        $.ajax({
//            url:"http://test.truckmanager.g7s.chinawayltd.com/app.php?method=truck.auth.login&username=smart002&password=Smart002&code=1d857028bddcda70bcfd62c0950ec1cc&appkey=47a7ccefe0",
//            dataTypr:"json",
//            success: function (data) {
//                if(data.code === 0) {
//                    sendResponse(data.data);
//                }
//                //console.log(data.data);
//            },
//            error: function () {
//                console.log("ss");
//            }
//        });
//
//    }
//});
chrome.extension.onConnect.addListener(function(port) {
    try{
        $.ajax({
            url:"http://test.truckmanager.g7s.chinawayltd.com/app.php?method=truck.auth.login&username=smart002&password=Smart002&code=1d857028bddcda70bcfd62c0950ec1cc&appkey=47a7ccefe0",
            success: function (data) {
                if(data.code === 0) {
                    port && port.postMessage({data:data,identity:"ajax"}, function(){

                    });
                }
                port && port.postMessage({data:data,identity:"ajax"}, function(){

                });
                //console.log(data.data);
            }

        });
    } catch(e) {
        port.postMessage({msg:"出错了",identity:"show"}, function () {

        });
    }

    chrome.browserAction.onClicked.addListener(function () {
        port.postMessage({msg:"我是另外一条连接",identity:"show"}, function () {

        });
    });
});