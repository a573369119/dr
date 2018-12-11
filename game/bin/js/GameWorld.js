var GameWorld = /** @class */ (function () {
    function GameWorld() {
        /**水滴数 */
        this.waterCount = 120;
        /**土数量 */
        this.tuCount = 50;
        this.init();
    }
    /**初始化 */
    GameWorld.prototype.init = function () {
        this.greenCSize = 30;
        /**初始化数组 */
        this.arr_PosTu = new Array();
        this.arr_greenC = new Array();
        /**创建UI */
        this.gameUI = new ui.gameUI();
        Laya.stage.addChild(this.gameUI);
        /**创建鼠标 */
        this.createMouse();
        /**创建水滴 */
        this.createWater();
        /**创建地图 */
        this.createMap();
        /**创建红绿 链表*/
        this.createGR();
        /**启动世界关系 */
        Laya.timer.loop(16, this, this.relationShipRun);
        /**绑定鼠标事件 */
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseT);
        /** */
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
    };
    //-------------------------------------------------------------------关于鼠标
    /**private */
    GameWorld.prototype.mouseUp = function () {
        this.mouseTest.mouseIsDown = false;
        this.mouseTest.mousePos = 0;
    };
    /**鼠标检测 */
    GameWorld.prototype.mouseT = function () {
        /**调用鼠标检测 */
        if (this.mouseTest.mouseIsDown) {
            var isColiderTu = true;
            var mX = Laya.stage.mouseX;
            var mY = Laya.stage.mouseY;
            /**每次刷新碰墙事件 */
            isColiderTu = this.mouseColiderTu(mX, mY);
            //生成区域
            if (isColiderTu) {
                if (Math.sqrt(Math.pow(this.mouseTest.mousePos_remX - mX, 2) + Math.pow(this.mouseTest.mousePos_remY - mY, 2)) > 50) {
                    this.mouseTest.drwaC(Laya.stage.mouseX, Laya.stage.mouseY);
                    this.mouseTest.mousePos = 0;
                    this.mouseTest.mousePos_remX = mX;
                    this.mouseTest.mousePos_remY = mY;
                    // console.log(Laya.stage.mouseX+","+Laya.stage.mouseX);
                }
                this.mousePushGreen();
            }
        }
        ////////////////
    };
    /**鼠标碰墙事件 */
    GameWorld.prototype.mouseColiderTu = function (x, y) {
        for (var i = 0; i < this.arr_PosTu.length; i++) {
            if (Math.sqrt(Math.pow(this.arr_PosTu[i].x - x, 2) + Math.pow(this.arr_PosTu[i].y - y, 2)) < 20) {
                return false;
            }
        }
        return true;
    };
    /**创建鼠标对象 */
    GameWorld.prototype.createMouse = function () {
        this.mouseTest = new MouseTest(100, 200, 30, "#fff", "#fff");
        this.gameUI.sprite_go.addChild(this.mouseTest.spriteCircle);
    };
    /**鼠标推挤 */
    GameWorld.prototype.mousePushGreen = function () {
        var mX = Laya.stage.mouseX;
        var mY = Laya.stage.mouseY;
        var arr = [];
        //**获取碰撞小球 */
        for (var i = 0; i < this.arr_greenC.length; i++) {
            if (Tool.ins.countDic_2(this.arr_greenC[i].spriteCircle.x, this.arr_greenC[i].spriteCircle.y, mX, mY) < 50) {
                arr.push(this.arr_greenC[i]);
            }
        }
        //**计算逻辑 */
        for (var i = 0; i < arr.length; i++) {
            var dic = 45 - Tool.ins.countDic_2(arr[i].spriteCircle.x, arr[i].spriteCircle.y, mX, mY);
            if (dic > 0) {
                arr[i].spriteCircle.x += dic * this.rotationDeal(arr[i], mX, mY, "cos");
                arr[i].spriteCircle.y += dic * this.rotationDeal(arr[i], mX, mY, "sin");
                // console.log("成功移动");
                // console.log(arr[i].spriteCircle.x + "," + arr[i].spriteCircle.y);
                var tu = this.getRcentTu("head");
                var tu_2 = this.getRcentTu("end");
                //头结点与最近的土
                this.linkManager.update(tu, tu_2);
            }
            else {
                // console.log("<<<??" + arr[i].x + ","  + arr[i].y);
                // console.log(arr[i]);
            }
        }
    };
    /**角度处理函数
     *
     *  传入 碰撞物体
     *
     *  获取正选 或余弦  或正切
     *
     *  返回 对应值
     *
     *  sin  对边/斜边
     *  cos  临边/斜边
     *  tan  对边/临边
     * */
    GameWorld.prototype.rotationDeal = function (cc, mX, mY, getString) {
        /**斜边 */
        var c = Math.sqrt(Math.pow(mX - cc.spriteCircle.x, 2) + Math.pow(mY - cc.spriteCircle.y, 2));
        /**临边 */
        var a = cc.spriteCircle.x - mX;
        /**对边 */
        var b = cc.spriteCircle.y - mY;
        if (getString == "sin") {
            //console.log("#sin ==" + (b/c));
            return (b / c);
        }
        else if (getString == "cos") {
            //console.log("#cos ==" + (a/c));
            return (a / c);
        }
        else {
            //console.log("#tan ==" + (b/a));//对边 比 临边 
            return (b / a);
        }
    };
    //---------------------------------------------------------------------------------鼠标
    //---------------------------------------------------------------------------------链表
    /**创建起始节点 */
    GameWorld.prototype.createGR = function () {
        var ch = new GreenC(515, 300, this.greenCSize);
        this.arr_greenC.push(ch);
        this.gameUI.sprite_go.addChild(ch.spriteCircle);
        var ce = new GreenC(615, 300, this.greenCSize);
        this.arr_greenC.push(ce);
        this.gameUI.sprite_go.addChild(ce.spriteCircle);
        var head = new GreenPoint(ch);
        var end = new GreenPoint(ce);
        this.linkManager = new LinkManager(head, end, this.gameUI.sprite_go, this.arr_greenC);
        this.linkManager.initHeadEnd(this.getRcentTu("head"), this.getRcentTu("end"));
    };
    /**新创建一个节点 */
    GameWorld.prototype.newPoint = function () {
        var ch = new GreenC(515, 300, 15);
        this.arr_greenC.push(ch);
        this.gameUI.sprite_go.addChild(ch.spriteCircle);
        return new GreenPoint(ch);
    };
    /**寻找最近的tu */
    GameWorld.prototype.getRcentTu = function (stringName) {
        var point = this.linkManager.linkEndPoint;
        if (stringName == "head") {
            point = this.linkManager.linkHeadPoint;
        }
        var x = point.g.spriteCircle.x;
        var y = point.g.spriteCircle.y;
        var mix = Tool.ins.countDic_2(this.arr_PosTu[0].x, this.arr_PosTu[0].y, x, y);
        var index = 0;
        for (var i = 1; i < this.arr_PosTu.length; i++) {
            var dic = Tool.ins.countDic_2(this.arr_PosTu[i].x, this.arr_PosTu[i].y, x, y);
            if (mix > dic) {
                index = i;
                mix = dic;
            }
        }
        return this.arr_PosTu[index];
    };
    //---------------------------------------------------------------------------------链表
    /**处理水碰撞地面 */
    GameWorld.prototype.coliderTu = function (water, tu) {
        water.setColider(tu);
    };
    /**创建水滴 */
    GameWorld.prototype.createWater = function () {
        this.arr_Water = new Array();
        var water;
        for (var i = 0; i < this.waterCount; i++) {
            water = new Water(510 + i * 0.1, 210 + i * 0.1, 10, "#00f", "#00f");
            this.gameUI.sprite_go.addChild(water.spriteCircle);
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
            this.gameUI.sprite_go.addChild(tu.spriteCircle);
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
        //------------------左
        for (var i = 0; i < this.tuCount; i++) {
            object = {};
            //  tu = new Tu(0+i * 10,310,30,"#880","#880");
            //  this.arr_Tu_1.push(tu);
            object.x = 0 + i * 10;
            object.y = 310;
            this.arr_PosTu.push(object);
        }
        //--------------------落下第一横边
        for (var i = 0; i < this.tuCount; i++) {
            object = {};
            //  tu = new Tu(250+i * 10,465,30,"#880","#880");
            //  this.arr_Tu_1.push(tu);
            object.x = 255 + i * 10;
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
        for (var i = 0; i < 10; i++) {
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
            if (Math.sqrt(Math.pow(this.arr_PosTu[i].x - water.spriteCircle.x, 2) + Math.pow(this.arr_PosTu[i].y - water.spriteCircle.y, 2)) < 50) {
                for (var t = 0; t < this.arr_Tu_1.length; t++) {
                    if (this.arr_Tu_1[t].index == i) {
                        // console.log("已有");
                        isbreak = true;
                        break;
                    }
                }
                if (!isbreak) {
                    tu = Laya.Pool.getItem("tu");
                    if (tu) { //对象次有土
                        tu.showCircle(this.arr_PosTu[i].x, this.arr_PosTu[i].y);
                        tu.index = i;
                        // console.log("对象池" + i );
                    }
                    else {
                        tu = new Tu(this.arr_PosTu[i].x, this.arr_PosTu[i].y, 30, "#880", "#880");
                        this.gameUI.sprite_go.addChild(tu.spriteCircle);
                        this.arr_Tu_1.push(tu);
                        tu.index = i;
                    }
                }
            }
        }
    };
    //---------------------------------------------------------------------------------------------------------------------
    /**世界关系互联 */
    GameWorld.prototype.relationShipRun = function () {
        //动态获取墙壁
        var _this = this;
        this.arr_Water.forEach(function (water) {
            _this.getTu(water);
            //土碰撞
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
                        var dic = void 0;
                        var r = void 0;
                        var isbreak = false;
                        for (var w = 0; w < _this.arr_Water.length; w++) {
                            isbreak = false;
                            dic = Math.sqrt(Math.pow(tu.spriteCircle.x - _this.arr_Water[w].spriteCircle.x, 2) + Math.pow(tu.spriteCircle.y - _this.arr_Water[w].spriteCircle.y, 2));
                            r = (_this.arr_Water[w].r + tu.r + 5);
                            if (dic < r) {
                                isbreak = true;
                                break;
                            }
                        }
                        if (!isbreak) {
                            tu.index = -1;
                            tu.destroyCircle();
                            Laya.Pool.recover("tu", tu);
                        }
                    }
                }
            });
            //绿球碰撞
            _this.arr_greenC.forEach(function (gC) {
                if (gC.spriteCircle.visible == true) {
                    if (Tool.ins.countDic(gC, water) == 1 || Tool.ins.countDic(gC, water) == 2) {
                        //处理碰撞效果
                        if (Tool.ins.countDic(gC, water) == 2.5) {
                        }
                        else {
                            _this.coliderTu(water, gC);
                        }
                    }
                    else {
                        water.removeColider(gC);
                    }
                }
            });
            ///
        });
    };
    return GameWorld;
}());
//# sourceMappingURL=GameWorld.js.map