class Tu extends Circle{

    constructor(x,y,r){
        super(x,y,r);
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
        this.x = x;
        this.y = y;
    }
}