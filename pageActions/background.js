/*
 使用 chrome.runtime API 获取后台网页、返回清单文件详情、监听并响应应用或应用生命周期内的事件，您还可以使用该 API 将相对路径的 URL 转换为完全限定的 URL。
 onInstalled
 当应用第一次安装、更新至新版本或百度浏览器更新至新版本时产生。
 chrome.runtime.onInstalled.addListener(function callback)
 */
chrome.runtime.onInstalled.addListener(function() {
    /**
     * 使用 chrome.declarativeContent API 根据网页内容进行某些操作，而不需要读取网页内容的权限。
     */
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    //PageStateMatcher通过各种条件匹配网页的状态。
                    //http://chajian.baidu.com/developer/extensions/events.html#type-UrlFilter
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlContains: 'baidu' }
                    })
                ],
                actions: [ new chrome.declarativeContent.ShowPageAction() ]
            }
        ]);
    });
});