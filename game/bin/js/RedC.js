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
var RedC = /** @class */ (function (_super) {
    __extends(RedC, _super);
    function RedC(x, y, r, color, full) {
        var _this = _super.call(this, x, y, r, "#f00", "#f00") || this;
        _this.type = "r";
        return _this;
    }
    return RedC;
}(Circle));
//# sourceMappingURL=RedC.js.map