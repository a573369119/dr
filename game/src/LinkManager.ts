
class LinkManager {
    /**链表头结点  15  30*/
    public linkHeadPoint : GreenPoint;
    /**链表尾节点  15  30*/
    public linkEndPoint : GreenPoint;
    /**移动指针  15  30*/
    public linkMovePoint : GreenPoint;
    /**添加层 */
    private view : any;
    /**arr 碰撞绿球*/
    private arr_GreenColider : Array<GreenC>;


    constructor(linkHeadPoint,linkEndPoint,view,arr_Colider){
        this.linkHeadPoint = linkHeadPoint;
        this.linkEndPoint = linkEndPoint;
        this.view = view;
        this.arr_GreenColider = arr_Colider;
        this.createLink();
    }

    /**初始化头结点，尾节点 */
    private createLink() : void
    {
        let headC = this.linkHeadPoint.g;
        let endC = this.linkEndPoint.g;  
        let dic = Tool.ins.countDic_2(headC.spriteCircle.x,headC.spriteCircle.y,endC.spriteCircle.x,endC.spriteCircle.y);
        //15绿球半径 30直径
        let count = Math.floor(dic/30);
        let widthDic = (dic/30)%1;
        console.log(widthDic);
        this.linkMovePoint = this.linkHeadPoint;
        let c : GreenC ;
        let p : GreenPoint; 
        for(let i=0; i<count; i++)
        {
            if(i==count-1)
            {
                this.linkMovePoint.next = this.linkEndPoint;
                this.linkEndPoint.last = this.linkMovePoint;
            }
            else
            {
                //创建小球
                c = new GreenC(this.linkMovePoint.g.spriteCircle.x + widthDic + 30,this.linkMovePoint.g.spriteCircle.y,30);
                this.view.addChild(c.spriteCircle);
                this.arr_GreenColider.push(c);
                //创建节点
                p = new GreenPoint(c);
                this.linkMovePoint.next = p;
                p.last = this.linkMovePoint;
                this.linkMovePoint =  this.linkMovePoint.next;
            }
        }
    }

    /**初始化头尾节点 */
    public initHeadEnd(tuHead,tuEnd) : void
    {
        //新建节点
        let point : GreenPoint;
        point = new GreenPoint(tuHead);
        this.linkHeadPoint.last = point;
        point.next = this.linkHeadPoint;
        point = new GreenPoint(tuEnd);
        this.linkEndPoint.next = point;
        // point.next = this.linkEndPoint;
    }
//------------------------------------------------更新操作-------------------------------
    public update(tu,tu2) : void // tu {x,y}
    {
        // console.log(this.linkHeadPoint);
        // this.logLink();
        //更新最近的土
        this.linkHeadPoint.last.g = tu;
        this.linkEndPoint.next.g = tu2;
        let x : number;
        let y : number;
        //查看最近的土的距离
        //土1
        let dic = Tool.ins.countDic_2(this.linkHeadPoint.g.spriteCircle.x,this.linkHeadPoint.g.spriteCircle.y,tu.x,tu.y);
        if(dic > 40)
        {
            x = (this.linkHeadPoint.g.spriteCircle.x + this.linkHeadPoint.last.g.x)/2;
            y = (this.linkHeadPoint.g.spriteCircle.y + this.linkHeadPoint.last.g.y)/2;
            this.addPointTo("head",this.linkHeadPoint.last,x,y);
            //更换父节点
        }
        //土2
        dic = Tool.ins.countDic_2(this.linkEndPoint.g.spriteCircle.x,this.linkEndPoint.g.spriteCircle.y,tu2.x,tu2.y);
        if(dic > 40)
        {
            x = (this.linkEndPoint.g.spriteCircle.x + this.linkEndPoint.next.g.x)/2;
            y = (this.linkEndPoint.g.spriteCircle.y + this.linkEndPoint.next.g.y)/2;
            this.addPointTo("end",this.linkEndPoint,x,y);
        }

        //球与球之间
        this.linkMovePoint = this.linkHeadPoint;
        let i = 0;
        while(this.linkMovePoint.next)
        {
            if(!this.linkMovePoint.next.g.spriteCircle)
            {
                return;
            }
            // console.log(this.linkMovePoint.next.g);
            dic = this.linkMovePoint.getNextDic();
            // console.log(dic);
            //循环检测距离
            if(dic > 40)
            {
                // console.log("创建小球"); 
                x = (this.linkMovePoint.g.spriteCircle.x + this.linkMovePoint.next.g.spriteCircle.x)/2;
                y = (this.linkMovePoint.g.spriteCircle.y + this.linkMovePoint.next.g.spriteCircle.y)/2;
                this.addPointTo(null,this.linkMovePoint,x,y);
            }

            else if(dic < 15  )
            {
                // console.log("融合");
                if(dic < 3)
                {
                    //this.toEmpty(this.linkMovePoint);
                }
                else
                {
                    this.toOne(this.linkMovePoint);
                }
            }

            this.linkMovePoint = this.linkMovePoint.next;
        }
    }
    /**消除两个节点 */
    private toEmpty(currentNode : GreenPoint) : void
    {
        let keepNextNode = currentNode.next.next;
        let keepLastNode = currentNode.last;
        currentNode.last.next = keepNextNode;
        currentNode.next.next.last = keepLastNode;
        currentNode.reGet();
        currentNode.next.reGet();
        currentNode.next.next = null;
        currentNode.next.last = null;
        currentNode.next = null;
        currentNode.last = null;
        this.linkMovePoint = keepNextNode;
        console.log("回收两个");
    }


    /**添加新节点  在point 后面加一个节点*/
    private addPointTo(stringName,point:GreenPoint,x,y) : void
    {
        let newP : GreenPoint 
        newP = Laya.Pool.getItem('point');
        if(!newP)
        {
            newP = this.newPoint(this.newGreenC(x,y));
        }
        else
        {
            newP.setPos(x,y);
            console.log("对象池");
        }
        newP.next = point.next;
        if(stringName == "head")
        {
            newP.last = this.linkHeadPoint.last;
            this.linkHeadPoint.last = newP;
            this.linkHeadPoint = this.linkHeadPoint.last;
        }
        else if(stringName == "end")
        {
            newP.last = point;
            this.linkEndPoint.next = newP;
            this.linkEndPoint = this.linkEndPoint.next;
            console.log("新添加节点：");
            console.log(this.linkEndPoint.last);
        }
        point.next = newP;
        newP.last = point;
    }

    /**创建新节点 */
    private newPoint(valueG) : GreenPoint
    {   
        let g = valueG;
        let Point = new GreenPoint(g);

        this.arr_GreenColider.push(valueG);

        return Point;
    }

    /**新建绿色球 */
    private newGreenC(x,y) : GreenC
    {
        let greenC = new GreenC(x,y,30);
        // greenC.spriteCircle.visible = false;
        this.view.addChild(greenC.spriteCircle);
        return greenC;
    }

    /**融合 */
    private toOne(currentNode : GreenPoint) : void
    {
        if(!currentNode.g.spriteCircle) return;
        let node = currentNode.next.next;
        currentNode.next.next = null;
        currentNode.next.reGet();
        currentNode.next = node;
        console.log("回收");
    }

    /**遍历链表 */
    private logLink() : void
    {
        this.linkMovePoint = this.linkHeadPoint;
        console.log(this.linkHeadPoint);
        console.log(this.linkHeadPoint.last);
        while(this.linkMovePoint.next)
        {
            console.log("==>");
            console.log(this.linkMovePoint);
            this.linkMovePoint = this.linkMovePoint.next;
        }
        console.log(" ==> end");
        console.log(this.linkEndPoint.next);
    }

//-------------------------------------------------------------------------------------------
    /**检测是否消除 */
    public updateDestory(arr_MousePos:Array<any>) : void
    {
        let mX = Laya.stage.mouseX;
        let mY = Laya.stage.mouseY;
        let selectArr = [];
        for(let i=0;i<arr_MousePos.length;i++)
        {
            if(Tool.ins.countDic_2(arr_MousePos[i].x,arr_MousePos[i].y,mX,mY) < 100)
            {
                selectArr.push(arr_MousePos[i]);
            }
        }
        this.linkMovePoint = this.linkHeadPoint;
        while(this.linkMovePoint.next)
        {
            //循环检测距离
            for(let h=0;h<selectArr.length;h++)
            {
                if(Tool.ins.countDic_2(selectArr[h].x,selectArr[h].y,this.linkMovePoint.g.spriteCircle.x,this.linkMovePoint.g.spriteCircle.y)<20)
                {
                    this.arr_GreenColider.pop();
                }

            }
            this.linkMovePoint = this.linkMovePoint.next;
        }
    }
}