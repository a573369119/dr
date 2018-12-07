var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var gameUI = /** @class */ (function (_super) {
        __extends(gameUI, _super);
        function gameUI() {
            return _super.call(this) || this;
        }
        gameUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.gameUI.uiView);
        };
        gameUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 271, "x": 1, "width": 752, "skin": "assets/tu.png", "height": 1065 } }, { "type": "Image", "props": { "y": -22, "x": 0, "width": 752, "skin": "assets/qiangbi.png", "height": 1362 } }, { "type": "Image", "props": { "y": -19, "x": -1, "width": 756, "skin": "assets/top.png", "height": 291 } }, { "type": "Image", "props": { "y": 194, "x": 61, "width": 175, "skin": "assets/role.png", "height": 79 } }, { "type": "Image", "props": { "y": 962, "x": 411, "width": 304, "skin": "assets/end1.png", "height": 304 } }, { "type": "Image", "props": { "y": 951, "x": 412, "width": 47, "skin": "assets/shuiguan.png", "height": 85 } }, { "type": "Image", "props": { "y": -34, "x": -2, "width": 758, "skin": "assets/dushui.png", "height": 1374 } }] };
        return gameUI;
    }(View));
    ui.gameUI = gameUI;
})(ui || (ui = {}));
(function (ui) {
    var testUI = /** @class */ (function (_super) {
        __extends(testUI, _super);
        function testUI() {
            return _super.call(this) || this;
        }
        testUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.testUI.uiView);
        };
        testUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "comp/blank.png", "height": 1334 } }] };
        return testUI;
    }(View));
    ui.testUI = testUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map