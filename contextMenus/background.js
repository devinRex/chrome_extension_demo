/**
 * Created by denglei on 16/4/9.
 */
chrome.contextMenus.create(
    {
        type: "normal",
        title: "超链接我要看女神",
        contexts:['link'],
        onclick: function () {
            chrome.tabs.create({
                index:1
            },function () {
                url:"chrome://newtab"
            });
        }
    },
    function () {

    }
);
chrome.contextMenus.create(
    {
        type: "normal",
        title: "我要看女神",
        onclick: function () {
            chrome.tabs.create({
                index:1
            },function () {
                url:"chrome://newtab"
            });
        }
    },
    function () {

    }
);
chrome.contextMenus.create(
    {
        type: "normal",
        title: "图片我要看女神",
        contexts:['image'],
        onclick: function () {
            chrome.tabs.create({
                index:1
            },function () {
                url:"chrome://newtab"
            });
        }
    },
    function () {

    }
);
chrome.contextMenus.create({
    type: 'normal',
    title: 'Menu A',
    id: 'a'
});
chrome.contextMenus.create({
    type: 'radio',
    title: 'Menu B',
    id: 'b',
    checked: true
});
chrome.contextMenus.create({
    type: 'radio',
    title: 'Menu C',
    id: 'c'
});
chrome.contextMenus.create({
    type: 'checkbox',
    title: 'Menu D',
    id: 'd',
    checked: true
});
chrome.contextMenus.create({
    type: 'separator'
});
chrome.contextMenus.create({
    type: 'checkbox',
    title: 'Menu E',
    id: 'e'
});
chrome.contextMenus.create({
    type: 'normal',
    title: 'Menu F',
    id: 'f',
    parentId: 'a'
});
chrome.contextMenus.create({
    type: 'normal',
    title: 'Menu G',
    id: 'g',
    parentId: 'a'
});