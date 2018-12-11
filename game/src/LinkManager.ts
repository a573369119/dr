class LinkManager {
    /**链表头结点 */
    public linkHeadPoint : GreenPoint;
    /**链表尾节点 */
    public linkEndPoint : GreenPoint;


    constructor(linkHeadPoint,linkEndPoint){
        this.linkHeadPoint = linkHeadPoint;
        this.linkEndPoint = linkEndPoint;
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
    }
}