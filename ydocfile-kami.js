var fs = require('fs');
var path = require('path');

module.exports = function() {
    return {
        "name": "Kami",
        "dest": "./_docs-kami",
        //"examplePath": "./test-kami/scripts/",
        "resources": {
            "images": './test-kami/_doc/_template/images/'
        },
        "common": {
            "title": "Kami",
            "footer": "© 2016 <a href=\"http://gitlab.corp.qunar.com/mfe/qdoc\">YMFE</a> Team. Build by <a href=\"https://github.com/YMFE/ydoc\">ydoc</a>.",
            "home": "Qunar MFE",
            "homeUrl": "http://ued.qunar.com/ymfe/",
            "navbars": []
        },
        "pages": [{
            "name": "index",
            "title": "起步",
            "banner": {
                "title": "Kami",
                "description": "轻量、简单的移动前端组件库。"
            },
            "content": "./test-kami/_doc/_template/intro.md",
        }, {
            "name": "component",
            "title": "组件",
            "banner": {
                "title": "Kami",
                "description": "轻量、简单的移动前端组件库。"
            },
            "content": {
                "type": "blocks",
                "sidebar": true,
                "multi": true,
                "index": "./test-kami/_doc/_template/intro.md",
                "pages": [{
                //     "name": "核心组件"
                // }, {
                //     "name": "Base",
                //     "content": "./test-kami/scripts/base/src/base.js",
                //     "sub": true
                // }, {
                //     "name": "Widget",
                //     "content": "./test-kami/scripts/core/src/widget.js",
                //     "sub": true
                // }, {
                    "name": "滚动和列表"
                // }, {
                //     "name": "Panel",
                //     "content": "./test-kami/scripts/panel/src/panel.js",
                //     "sub": true
                }, {
                    "name": "List",
                    "content": "./test-kami/scripts/list/src/index.js",
                    "sub": true
                // }, {
                //     "name": "Pagelist",
                //     "content": "./test-kami/scripts/pagelist/src/pagelist.js",
                //     "sub": true
                // }, {
                //     "name": "Grouplist",
                //     "content": "./test-kami/scripts/grouplist/src/grouplist.js",
                //     "sub": true
                // }, {
                //     "name": "Searchlist",
                //     "content": "./test-kami/scripts/searchlist/src/searchlist.js",
                //     "sub": true
                // }, {
                //     "name": "Selectlist",
                //     "content": "./test-kami/scripts/selectlist/src/selectlist.js",
                //     "sub": true
                // }, {
                //     "name": "Doublelist",
                //     "content": "./test-kami/scripts/doublelist/src/doublelist.js",
                //     "sub": true
                // }, {
                //     "name": "弹窗类"
                // }, {
                //     "name": "Overlay",
                //     "content": "./test-kami/scripts/overlay/src/overlay.js",
                //     "sub": true
                // }, {
                //     "name": "Dialog",
                //     "content": "./test-kami/scripts/dialog/src/dialog.js",
                //     "sub": true
                // }, {
                //     "name": "Alert",
                //     "content": "./test-kami/scripts/alert/src/alert.js",
                //     "sub": true
                // }, {
                //     "name": "Confirm",
                //     "content": "./test-kami/scripts/confirm/src/confirm.js",
                //     "sub": true
                // }, {
                //     "name": "Tip",
                //     "content": "./test-kami/scripts/tip/src/tip.js",
                //     "sub": true
                // }, {
                //     "name": "Picker类"
                // }, {
                //     "name": "Select",
                //     "content": "./test-kami/scripts/select/src/select.js",
                //     "sub": true
                // }, {
                //     "name": "PopSelect",
                //     "content": "./test-kami/scripts/popselect/src/popselect.js",
                //     "sub": true
                // }, {
                //     "name": "Calendar",
                //     "content": "./test-kami/scripts/calendar/src/calendar.js",
                //     "sub": true
                // }, {
                //     "name": "PopCalendar",
                //     "content": "./test-kami/scripts/popcalendar/src/popcalendar.js",
                //     "sub": true
                // }, {
                //     "name": "其它"
                // }, {
                //     "name": "DatePicker",
                //     "content": "./test-kami/scripts/datepicker/src/datepicker.js",
                //     "sub": true
                // }, {
                //     "name": "ImageLazyload",
                //     "content": "./test-kami/scripts/imagelazyload/src/imagelazyload.js",
                //     "sub": true
                // }, {
                //     "name": "Loading",
                //     "content": "./test-kami/scripts/loading/src/loading.js",
                //     "sub": true
                // }, {
                //     "name": "Map",
                //     "content": "./test-kami/scripts/map/src/map.js",
                //     "sub": true
                // }, {
                //     "name": "Number",
                //     "content": "./test-kami/scripts/number/src/number.js",
                //     "sub": true
                // }, {
                //     "name": "Rating",
                //     "content": "./test-kami/scripts/rating/src/rating.js",
                //     "sub": true
                // }, {
                //     "name": "SliderMenu",
                //     "content": "./test-kami/scripts/slidermenu/src/slidermenu.js",
                //     "sub": true
                // }, {
                //     "name": "Suggest",
                //     "content": "./test-kami/scripts/suggest/src/suggest.js",
                //     "sub": true
                // }, {
                //     "name": "Switch",
                //     "content": "./test-kami/scripts/switch/src/switch.js",
                //     "sub": true
                // }, {
                //     "name": "Switchable",
                //     "content": "./test-kami/scripts/switchable/src/switchable.js",
                //     "sub": true
                }]
            }
        }]
    };
};
