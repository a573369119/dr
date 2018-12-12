var Circle = /** @class */ (function () {
    // public speed : number;
    // public count : number = 5;//精确值 5个像素 
    function Circle(x, y, r, color, Full, speed) {
        this.r = r;
        this.drawSelf(x, y, r, color, Full);
    }
    Circle.prototype.drawSelf = function (x, y, r, color, Full) {
        this.spriteCircle = new Laya.Sprite();
        //Laya.stage.addChild(this.spriteCircle);
        this.spriteCircle.pivot(this.spriteCircle.width / 2, this.spriteCircle.height / 2); //焦点在中心
        this.spriteCircle.x = x;
        this.spriteCircle.y = y;
        this.spriteCircle.graphics.drawCircle(0, 0, this.r, Full, color, 2);
        this.init();
    };
    Circle.prototype.init = function () {
    };
    return Circle;
}());
//# sourceMappingURL=Circle.js.map