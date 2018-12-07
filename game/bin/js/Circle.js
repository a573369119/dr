var Circle = /** @class */ (function () {
    function Circle(x, y, r, speed) {
        this.x = x;
        this.y = y;
        this.r = r;
        if (speed)
            this.speed = speed;
        else
            this.speed = 2.5;
        this.drawSelf();
    }
    Circle.prototype.drawSelf = function () {
        this.spriteCircle = new Laya.Sprite();
        Laya.stage.addChild(this.spriteCircle);
        this.spriteCircle.x = this.x;
        this.spriteCircle.y = this.y;
        this.spriteCircle.graphics.drawCircle(this.x, this.y, this.r, null, "#f00", 2);
    };
    /**判断在哪儿  1 在圆外不想切  2在圆外相切  3、相交切圆心在圆中*/
    Circle.prototype.getWhereCircle = function (circle) {
        var dicX = this.getTowPointDic(circle) - (this.r + circle.r);
        if (dicX > 0)
            return 1;
        if (dicX == 0)
            return 2;
        if (this.r + dicX < circle.r)
            return 3;
        console.log(dicX);
        return null;
    };
    /**判断是否碰撞 */
    Circle.prototype.judgeColider = function (circle) {
        var count = 5; //精确值 5个像素 
        var dicX = this.getTowPointDic(circle) - (this.r + circle.r);
        if (dicX < count && dicX > -count) {
            console.log("已碰撞");
            return true;
        }
        else
            return false;
    };
    /**获得两点之间的距离 */
    Circle.prototype.getTowPointDic = function (circle) {
        return Math.sqrt(Math.pow((circle.x - this.x), 2) + Math.pow((circle.y - this.y), 2));
    };
    return Circle;
}());
//# sourceMappingURL=Circle.js.map