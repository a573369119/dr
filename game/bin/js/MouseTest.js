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
/**
 * 鼠标检测
 */
var MouseTest = /** @class */ (function (_super) {
    __extends(MouseTest, _super);
    function MouseTest(x, y, r, color, full) {
        var _this = _super.call(this, x, y, r, color, full) || this;
        _this.color = color;
        _this.mousePos = 0;
        _this.spriteCircle.x = 0;
        _this.spriteCircle.y = 0;
        _this.spriteCircle.pivot(0, 0);
        //事件绑定
        Laya.stage.on(Laya.Event.MOUSE_DOWN, _this, _this.remPos);
        return _this;
        // Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.testMouse);
        // Laya.stage.on(Laya.Event.MOUSE_UP,this,this.setRe);
        // Laya.timer.loop(1,this,this.testMouse);
    }
    MouseTest.prototype.get = function (string) {
        if (string == "x") {
            return this.mouseX;
        }
        else {
            return this.mouseY;
        }
    };
    /**是重写 */
    MouseTest.prototype.setRe = function () {
        this.mousePos = 0;
        this.mouseIsDown = false;
    };
    /** 记录按下的位置 */
    MouseTest.prototype.remPos = function () {
        var mX = Laya.stage.mouseX;
        var mY = Laya.stage.mouseY;
        if (this.mousePos == 0) { //未记录
            this.mousePos_remX = mX;
            this.mousePos_remY = mY;
        }
        this.mouseIsDown = true;
    };
    /**绘制 */
    MouseTest.prototype.drwaC = function (x, y) {
        this.spriteCircle.graphics.drawCircle(x, y, this.r, this.color, this.color, 2);
    };
    // /**调用鼠标检测 */
    // public testMouse() : any
    // {
    //     if(this.mouseIsDown)
    //     {
    //         let mX = Laya.stage.mouseX;
    //         let mY = Laya.stage.mouseY; 
    //         if(Math.sqrt(Math.pow(this.mousePos_remX - mX,2)+Math.pow(this.mousePos_remY-mY,2)) >25)
    //         {
    //             this.drwaC(Laya.stage.mouseX,Laya.stage.mouseY);
    //             this.mousePos = 0;
    //             this.mousePos_remX = mX;
    //             this.mousePos_remY = mY;
    //             let object : any = {};
    //             object.x = Laya.stage.mouseX;
    //             object.y = Laya.stage.mouseY;
    //             return object;
    //         }
    //         else
    //         {
    //             return null;
    //         }
    //     }
    //     else
    //     {
    //         return null;
    //     }
    // }
    /***鼠标 推挤 */
    MouseTest.prototype.pushGreen = function (green) {
    };
    return MouseTest;
}(Circle));
//# sourceMappingURL=MouseTest.js.map