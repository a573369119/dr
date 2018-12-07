class Circle{
    public r : number;
    public speed : number;
    public count : number = 5;//精确值 5个像素 
    public spriteCircle : Laya.Sprite;

    constructor(x,y,r,color,Full,speed?){
        this.r = r;
        if(speed) this.speed = speed
        else this.speed = 2.5;
        this.drawSelf(x,y,r,color,Full);
    }


    protected drawSelf(x,y,r,color,Full)　: void
    {
        this.spriteCircle = new Laya.Sprite();
        Laya.stage.addChild(this.spriteCircle);
        this.spriteCircle.x = x;
        this.spriteCircle.y = y;
        this.spriteCircle.pivot(r/2,r/2);
        this.spriteCircle.graphics.drawCircle(0,0,this.r,Full,color,2);
    }

    /**判断在哪儿  1 在圆外不想切  2在圆外相切  3、相交切圆心在圆中*/
    public getWhereCircle(circle) : number
    {
        let dicX = this.getTowPointDic(circle) - (this.r + circle.r);
        if(dicX > 0 ) return 1;
        if(dicX == 0) return 2;
        if(this.r + dicX < circle.r) return 3;
        //console.log(dicX);
        return null;
    }

    /**判断是否碰撞 */
    public judgeColider(circle) : boolean
    {
        let dicX = this.getTowPointDic(circle) - (this.r + circle.r);
        if(dicX < 0 && dicX > -2*this.count)
        {
            // console.log("已碰撞");
            return true;
        }
        else
            return false;
    }

    /**获得两点之间的距离 */
    protected getTowPointDic(circle) : number
    {
        return  Math.sqrt(Math.pow((circle.spriteCircle.x-this.spriteCircle.x),2)+Math.pow((circle.spriteCircle.y-this.spriteCircle.y),2));
    } 
    
}