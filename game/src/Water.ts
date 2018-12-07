class Water extends Circle{
    /**重力加速度 */
    private g : number = 9.8; 
    /**时间 */
    private time : number = 16;//80毫秒
    /**空气摩擦系数 */
    private k : number =  0.994;
    /**x y*/
    /**x方向速度 */
    private speed_x : number = 0.1;
    /**y方向的速度 */
    private speed_y : number = 0;
    /**反弹系数 */
    private erf : number = 1;
    /**重力系数 减少多少倍 */
    private dof : number = 6;
    /**动摩擦因素 */
    private mof : number = 0.99;

    constructor(x,y,r,color,Full){
        super(x,y,r,color,Full);
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
        this.force();
        this.test();
        //this.toXY();
        //console.log("[x]:"+this.spriteCircle.x + "   [y]:" + this.spriteCircle.y + "   [speed_x]:" + this.speed_x + "   [speed_y]:" + this.speed_y);
        
    }
    /**测试 */
    private test() : void
    {
        this.spriteCircle.x += this.speed_x * this.time;
    }

    /**转化成xy的位移 */
    private toXY() : void
    {
        this.spriteCircle.x += this.speed_x * this.time;
        this.spriteCircle.y += this.speed_y * this.time;
    }
     
     /**重力 */
    private downForce() : void
    {
       
        this.spriteCircle.y += (this.speed_y*this.time + 2/1*this.g*this.time/1000*this.time/1000)/this.dof;//Vt + 2/1gt^2

        this.speed_y += (this.g*this.time/1000)/this.dof;//v = gt;
    }

    /**空气摩擦力 */
    private force() : void
    {
        //横坐标方向所受空气摩擦力
        if(this.speed_y > 0)
        this.speed_y = this.speed_y * this.k;

        if(this.speed_x > 0)
        this.speed_x = this.speed_x * this.k;
    }
     
    /**相互关系 给该物体施力对象*/
    public forceOher(circle) : void
    {
        //反弹
        this.speedAdd(circle);
        //判断是否传体
        this.isCrash(circle);
        //**摩擦力 */
        //this.mofForce();
    }

    /**摩擦力*/
    private mofForce() : void
    {
        if(this.speed_y <0.5 && this.speed_y > -0.5 )
        {
            if(this.speed_x < 0.000001 && this.speed_x > -0.000001)
            {
                this.speed_x = 0;
                return;
            }
            console.log("给我摩擦力");
            this.speed_x = this.speed_x * this.mof;
        }
    }

    /**是否穿体 */
    private isCrash(circle) : void
    {
        if(this.getWhereCircle(circle) == 3)
        {
            //施加弹力
            console.log("弹力生效");
            this.spriteCircle.y -= (this.speed_y*this.time + 2/1*this.g*this.time/1000*this.time/1000)/this.dof;//Vt + 2/1gt^2 
        }

    }




    /**计算角度 获取cos*/
    private countRotation(circle) : number //与x横坐标作对比
    {
        //斜边
        let d = this.getTowPointDic(circle);
        //X2 -X1临边
        let a = circle.spriteCircle.x - this.spriteCircle.x;
        //获取cos 
        //console.log(a/d);
        return a/d; 
    }

    /**获取碰撞方向的速度 放入相碰的物体*/
    public getSpeed(dirc,circle) : number
    {
        let cos = this.countRotation(circle);
        //console.log(cos);
        if(dirc == 'x')
        {
            if(this.speed_x != 0 && this.speed_x != undefined)
            {
                if(cos == 0)
                    return -this.speed_x/this.erf;
                else
                    return -this.speed_x/cos/this.erf;
            }

        }
        else
        {
            if(this.speed_y != 0 && this.speed_y != undefined)
            {
                if(Math.sqrt(1 - Math.pow(cos,2)) == 0)
                    return -this.speed_y/this.erf;
                else
                {
                    return -this.speed_y/Math.sqrt(1 - Math.pow(cos,2))/this.erf;
                }
            }
        }

        return 0;
    }
    /////////////////public
    /**设置反弹速度 */
    private speedAdd(circle) : void
    {
        this.speed_x = this.getSpeed('x',circle)/2 * this.countRotation(circle);//X应该是 速度 * cos
        this.speed_y = this.getSpeed('y',circle)/2 * Math.sqrt(1 - Math.pow(this.countRotation(circle),2));
    }

}