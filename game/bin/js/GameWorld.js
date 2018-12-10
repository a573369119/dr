var GameWorld = /** @class */ (function () {
    function GameWorld() {
        /**水滴数 */
        this.waterCount = 2;
        /**土数量 */
        this.tuCount = 50;
        this.init();
    }
    /**初始化 */
    GameWorld.prototype.init = function () {
        /**初始化数组 */
        this.arr_PosTu = new Array();
        /**创建UI */
        this.gameUI = new ui.gameUI();
        Laya.stage.addChild(this.gameUI);
        /**启动世界关系 */
        Laya.timer.loop(16, this, this.relationShipRun);
        /**创建水滴 */
        this.createWater();
        /**创建地图 */
        this.createMap();
        //土排版
        this.tuList();
    };
    /**土排版*/
    GameWorld.prototype.tuList = function () {
    };
    /**世界关系互联 */
    GameWorld.prototype.relationShipRun = function () {
        //动态获取墙壁
        var _this = this;
        this.arr_Water.forEach(function (water) {
            _this.getTu(water);
            var isbreak = false;
            _this.arr_Tu_1.forEach(function (tu) {
                if (tu.spriteCircle.visible == true) {
                    if (Tool.ins.countDic(tu, water) == 1 || Tool.ins.countDic(tu, water) == 2) {
                        //处理碰撞效果
                        if (Tool.ins.countDic(tu, water) == 2.5) {
                        }
                        else {
                            _this.coliderTu(water, tu);
                        }
                    }
                    else {
                        water.removeColider(tu);
                        for (var p = 0; p < _this.arr_PosTu.length; p++) {
                            if (Math.sqrt(Math.pow(_this.arr_PosTu[p].x - water.spriteCircle.x, 2) + Math.pow(_this.arr_PosTu[p].y - water.spriteCircle.y, 2)) < 60) {
                                isbreak = true;
                                break;
                            }
                        }
                        if (!isbreak) {
                            tu.destroyCircle();
                            Laya.Pool.recover("tu", tu);
                            console.log("离开的是" + tu.index);
                            tu.index = -1;
                        }
                    }
                }
            });
        });
    };
    /**处理水碰撞地面 */
    GameWorld.prototype.coliderTu = function (water, tu) {
        water.setColider(tu);
    };
    /** */
    GameWorld.prototype.mediatorColider_water = function (water, Tu) {
    };
    /**创建水滴 */
    GameWorld.prototype.createWater = function () {
        this.arr_Water = new Array();
        var water;
        for (var i = 0; i < this.waterCount; i++) {
            water = new Water(510 + i * 0.1, 210 + i * 0.1, 10, "#00f", "#00f");
            this.arr_Water.push(water);
        }
    };
    /**创建地图 */
    GameWorld.prototype.createMap = function () {
        /**创建墙壁 */
        this.createTu();
    };
    /**创建墙壁 */
    GameWorld.prototype.createTu = function () {
        this.arr_Tu_1 = new Array();
        var tu;
        var object;
        var x = 0;
        var y = 0;
        for (var i = 0; i < 3; i++) {
            tu = new Tu(650 + i * 10, 310, 30, "#880", "#880");
            tu.destroyCircle();
            Laya.Pool.recover("tu", tu);
            this.arr_Tu_1.push(tu);
        }
        //------------------
        for (var i = 0; i < 10; i++) {
            object = {};
            //  tu = new Tu(650+i*10,310,30,"#880","#880");
            //  this.arr_Tu_1.push(tu);
            object.x = 650 + i * 10;
            object.y = 310;
            this.arr_PosTu.push(object);
        }
        //------------------
        for (var i = 0; i < this.tuCount; i++) {
            object = {};
            //  tu = new Tu(0+i * 10,310,30,"#880","#880");
            //  this.arr_Tu_1.push(tu);
            object.x = 0 + i * 10;
            object.y = 310;
            this.arr_PosTu.push(object);
        }
        //--------------------
        for (var i = 0; i < this.tuCount; i++) {
            object = {};
            //  tu = new Tu(250+i * 10,465,30,"#880","#880");
            //  this.arr_Tu_1.push(tu);
            object.x = 250 + i * 10;
            object.y = 465;
            this.arr_PosTu.push(object);
        }
        // --------------------------第一斜边
        for (var i = 0; i < 7; i++) {
            object = {};
            // tu = new Tu(i * 10 + 175,560 - i*13,30,"#880","#880");
            //  this.arr_Tu_2.push(tu);
            object.x = i * 10 + 175;
            object.y = 560 - i * 13;
            this.arr_PosTu.push(object);
        }
        //---------------------------第一竖边
        for (var i = 0; i < 18; i++) {
            object = {};
            //  tu = new Tu(179,755 - i*10,30,"#880","#880");
            //  this.arr_Tu_2.push(tu);
            object.x = 179;
            object.y = 755 - i * 10;
            this.arr_PosTu.push(object);
        }
        //_______________第二竖边
        for (var i = 0; i < 15; i++) {
            object = {};
            //   tu = new Tu(133,1172 - i*10,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
            object.x = 133;
            object.y = 1172 - i * 10;
            this.arr_PosTu.push(object);
        }
        //______________最左竖边
        for (var i = 0; i < 100; i++) {
            object = {};
            //   tu = new Tu(-10,1326 - i*10,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
            object.x = -10;
            object.y = 1326 - i * 10;
            this.arr_PosTu.push(object);
        }
        //______________最右竖边
        for (var i = 0; i < 100; i++) {
            object = {};
            //   tu = new Tu(735,1326 - i*10,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
            object.x = 735;
            object.y = 1326 - i * 10;
            this.arr_PosTu.push(object);
        }
        //______________中间竖边
        for (var i = 0; i < 65; i++) {
            object = {};
            //   tu = new Tu(328,1326 - i*10,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
            object.x = 328;
            object.y = 1326 - i * 10;
            this.arr_PosTu.push(object);
        }
        //______________第二斜边
        for (var i = 0; i < 5; i++) {
            object = {};
            //   tu = new Tu(328 + i*10,665 - i*13,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
            object.x = 328 + i * 10;
            object.y = 665 - i * 13;
            this.arr_PosTu.push(object);
        }
        //______________第二横边
        for (var i = 0; i < 15; i++) {
            object = {};
            //   tu = new Tu(383 + i*10,610,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
            object.x = 383 + i * 10;
            object.y = 610;
            this.arr_PosTu.push(object);
        }
        //______________第三横边
        for (var i = 0; i < 7; i++) {
            object = {};
            //   tu = new Tu(373 + i*10,760,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
            object.x = 373 + i * 10;
            object.y = 760;
            this.arr_PosTu.push(object);
        }
        //——————————————第四横边
        for (var i = 0; i < 3; i++) {
            object = {};
            //   tu = new Tu(672 + i*10,760,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
            object.x = 672 + i * 10;
            object.y = 760;
            this.arr_PosTu.push(object);
        }
        //——————————————第五横边
        for (var i = 0; i < 10; i++) {
            object = {};
            //   tu = new Tu(470 + i*10,909,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
            object.x = 470 + i * 10;
            object.y = 909;
            this.arr_PosTu.push(object);
        }
        //——————————————第六横边
        for (var i = 0; i < 10; i++) {
            object = {};
            //   tu = new Tu(600 + i*10,940,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
            object.x = 600 + i * 10;
            object.y = 940;
            this.arr_PosTu.push(object);
        }
    };
    /**获取Tu */
    GameWorld.prototype.getTu = function (water) {
        var tu;
        for (var i = 0; i < this.arr_PosTu.length; i++) {
            var isbreak = false;
            if (Math.sqrt(Math.pow(this.arr_PosTu[i].x - water.spriteCircle.x, 2) + Math.pow(this.arr_PosTu[i].y - water.spriteCircle.y, 2)) < 60) {
                for (var t = 0; t < this.arr_Tu_1.length; t++) {
                    if (this.arr_Tu_1[t].index == i) {
                        // console.log("已有");
                        isbreak = true;
                        break;
                    }
                }
                if (!isbreak) {
                    console.log("没有" + i);
                    tu = Laya.Pool.getItem("tu");
                    if (tu) { //对象次有土
                        tu.showCircle(this.arr_PosTu[i].x, this.arr_PosTu[i].y);
                        tu.index = i;
                    }
                    else {
                        tu = new Tu(this.arr_PosTu[i].x, this.arr_PosTu[i].y, 30, "#880", "#880");
                        this.arr_Tu_1.push(tu);
                        tu.index = i;
                    }
                }
                // if(tu)
                // {
                //     tu.showCircle(this.arr_PosTu[i].x,this.arr_PosTu[i].y);
                //     // console.log("对象池" + i);
                // }
                // else
                // {   
                //      tu = new Tu(this.arr_PosTu[i].x,this.arr_PosTu[i].y,30,"#880","#880");
                //      this.arr_Tu_1.push(tu);    
                //     //  console.log("新创建" + i);
                // }
            }
        }
    };
    return GameWorld;
}());
//# sourceMappingURL=GameWorld.js.map