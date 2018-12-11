var Tool = /** @class */ (function () {
    function Tool() {
    }
    /**碰撞检测 - 计算距离    1=碰撞  2=相切  3=相离*/
    Tool.prototype.countDic = function (tu, water) {
        var dic = Math.sqrt(Math.pow(tu.spriteCircle.x - water.spriteCircle.x, 2) + Math.pow(tu.spriteCircle.y - water.spriteCircle.y, 2));
        if (dic == (tu.r + water.r)) {
            //console.log("碰撞");
            return 1;
        }
        else if (dic < tu.r + water.r) {
            //console.log("相交");
            if (dic < tu.r) {
                //console.log("圆心在园内");
                return 2.5;
            }
            else
                return 2;
        }
        else if (dic > tu.r + water.r + 100) {
            return 3;
        }
    };
    /**碰撞检测 - 计算距离    1=碰撞  2=相切  3=相离*/
    Tool.prototype.countDic_2 = function (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    };
    Tool.ins = new Tool;
    return Tool;
}());
//# sourceMappingURL=Tool.js.map