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
    function Water(x, y, r, color, Full) {
        var _this = _super.call(this, x, y, r, color, Full) || this;
        /**重力加速度 */
        _this.g = 9.8;
        /**时间 */
        _this.time = 16; //80毫秒
        /**空气摩擦系数 */
        _this.k = 0.994;
        /**x y*/
        /**x方向速度 */
        _this.speed_x = 0.1;
        /**y方向的速度 */
        _this.speed_y = 0;
        /**反弹系数 */
        _this.erf = 1;
        /**重力系数 减少多少倍 */
        _this.dof = 6;
        /**动摩擦因素 */
        _this.mof = 0.99;
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
        this.force();
        this.test();
        //this.toXY();
        //console.log("[x]:"+this.spriteCircle.x + "   [y]:" + this.spriteCircle.y + "   [speed_x]:" + this.speed_x + "   [speed_y]:" + this.speed_y);
    };
    /**测试 */
    Water.prototype.test = function () {
        this.spriteCircle.x += this.speed_x * this.time;
    };
    /**转化成xy的位移 */
    Water.prototype.toXY = function () {
        this.spriteCircle.x += this.speed_x * this.time;
        this.spriteCircle.y += this.speed_y * this.time;
    };
    /**重力 */
    Water.prototype.downForce = function () {
        this.spriteCircle.y += (this.speed_y * this.time + 2 / 1 * this.g * this.time / 1000 * this.time / 1000) / this.dof; //Vt + 2/1gt^2
        this.speed_y += (this.g * this.time / 1000) / this.dof; //v = gt;
    };
    /**空气摩擦力 */
    Water.prototype.force = function () {
        //横坐标方向所受空气摩擦力
        if (this.speed_y > 0)
            this.speed_y = this.speed_y * this.k;
        if (this.speed_x > 0)
            this.speed_x = this.speed_x * this.k;
    };
    /**相互关系 给该物体施力对象*/
    Water.prototype.forceOher = function (circle) {
        //反弹
        this.speedAdd(circle);
        //判断是否传体
        this.isCrash(circle);
        //**摩擦力 */
        //this.mofForce();
    };
    /**摩擦力*/
    Water.prototype.mofForce = function () {
        if (this.speed_y < 0.5 && this.speed_y > -0.5) {
            if (this.speed_x < 0.000001 && this.speed_x > -0.000001) {
                this.speed_x = 0;
                return;
            }
            console.log("给我摩擦力");
            this.speed_x = this.speed_x * this.mof;
        }
    };
    /**是否穿体 */
    Water.prototype.isCrash = function (circle) {
        if (this.getWhereCircle(circle) == 3) {
            //施加弹力
            console.log("弹力生效");
            this.spriteCircle.y -= (this.speed_y * this.time + 2 / 1 * this.g * this.time / 1000 * this.time / 1000) / this.dof; //Vt + 2/1gt^2 
        }
    };
    /**计算角度 获取cos*/
    Water.prototype.countRotation = function (circle) {
        //斜边
        var d = this.getTowPointDic(circle);
        //X2 -X1临边
        var a = circle.spriteCircle.x - this.spriteCircle.x;
        //获取cos 
        //console.log(a/d);
        return a / d;
    };
    /**获取碰撞方向的速度 放入相碰的物体*/
    Water.prototype.getSpeed = function (dirc, circle) {
        var cos = this.countRotation(circle);
        //console.log(cos);
        if (dirc == 'x') {
            if (this.speed_x != 0 && this.speed_x != undefined) {
                if (cos == 0)
                    return -this.speed_x / this.erf;
                else
                    return -this.speed_x / cos / this.erf;
            }
        }
        else {
            if (this.speed_y != 0 && this.speed_y != undefined) {
                if (Math.sqrt(1 - Math.pow(cos, 2)) == 0)
                    return -this.speed_y / this.erf;
                else {
                    return -this.speed_y / Math.sqrt(1 - Math.pow(cos, 2)) / this.erf;
                }
            }
        }
        return 0;
    };
    /////////////////public
    /**设置反弹速度 */
    Water.prototype.speedAdd = function (circle) {
        this.speed_x = this.getSpeed('x', circle) / 2 * this.countRotation(circle); //X应该是 速度 * cos
        this.speed_y = this.getSpeed('y', circle) / 2 * Math.sqrt(1 - Math.pow(this.countRotation(circle), 2));
    };
    return Water;
}(Circle));
//# sourceMappingURL=Water.js.map