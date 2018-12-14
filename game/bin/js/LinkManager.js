var LinkManager = /** @class */ (function () {
    function LinkManager(linkHeadPoint, linkEndPoint, view, arr_Colider) {
        this.linkHeadPoint = linkHeadPoint;
        this.linkEndPoint = linkEndPoint;
        this.view = view;
        this.arr_GreenColider = arr_Colider;
        this.createLink();
    }
    /**初始化头结点，尾节点 */
    LinkManager.prototype.createLink = function () {
        var headC = this.linkHeadPoint.g;
        var endC = this.linkEndPoint.g;
        var dic = Tool.ins.countDic_2(headC.spriteCircle.x, headC.spriteCircle.y, endC.spriteCircle.x, endC.spriteCircle.y);
        //15绿球半径 30直径
        var count = Math.floor(dic / 30);
        var widthDic = (dic / 30) % 1;
        // console.log(widthDic);
        this.linkMovePoint = this.linkHeadPoint;
        var c;
        var p;
        for (var i = 0; i < count; i++) {
            if (i == count - 1) {
                this.linkMovePoint.next = this.linkEndPoint;
                this.linkEndPoint.last = this.linkMovePoint;
            }
            else {
                //创建小球
                c = new GreenC(this.linkMovePoint.g.spriteCircle.x + widthDic + 30, this.linkMovePoint.g.spriteCircle.y, 30);
                this.view.addChild(c.spriteCircle);
                this.arr_GreenColider.push(c);
                //创建节点
                p = new GreenPoint(c);
                this.linkMovePoint.next = p;
                p.last = this.linkMovePoint;
                this.linkMovePoint = this.linkMovePoint.next;
            }
        }
    };
    /**初始化头尾节点 */
    LinkManager.prototype.initHeadEnd = function (tuHead, tuEnd) {
        //新建节点
        var point;
        point = new GreenPoint(tuHead);
        this.linkHeadPoint.last = point;
        point.next = this.linkHeadPoint;
        point = new GreenPoint(tuEnd);
        this.linkEndPoint.next = point;
        // point.next = this.linkEndPoint;
    };
    //------------------------------------------------更新操作-------------------------------
    LinkManager.prototype.update = function (tu, tu2) {
        // console.log(this.linkHeadPoint);
        // this.logLink();
        //更新最近的土
        this.linkHeadPoint.last.g = tu;
        this.linkEndPoint.next.g = tu2;
        var x;
        var y;
        //查看最近的土的距离
        //土1
        var dic = Tool.ins.countDic_2(this.linkHeadPoint.g.spriteCircle.x, this.linkHeadPoint.g.spriteCircle.y, tu.x, tu.y);
        if (dic > 30) {
            x = (this.linkHeadPoint.g.spriteCircle.x + this.linkHeadPoint.last.g.x) / 2;
            y = (this.linkHeadPoint.g.spriteCircle.y + this.linkHeadPoint.last.g.y) / 2;
            this.addPointTo("head", this.linkHeadPoint.last, x, y);
            //更换父节点
        }
        //土2
        dic = Tool.ins.countDic_2(this.linkEndPoint.g.spriteCircle.x, this.linkEndPoint.g.spriteCircle.y, tu2.x, tu2.y);
        if (dic > 30) {
            x = (this.linkEndPoint.g.spriteCircle.x + this.linkEndPoint.next.g.x) / 2;
            y = (this.linkEndPoint.g.spriteCircle.y + this.linkEndPoint.next.g.y) / 2;
            this.addPointTo("end", this.linkEndPoint, x, y);
        }
        //球与球之间
        this.linkMovePoint = this.linkHeadPoint;
        var i = 0;
        while (this.linkMovePoint.next) {
            if (!this.linkMovePoint.next.g.spriteCircle) {
                return;
            }
            // console.log(this.linkMovePoint.next.g);
            dic = this.linkMovePoint.getNextDic();
            // console.log(dic);
            //循环检测距离
            if (dic > 30) {
                // console.log("创建小球"); 
                x = (this.linkMovePoint.g.spriteCircle.x + this.linkMovePoint.next.g.spriteCircle.x) / 2;
                y = (this.linkMovePoint.g.spriteCircle.y + this.linkMovePoint.next.g.spriteCircle.y) / 2;
                this.addPointTo(null, this.linkMovePoint, x, y);
            }
            else if (dic < 15) {
                // console.log("融合");
                if (dic < 3) {
                    //this.toEmpty(this.linkMovePoint);
                }
                else {
                    this.toOne(this.linkMovePoint);
                }
            }
            this.linkMovePoint = this.linkMovePoint.next;
        }
    };
    /**消除两个节点 */
    LinkManager.prototype.toEmpty = function (currentNode) {
        var keepNextNode = currentNode.next.next;
        var keepLastNode = currentNode.last;
        currentNode.last.next = keepNextNode;
        currentNode.next.next.last = keepLastNode;
        currentNode.reGet();
        currentNode.next.reGet();
        currentNode.next.next = null;
        currentNode.next.last = null;
        currentNode.next = null;
        currentNode.last = null;
        this.linkMovePoint = keepNextNode;
        // console.log("回收两个");
    };
    /**添加新节点  在point 后面加一个节点*/
    LinkManager.prototype.addPointTo = function (stringName, point, x, y) {
        var newP;
        newP = Laya.Pool.getItem('point');
        if (!newP) {
            newP = this.newPoint(this.newGreenC(x, y));
        }
        else {
            newP.setPos(x, y);
            // console.log("对象池");
        }
        newP.next = point.next;
        if (stringName == "head") {
            newP.last = this.linkHeadPoint.last;
            this.linkHeadPoint.last = newP;
            this.linkHeadPoint = this.linkHeadPoint.last;
        }
        else if (stringName == "end") {
            newP.last = point;
            this.linkEndPoint.next = newP;
            this.linkEndPoint = this.linkEndPoint.next;
            // console.log("新添加节点：");
            console.log(this.linkEndPoint.last);
        }
        point.next = newP;
        newP.last = point;
    };
    /**创建新节点 */
    LinkManager.prototype.newPoint = function (valueG) {
        var g = valueG;
        var Point = new GreenPoint(g);
        this.arr_GreenColider.push(valueG);
        return Point;
    };
    /**新建绿色球 */
    LinkManager.prototype.newGreenC = function (x, y) {
        var greenC = new GreenC(x, y, 30);
        // greenC.spriteCircle.visible = false;
        this.view.addChild(greenC.spriteCircle);
        return greenC;
    };
    /**融合 */
    LinkManager.prototype.toOne = function (currentNode) {
        if (!currentNode.g.spriteCircle)
            return;
        var node = currentNode.next.next;
        currentNode.next.next = null;
        currentNode.next.reGet();
        currentNode.next = node;
        // console.log("回收");
    };
    /**遍历链表 */
    LinkManager.prototype.logLink = function () {
        this.linkMovePoint = this.linkHeadPoint;
        console.log(this.linkHeadPoint);
        console.log(this.linkHeadPoint.last);
        while (this.linkMovePoint.next) {
            console.log("==>");
            console.log(this.linkMovePoint);
            this.linkMovePoint = this.linkMovePoint.next;
        }
        console.log(" ==> end");
        console.log(this.linkEndPoint.next);
    };
    //-------------------------------------------------------------------------------------------
    /**检测是否消除 */
    LinkManager.prototype.updateDestory = function (arr_MousePos) {
        var mX = Laya.stage.mouseX;
        var mY = Laya.stage.mouseY;
        var selectArr = [];
        for (var i = 0; i < arr_MousePos.length; i++) {
            if (Tool.ins.countDic_2(arr_MousePos[i].x, arr_MousePos[i].y, mX, mY) < 100) {
                selectArr.push(arr_MousePos[i]);
            }
        }
        this.linkMovePoint = this.linkHeadPoint;
        while (this.linkMovePoint.next) {
            //循环检测距离
            for (var h = 0; h < selectArr.length; h++) {
                if (Tool.ins.countDic_2(selectArr[h].x, selectArr[h].y, this.linkMovePoint.g.spriteCircle.x, this.linkMovePoint.g.spriteCircle.y) < 20) {
                    this.arr_GreenColider.pop();
                }
            }
            this.linkMovePoint = this.linkMovePoint.next;
        }
    };
    return LinkManager;
}());
//# sourceMappingURL=LinkManager.js.map