/**
 * Created by denglei on 16/4/12.
 */
$("#su").on("click", function (e) {
    if($("#kw").val()==="女神")
    {
        $("#kw").val("长泽雅美");
    }
    //return false;
});
var img = $("<img />");
img[0].src = chrome.extension.getURL("every1.jpg");
$("body").prepend(img);
