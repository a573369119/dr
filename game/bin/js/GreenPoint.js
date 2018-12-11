var GreenPoint = /** @class */ (function () {
    function GreenPoint(g) {
        this.g = g;
    }
    /**返回与下一个节点的距离 */
    GreenPoint.prototype.getNextDic = function () {
        return Tool.ins.countDic_2(this.g.spriteCircle.x, this.g.spriteCircle.y, this.next.g.spriteCircle.x, this.next.g.spriteCircle.y);
    };
    /**返回上一节点的距离 */
    GreenPoint.prototype.getLastDic = function () {
        if (this.last === undefined)
            return;
        else
            return Tool.ins.countDic_2(this.last.g.spriteCircle.x, this.last.g.spriteCircle.y, this.g.spriteCircle.x, this.g.spriteCircle.y);
    };
    GreenPoint.prototype.setPos = function (x, y) {
        this.g.spriteCircle.x = x;
        this.g.spriteCircle.y = y;
        this.g.spriteCircle.visible = true;
    };
    GreenPoint.prototype.reGet = function () {
        this.g.spriteCircle.visible = false;
        Laya.Pool.recover("point", this);
    };
    return GreenPoint;
}());
//# sourceMappingURL=GreenPoint.js.map