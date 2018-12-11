class GreenPoint {
    /**指针 g 指向一个绿球 当前节点*/
    public g : any;
    /**头结点 除了首尾，其他的节点均没有*/
    public last : GreenPoint;
    /**与上一个节点的距离 */
    public next : GreenPoint ; 

    constructor(g){
        this.g = g;
    }

    /**返回与下一个节点的距离 */
    public getNextDic() : number
    {
        return Tool.ins.countDic_2(this.g.spriteCircle.x,this.g.spriteCircle.y,this.next.g.spriteCircle.x,this.next.g.spriteCircle.y);
    }

    /**返回上一节点的距离 */
    public getLastDic() : number
    {
        if(this.last === undefined) return;
        else    return Tool.ins.countDic_2(this.last.g.spriteCircle.x,this.last.g.spriteCircle.y,this.g.spriteCircle.x,this.g.spriteCircle.y);
    }

    public setPos(x,y)
    {
        this.g.spriteCircle.x = x;
        this.g.spriteCircle.y = y;
        this.g.spriteCircle.visible = true;
    }

    public reGet() : void
    {
        this.g.spriteCircle.visible = false;
        Laya.Pool.recover("point",this);
    }
}