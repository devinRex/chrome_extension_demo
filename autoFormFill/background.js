/**
 * Created by denglei on 16/9/21.
 */
chrome.extension.onConnect.addListener(function(port) {
    var operaMenu = {
        /**
         * 新建右键菜单项
         * @param options
         * @private
         */
        _createMenu: function (options) {
            chrome.contextMenus.create(
                {
                    type: "normal",
                    title: options.title,
                    onclick: function () {
                        port.postMessage({action: "fillForm", schemeName: options.schemeName}, function () {});
                    }
                }, function () {}
            );
        },
        /**
         * 删除此扩展添加的所有右键菜单
         * @private
         */
        _delAllMenu: function () {
            chrome.contextMenus.removeAll();
        }
    };
    // background接收来自contentscript的消息
    port.onMessage.addListener(function(request) {

        // 收到新的保存或者删除命令以后,重新生成右键菜单
        if(request.from === "content") {
            switch(request.action) {
                case "del":
                    operaMenu._delAllMenu();
                    break;
                case "save":
                    // 新建菜单
                    for(var i = 0, len = request.schemeName.length; i < len; i++) {
                        operaMenu._createMenu({
                            schemeName: request.schemeName[i],
                            // 以方案名作为
                            title: request.schemeName[i]
                        });
                    }
                    break;
            }
        }
    });
});