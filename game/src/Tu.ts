class Tu extends Circle{

    constructor(x,y,r,color,full){
        super(x,y,r,color,full);
    }

    /** 消失*/
    public destroyCircle() : void
    {
        this.spriteCircle.visible = false;
    }

    /**出现 */
    public showCircle(x,y) : void
    {
        this.spriteCircle.visible = true;
        this.spriteCircle.x = x;
        this.spriteCircle.y = y;
    }
}