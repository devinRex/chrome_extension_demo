$(function(){
    //获取cookie
    $("#getCookie").on("click", function () {
        chrome.cookies.getAll({
            domain:"www.baidu.com"
        },function (data) {
            var html = "<ul>";
            for(var i = 0, len = data.length; i < len; i++) {
                html+="<li>" + "<p>name:" +data[i].name +"</p>";
                html+="<p>value:"+data[i].value+"</p></li>";
            }
            html+="</ul>";
            $("#cookie").html(html);
        });
    });
    //设置cookie
    $("#addCookie").on("click", function () {
        chrome.cookies.set({
            url:"https://www.baidu.com",
            name:"xiaodtest",
            value:"success"
        })
    });
    //获取单个cookie
    $("#getOneCookie").on("click", function () {
        chrome.cookies.get({
            url:"https://www.baidu.com",
            name:"xiaodtest"
        }, function (cookie) {
            var html = "";
            if(cookie != null) {
                html = "<p>" + cookie.name + "的值是" + cookie.value;
            } else {
                html = "<P>您所查找的cookie不存在</P>"
            }
            $("#cookie").html(html);
        });
    });
    //删除cookie
    $("#delCookie").on("click", function () {
        chrome.cookies.remove({
            url:"https://www.baidu.com",
            name:"xiaodtest"
        },function() {
            $("#cookie").html("删除成功");
        });
    });
});

