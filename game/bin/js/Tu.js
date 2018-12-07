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
var Tu = /** @class */ (function (_super) {
    __extends(Tu, _super);
    function Tu(x, y, r) {
        return _super.call(this, x, y, r) || this;
    }
    /** 消失*/
    Tu.prototype.destroyCircle = function () {
        this.spriteCircle.visible = false;
    };
    /**出现 */
    Tu.prototype.showCircle = function (x, y) {
        this.spriteCircle.visible = true;
        this.spriteCircle.x = x;
        this.spriteCircle.y = y;
        this.x = x;
        this.y = y;
    };
    return Tu;
}(Circle));
//# sourceMappingURL=Tu.js.map