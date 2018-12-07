class Water extends Circle{
    /**重力加速度 */
    private g : number = 9.8; 
    /**时间 */
    private time : number = 16;//80毫秒
    /**x方向速度 */
    private speed_x : number = 0;
    /**y方向的速度 */
    private speed_y : number = 0;

    constructor(x,y,r){
        super(x,y,r);
        this.init();
    }

    /**水滴初始化 */
    private init() : void
    {
        Laya.timer.loop(this.time,this,this.run);
    }


    /**水滴动起来 */
    private run() : void
    {
        this.downForce();
        this.setXY();
        console.log(this.spriteCircle.y);
        console.log(this.y);
        
    }

    /**设置xy */
    private setXY() : void
    {
        this.spriteCircle.x = this.x;
        this.spriteCircle.y = this.y;
    }
     
     /**重力 */
    private downForce() : void
    {
       this.y += (this.speed_y*this.time + 2/1*this.g*this.time/1000*this.time/1000)/8;//Vt + 2/1gt^2
       this.speed_y += (this.g*this.time/1000)/8;//v = gt;
    }
     
    /**相互碰撞 */
    private forceOher() : void
    {

    }

    /////////////////
    public setSpeedY(Vy:number) : void
    {
        Laya.timer.clear(this,this.run);
        console.log(this.spriteCircle.y);
        console.log(this.y);
    }
}