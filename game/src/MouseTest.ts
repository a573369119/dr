/**
 * 鼠标检测
 */
class MouseTest extends Circle{
    /**鼠标的x */
    private mouseX : number;
    /**y */
    private mouseY : number;
    /**颜色 */
    private color : string ;
    /**鼠标前一个位置 */
    public mousePos : number;

    public mousePos_remX : number;

    public mousePos_remY : number;

    public mouseIsDown : boolean;
    

    constructor(x,y,r,color,full){
        super(x,y,r,color,full);
        this.color = color;
        this.mousePos = 0;
        this.spriteCircle.x = 0;
        this.spriteCircle.y = 0;
        this.spriteCircle.pivot(0,0);
        //事件绑定
        Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.remPos);
        // Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.testMouse);
        // Laya.stage.on(Laya.Event.MOUSE_UP,this,this.setRe);
        // Laya.timer.loop(1,this,this.testMouse);
        
    }

    public get(string) : number
    {
        if(string =="x")
        {
            return this.mouseX;
        }
        else
        {
            return this.mouseY;
        }
    }

    /**是重写 */
    private setRe() : void
    {
        this.mousePos = 0;
        this.mouseIsDown = false;
        
    }

    /** 记录按下的位置 */
    private remPos() : void
    {
        let mX = Laya.stage.mouseX;
        let mY = Laya.stage.mouseY;
        if(this.mousePos == 0)
        {//未记录
            this.mousePos_remX = mX;
            this.mousePos_remY = mY;
        }
        this.mouseIsDown = true;
    }


    /**绘制 */
    public drwaC(x,y) : void
    {
        this.spriteCircle.graphics.drawCircle(x,y,this.r,this.color,this.color,2);
    }



    // /**调用鼠标检测 */
    // public testMouse() : any
    // {
    //     if(this.mouseIsDown)
    //     {
    //         let mX = Laya.stage.mouseX;
    //         let mY = Laya.stage.mouseY; 
    //         if(Math.sqrt(Math.pow(this.mousePos_remX - mX,2)+Math.pow(this.mousePos_remY-mY,2)) >25)
    //         {

    //             this.drwaC(Laya.stage.mouseX,Laya.stage.mouseY);
    //             this.mousePos = 0;
    //             this.mousePos_remX = mX;
    //             this.mousePos_remY = mY;
    //             let object : any = {};
    //             object.x = Laya.stage.mouseX;
    //             object.y = Laya.stage.mouseY;
    //             return object;
    //         }
    //         else
    //         {
    //             return null;
    //         }
    //     }
    //     else
    //     {
    //         return null;
    //     }
    // }
    /***鼠标 推挤 */
    public pushGreen(green:GreenC) : void
    {
        
    }

}