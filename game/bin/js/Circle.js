var Circle = /** @class */ (function () {
    // public speed : number;
    // public count : number = 5;//精确值 5个像素 
    function Circle(x, y, r, color, Full, isDraw) {
        this.r = r;
        this.drawSelf(x, y, r, color, Full, isDraw);
    }
    Circle.prototype.drawSelf = function (x, y, r, color, Full, isDraw) {
        if (!isDraw) {
            this.spriteCircle = new Laya.Sprite();
            this.spriteCircle.pivot(this.spriteCircle.width / 2, this.spriteCircle.height / 2); //焦点在中心
        }
        else
            this.spriteCircle = new SCirle();
        //Laya.stage.addChild(this.spriteCircle);
        this.spriteCircle.x = x;
        this.spriteCircle.y = y;
        if (!isDraw)
            this.spriteCircle.graphics.drawCircle(0, 0, this.r, Full, color, 2);
        this.init();
    };
    Circle.prototype.init = function () {
    };
    return Circle;
}());
//# sourceMappingURL=Circle.js.map