$(function(){
    //获取书签
    $("#getMarks").on("click", function () {
        chrome.bookmarks.getTree(function (data) {
            console.log(data);
            var markers = data[0].children;
            var html = "<ul>";
            for(var i = 0, ilen = markers.length; i < ilen; i++) {
                html+="<li>" + markers[i].title;
                if(markers[i].children && markers[i].children.length) {
                    html+="<ul>";
                    for(var j = 0, len = markers[i].children.length; j < len; j++) {
                        if(markers[i].children[j] && markers[i].children[j].title) {
                            html+='<li>' + markers[i].children[j].title + "</li>";
                        }
                    }
                    html+="</ul>"
                }
                html+="</li>";
            }
            html+="</ul>";
            $("#bookmarks").html(html);
        });
    });
    $("#addMarks").on("click", function () {
        //创建书签
        chrome.bookmarks.create({
            'parentId': "1",
            'title': 'Extension bookmarks'
        },function(newFolder) {
            var html= "<ul>";
            for(var i in newFolder) {
                html+="<li>" + i + ":" + newFolder[i] + "</li>";
            }
            html+="</ul>";
            $("#bookmarks").html(html);
            chrome.bookmarks.create({
                'parentId': newFolder.id,
                title:"百度",
                'url':'http://www.baidu.com'
            },function (newFolder) {
                console.log(newFolder);
                var html = "<p>对应的书签的id为" +newFolder.id + "</p>";
                $("#bookmarks").append(html);
            });
        });
    });
    $("#delMarks").on("click", function () {
        var id = $("#delId").val();
        if(id == "") {
            alert("id不能为空")
        }
        chrome.bookmarks.remove(""+id);
    });
});