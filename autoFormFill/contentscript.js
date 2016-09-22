/**
 * Created by denglei on 16/9/21.
 */

var port = chrome.extension.connect({name: "ttfAlarm"});
var fillForm = {
    prefix: "autoFillScheme",
    /**
     * 每次刷新页面应该清理掉上次所有的右键菜单,然后根据缓存再生成一份
     * 菜单名看来需要特殊的前缀来标识
     */
    init: function () {
        var allStorage = window.localStorage,
            reg = new RegExp(fillForm.prefix,"i"),
            dataList = [];

        //通知background删除所有右键菜单
        port.postMessage({from: "content", action: "del"}, function () {});

        //通知background更新右键菜单
        for(var i in allStorage) {
            if(allStorage.hasOwnProperty(i)) {
                if(reg.test(i)) {
                    dataList.push(i.replace(fillForm.prefix, ""));
                }
            }
        }
        //通知background新建右键菜单
        port.postMessage({from: "content", action: "save", schemeName: dataList}, function () {});

    },
    /**
     * todo 目前只支持input以及id,需要自己扩充
     * 保存主题
     * @param schemeName 主题名
     */
    saveScheme: function (schemeName) {
        var self = this;
        var schemeData = {};
        $("input").each(function (index, element) {
            var t = $(this);
            schemeData[t.attr("id")] = $.trim(t.val());
        });
        localStorage.setItem(self.prefix + schemeName, JSON.stringify(schemeData));
    },
    /**
     * todo 目前只支持input以及id,需要自己扩充
     * 自动填充
     * @param schemeName
     */
    autoFill: function (schemeName) {
        var self = this;
        var schemeData = JSON.parse(localStorage.getItem(self.prefix + schemeName));
        if(!schemeData) return;
        for(var i in schemeData) {
            if(schemeData.hasOwnProperty(i)) {
                $("#" + i).val(schemeData[i]);
            }
        }
    }
};
// 初始化
fillForm.init();
// background与content script的通信
port.onMessage.addListener(function(msg) {
    console.log(msg);
    if(msg.action === "fillForm") {
        console.log("我收到了自动填充表单的命令");
        // 根据具体是填充哪个,执行填充的操作
        fillForm.autoFill(msg.schemeName);
    }
});

// popup与content script通信
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
    if(request.from == "popup"){
        switch (request.action) {
            case "del":
                // 删除缓存
                console.log("我收到了删除所有缓存的命令");
                localStorage.clear();
                //通知background删除所有右键菜单
                port.postMessage({from: "content", action: "del"}, function () {});
                break;
            case "save":
                //更新缓存,并处理要传递的数据
                console.log("我收到了更新缓存的命令");
                fillForm.saveScheme(request.schemeName);
                port.postMessage({from: "content", action: "save", schemeName: [request.schemeName]}, function () {});
                break;
            default:
                break;
        }
    }
});