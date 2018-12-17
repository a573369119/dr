/**
 * 吸水虫
 */
var eatWater = /** @class */ (function () {
    function eatWater(eat, water, call, caller) {
        this.eatUI = eat;
        this.arr_water = water;
        this.sca = 1;
        this.call = call;
        this.caller = caller;
        Laya.timer.loop(1000, this, this.getWater);
    }
    /**吸水 */
    eatWater.prototype.getWater = function () {
        var _this = this;
        this.arr_water.forEach(function (water) {
            if (Tool.ins.countDic_2(_this.eatUI.x, _this.eatUI.y, water.spriteCircle.x, water.spriteCircle.y) < 20) {
                _this.biger(water);
                console.log("吃水");
                //this.caller.call(this.call);
            }
        });
    };
    /**变大 */
    eatWater.prototype.biger = function (water) {
        this.sca += 0.03;
        this.eatUI.scale(this.sca, this.sca);
        water.distroyWater();
        if (this.sca > 2.5)
            Laya.timer.clear(this, this.getWater);
    };
    return eatWater;
}());
//# sourceMappingURL=eatWater.js.map