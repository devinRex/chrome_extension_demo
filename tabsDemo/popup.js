/*
 {
 id: 标签id,
 index: 标签在窗口中的位置，以0开始,
 windowId: 标签所在窗口的id,
 openerTabId: 打开此标签的标签id,
 highlighted: 是否被高亮显示,
 active: 是否是活动的,
 pinned: 是否被固定,
 url: 标签的URL,
 title: 标签的标题,
 favIconUrl: 标签favicon的URL,
 status :标签状态，loading或complete,
 incognito: 是否在隐身窗口中,
 width: 宽度,
 height: 高度,
 sessionId: 用于sessions API的唯一id
 }
 */
/* query的参数
{
    active: 是否是活动的,
    pinned: 是否被固定,
    highlighted: 是否正被高亮显示,
    currentWindow: 是否在当前窗口,
    lastFocusedWindow: 是否是上一次选中的窗口,
    status: 状态，loading或complete,
    title: 标题,
    url: 所打开的url,
    windowId: 所在窗口的id,
    windowType: 窗口类型，normal、popup、panel或app,
    index: 窗口中的位置
}
*/
$(function(){
    //获取操作tabs的基本信息
    $("#getTabs").on("click", function () {
        chrome.tabs.query({
           active: true
        }, function(tabArray){
            console.log(tabArray);
            var html = "";
            for(var i = 0, len = tabArray.length; i < len; i++) {
                html+="<ul>";
                for(var j in tabArray[i]) {
                    html+="<li>" +j + ":" +tabArray[i][j]+"</li>";
                }
                html+="</ul>"
            }
            $("#tabs").html(html);
        });
    });

    //todo 获取当前标签
    $("#getCurTabs").on("click", function () {
        chrome.tabs.getCurrent(function (tab) {
            console.log(tab);
        });
    });

    //创建标签
    $("#createTab").on("click", function () {
        chrome.tabs.create({
            windowId: 1, //默认是当前的window
            index: 0,
            url: 'https://www.baidu.com',
            //active: true,
            pinned: false
        }, function(tab){
            console.log(tab);
            alert(tab.id);
        });
    });

    //更新标签
    $("#updateTab").on("click", function () {
        chrome.tabs.update(145, {
            url: 'http://image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&ie=gbk&word=%B3%A4%D4%F3%D1%C5%C3%C0&ala=1&fr=ala&alatpl=star&pos=0'
        }, function(tab){
            console.log(tab);
        });
    });

    //移动标签
    $("#moveTab").on("click", function () {
        chrome.tabs.move(145, {
            index:2
        }, function(){

        });
    });


    //复制标签
    $("#copyTab").on("click", function () {
        chrome.tabs.duplicate(145, function (tab) {
            console.log(tab);
        })
    });

    //强制刷新标签
    $("#reloadTab").on("click", function () {
        chrome.tabs.reload(145, {
            bypassCache: true
        }, function () {
            console.log("The tab has been reloaded.");
        });
    })

    //移除标签
    $("#removeTab").on("click", function () {
        chrome.tabs.remove(145, function(){
            console.log('The tabs has been closed.');
        });
    });

    //获取指定窗口活动标签可见部分的截图
    $("#tabCapture").on("click", function () {
        chrome.tabs.captureVisibleTab(1, {
            format: 'jpeg',
            quality: 50
        }, function(dataUrl){
            window.open(dataUrl, 'tabCapture');
        });
    });

    //注入js
    $("#tabScript").on("click", function () {
        chrome.tabs.executeScript(143, {
            code: 'document.body.style.backgroundColor="red"',
            allFrames: true,
            runAt: 'document_start'
        }, function(resultArray){
            console.log(resultArray);
        });
    });

});

