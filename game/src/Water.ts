/**r不会变，是半径的记录 xy是prite的x y  改变球的位置改变 sprite 的x y
 * 
 * 1、需要 力 或者 加速度
 * 
 * 2、需要 速度 
 * 
 * 3、最终实施在 x y 上 
 * 
 * 4、建立 x y 坐标系
 * 
 * 5、统一把 Vx  Vy   还有  ax ay  卸载一个方法中，统一处理。
 * 
 * 6、角度统一是  与 x 正方向 逆时针为正
*/
class Water extends Circle{
    /**重力加速度 */
    private g : number ;
    /**时间 */
    private time : number ;//秒

    /**空气摩擦因素 */
    private airMof : number;
    /**动摩擦因素 */
    private actionMof : number;
    /**弹力劲度 */
    private moe : number;
    /**碰撞速度消耗系数 */
    private spd : number;

    /**x 方向的速度 向右为正 */
    private v_X : number ;
    /**y 方向的速度 向下为正 */
    private v_Y : number ;
    /**x 方向的加速度 向右为正 */
    private a_X : number ;
    /**y 方向的加速度 向下为正 */
    private a_Y : number ;

    /**速度 */
    private dic_V : Laya.Dictionary;
    /**加速度 */
    private dic_A : Laya.Dictionary;

    /**timer */
    private timer : number;
    /**中间变量 */
    private arr : Array<any>;

    constructor(x,y,r,color,Full){
        super(x,y,r,color,Full);
    }

    /**水滴初始化 */
    protected init() : void
    {
        this.g = 9.8 * 20;
        this.time = 0.016;

        this.airMof = 0.001;
        this.actionMof = 1;
        this.moe = 1;
        this.spd = 0.002;

        this.v_X = 10;
        this.v_Y = 50;
        this.a_X = 0;
        this.a_Y = 0;

        this.dic_V = new Laya.Dictionary();
        this.dic_A = new Laya.Dictionary();

        this.timer = 0;
        this.arr = new Array<any>();

        Laya.timer.loop(16,this,this.run);
        this.downForce();
        this.addAirMof();
    }


    /**水滴动起来 */
    private run() : void
    {
        //状态检测
        this.timer++;
        if(this.timer==50)
        {
            //console.log("pos:("+ Math.floor(this.spriteCircle.x) + "," + Math.floor(this.spriteCircle.y) + ")   [a]-x:" + Math.floor(this.a_X) + "   [a]-y:" + Math.floor(this.a_Y) +"    v:["+this.v_X + "," + this.v_Y+"]");
            this.timer = 0;
        }
        
        /**统一处理 */
        this.addAllAV();
        this.dealUnified();
    }

    /**添加 添加名字   数值*/
    private add(addString : string ,num: number) : void
    {
        switch(addString)
        {
            case "v_X" :
                this.v_X += num; 
                break;
            case "v_Y" : 
                this.v_Y += num; 
                break;
            case "a_X" :
                this.a_X += num;        
                break;
            case "a_Y" :
                this.a_Y += num;             
                break;
        }

    }

    /**加起所有的xy */
    private addAllAV() : void
    {
        this.a_X = 0;
        this.a_Y = 0;
        let arr : Array<number>;
        for(let i=0;i<this.dic_A.values.length;i++)
        {
            arr = this.dic_A.values[i];//x
            if(arr)
            {
                this.add("a_X",arr[0]);
                this.add("a_Y",arr[1]);
            }
        }
    }

    /**统一处理 */
    private dealUnified() : void
    {
        this.v_X += this.a_X * this.time;
        this.v_Y += this.a_Y * this.time;
        this.spriteCircle.x += this.v_X * this.time + 1/2 * this.a_X * Math.pow(this.time,2);
        this.spriteCircle.y += this.v_Y * this.time + 1/2 * this.a_Y * Math.pow(this.time,2);        
    }
 
    /**施加 加速度
     *  
     * 传入相撞物体
     * 
     * 加速的大小
     * */
    public setA(tu : Tu , a : number) : void
    {

    } 

    /**施加 速度
     *  
     * 传入相撞物体
     * 
     * 加速的大小
     * */
    public setSpeed(tu : Tu , v : number) : void
    {

    } 

    /**
     * 施加 固定弹力
     * 
     * 传入相撞物体
     * 
     * 是否给弹跳初速度
     * 
     */
     public setColider(tu : Tu, v? : number) : void
     {
        if(this.countDic(tu) < 45)
        {
            let getA = this.dic_A.get(tu);
            if(!getA)
            {
                let a = this.a_X * this.rotationDeal(tu,"cos") + this.a_Y * this.rotationDeal(tu,"sin");

                this.addDic(tu,-1000 * this.rotationDeal(tu,"cos") * this.moe,-1000 * this.rotationDeal(tu,"sin") * this.moe,2);
                this.destorySpeed(tu);            
            }
        }
        
     }

     /**碰撞速度消耗*/
     private destorySpeed(tu) : void
     {
        let v_Totle = this.v_X * this.rotationDeal(tu,"cos") + this.v_Y * this.rotationDeal(tu,"sin");
        //console.log(v_Totle + ":::speed"); 
        let v_X;
        let v_Y; 
        if(v_Totle>100)
        {
            v_X = -Math.pow(v_Totle,2) * this.rotationDeal(tu,"cos") * this.spd;
            v_Y = -Math.pow(v_Totle,2) * this.rotationDeal(tu,"sin") * this.spd;
        }
        if(v_X != undefined || v_Y != undefined)
        {
            this.v_X += v_X;
            this.v_Y += v_Y;
        }
     }


     /**移除碰撞 */
     public removeColider(tu:Tu) : void
     {
         if(this.dic_A.get(tu))
         {
            this.dic_A.remove(tu);
            //console.log("移除弹力");
         }
     }

     /**
      * 碰撞之后获得方向上的加速度/速度  type  1=加速度  2=速度
      * 返回与之对应的 大小
      */
      private getColiderA(tu : Tu,type:number) : number
      {
        let x;
        let y;
        if(type == 1 )
        {
            x = this.a_X;
            y = this.a_Y;
        }
        else
        {
            x = this.v_X;
            y = this.v_Y;
        }
    
        return ;
      }

     /**
      * 碰撞之后
      * 设置速度
      */
      public setColiderSpeed():void
      {

      }

    /**角度处理函数
     * 
     *  传入 碰撞物体
     * 
     *  获取正选 或余弦  或正切
     * 
     *  返回 对应值
     * 
     *  sin  对边/斜边
     *  cos  临边/斜边
     *  tan  对边/临边
     * */
    private rotationDeal(tu : Tu,getString) : number
    {
        /**斜边 */
        let c : number = Math.sqrt(Math.pow(this.spriteCircle.x - tu.spriteCircle.x,2) + Math.pow(this.spriteCircle.y - tu.spriteCircle.y,2));
        /**临边 */
        let a : number = tu.spriteCircle.x - this.spriteCircle.x;
        /**对边 */
        let b : number = tu.spriteCircle.y - this.spriteCircle.y;

        if(getString == "sin")
        {
            //console.log("#sin ==" + (b/c));
            return (b/c);
        }
        else if(getString == "cos")
        {
            //console.log("#cos ==" + (a/c));
            return (a/c);
        }
        else
        {
            //console.log("#tan ==" + (b/a));//对边 比 临边 
            return (b/a);
        }
    }

    /**加入 词典 type:   1=速度   2=加速度*/
    private addDic(symbol,x,y,type) : void
    {
        this.arr = new Array<number>();
        this.arr[0] = x;
        this.arr[1] = y;
        if(type==1)
        {
            this.dic_V.set(symbol,this.arr);
        }
        else
        {
            this.dic_A.set(symbol,this.arr);            
        }
    }

    /**碰撞检测 - 计算距离*/
    private countDic(tu:Tu) : number
    {
        let dic = Math.sqrt(Math.pow(tu.spriteCircle.x - this.spriteCircle.x,2) + Math.pow(tu.spriteCircle.y - this.spriteCircle.y,2));
        return dic;
    }
//-----------------------------------------------------------不变力----------------------------------
    /**空气摩擦力 */
    private addAirMof() : void
    {
        this.addDic("airMof",-Math.pow(this.v_X,2)*this.airMof,-Math.pow(this.v_Y,2)*this.airMof,2);
    }

    /**
     * 自受重力
     */
    private downForce(): void  
    {
        this.addDic("dowmForce",0,this.g,2);
    }
}