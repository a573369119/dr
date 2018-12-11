class GreenPoint {
    /**指针 g 指向一个绿球 当前节点*/
    public g : GreenC;
    /**头结点 除了首尾，其他的节点均没有*/
    public headEnd : Tu;
    /**与上一个节点的距离 */
    public next : GreenC ; 

    constructor(g,next,headEnd?,headDic?){
        this.g = g;
        this.next = next;
        if(headEnd !== undefined)
        {
            this.headEnd = this.headEnd;
        }
       
    }

    /**返回与下一个节点的距离 */
    public getNextDic() : number
    {
        return Tool.ins.countDic_2(this.g.spriteCircle.x,this.g.spriteCircle.y,this.next.spriteCircle.x,this.next.spriteCircle.y);
    }

    /**返回上一节点的距离 */
    public getLastDic() : number
    {
        if(this.headEnd === undefined) return;
        else    return Tool.ins.countDic_2(this.headEnd.spriteCircle.x,this.headEnd.spriteCircle.y,this.g.spriteCircle.x,this.g.spriteCircle.y);
    }
}