$(function(){
    //获取当前事件一天内的history
    $("#getHistory").on("click", function () {
        chrome.history.search({
            text:"",
            endTime:new Date().getTime(),
            startTime: new Date().getTime() - 1000 * 24 * 60 * 60
        }, function (data) {
            console.log(data);
            var html = "";
            for(var i = 0, len = data.length; i < len; i++) {
                html += "<li>"+data[i].title+"</li>";
            }
            $("#history").html(html);
        });
    });
    //删除一天内一小时之前的history
    $("#delRangeHistory").on("click", function () {
        chrome.history.deleteRange({
            endTime:new Date().getTime() - 1000 * 60 *  60,
            startTime: new Date().getTime() - 1000 * 24 * 60 * 60
        }, function () {
            $("#history").html("<p>删除成功</p>");
        });
    });
    //删除手机管车的history
    $("#delHistory").on("click", function () {
        chrome.history.deleteUrl({
           url: "https://www.baidu.com"
        }, function () {

        });
    });
    //删除所有history
    $("#delAllHistory").on("click", function () {
        chrome.history.deleteAll(function(){
            $("#history").html("<p>删除所有history成功</p>");
        });
    });
    //添加个记录
    $("#addHistory").on("click", function () {
        chrome.history.addUrl({
            url:"http://open.chrome.360.cn/extension_dev/history.html"
        });
    });

});
