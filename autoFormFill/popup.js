/**
 * Created by denglei on 16/9/21.
 */
// 点击保存的时候,通知到content script,存储localstorage
$("#saveScheme").off("click").on("click", function () {
    var schemeName = $.trim($("#scheme").val());
    if(!schemeName) {
        //todo 错误提示方式
        return;
    }
    console.log("我要保存方案");
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
        // 告诉content script,需要存储新的方案,
        // 然后content script通知backdround去更新右键菜单
        chrome.tabs.sendMessage(tabs[0].id, {from: "popup", action: "save", schemeName: schemeName});
    });
});

// 删除所有方案

$("#delAllScheme").off("click").on("click", function () {
    console.log("我要删除方案");
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
        // 告诉content script,需要删除所有的方案,
        // 然后content script通知backdround去删除所有右键菜单
        chrome.tabs.sendMessage(tabs[0].id, {from: "popup", action: "del"});
    });
});
