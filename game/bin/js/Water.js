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
var Water = /** @class */ (function (_super) {
    __extends(Water, _super);
    function Water(x, y, r) {
        var _this = _super.call(this, x, y, r) || this;
        /**重力加速度 */
        _this.g = 9.8;
        /**时间 */
        _this.time = 16; //80毫秒
        /**x方向速度 */
        _this.speed_x = 0;
        /**y方向的速度 */
        _this.speed_y = 0;
        _this.init();
        return _this;
    }
    /**水滴初始化 */
    Water.prototype.init = function () {
        Laya.timer.loop(this.time, this, this.run);
    };
    /**水滴动起来 */
    Water.prototype.run = function () {
        this.downForce();
        this.setXY();
        console.log(this.spriteCircle.y);
        console.log(this.y);
    };
    /**设置xy */
    Water.prototype.setXY = function () {
        this.spriteCircle.x = this.x;
        this.spriteCircle.y = this.y;
    };
    /**重力 */
    Water.prototype.downForce = function () {
        this.y += (this.speed_y * this.time + 2 / 1 * this.g * this.time / 1000 * this.time / 1000) / 8; //Vt + 2/1gt^2
        this.speed_y += (this.g * this.time / 1000) / 8; //v = gt;
    };
    /**相互碰撞 */
    Water.prototype.forceOher = function () {
    };
    /////////////////
    Water.prototype.setSpeedY = function (Vy) {
        Laya.timer.clear(this, this.run);
        console.log(this.spriteCircle.y);
        console.log(this.y);
    };
    return Water;
}(Circle));
//# sourceMappingURL=Water.js.map