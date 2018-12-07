var GameWorld = /** @class */ (function () {
    function GameWorld() {
        /**水滴数 */
        this.waterCount = 1;
        /**土数量 */
        this.tuCount = 45;
        this.init();
    }
    /**初始化 */
    GameWorld.prototype.init = function () {
        /**水 */
        var water;
        this.arr_Water = new Array();
        for (var i = 0; i < this.waterCount; i++) {
            water = new Water(100, 100, 20, '#00f', '#00f');
            this.arr_Water.push(water);
        }
        /**土 */
        this.arr_Tu = Array();
        var tu;
        for (var i = 0; i < this.tuCount; i++) {
            tu = new Tu(0, 300, 10, '#88f', '#88f');
            this.arr_Tu.push(tu);
        }
        this.tuList();
        /**启动世界关系 */
        Laya.timer.loop(16, this, this.relationShipRun);
    };
    /**土排版*/
    GameWorld.prototype.tuList = function () {
        for (var i = 0; i < this.arr_Tu.length; i++) {
            this.arr_Tu[i].showCircle(i * 2 * this.arr_Tu[i].r, 1000);
        }
    };
    /**世界关系互联 */
    GameWorld.prototype.relationShipRun = function () {
        for (var i = 0; i < this.arr_Water.length; i++) {
            for (var t = 0; t < this.arr_Tu.length; t++) {
                if (this.arr_Water[i].judgeColider(this.arr_Tu[t])) {
                    this.mediatorColider_water(this.arr_Water[i], this.arr_Tu[t]);
                    break;
                }
            }
        }
    };
    /** */
    GameWorld.prototype.mediatorColider_water = function (water, Tu) {
        water.forceOher(Tu);
    };
    return GameWorld;
}());
//# sourceMappingURL=GameWorld.js.map