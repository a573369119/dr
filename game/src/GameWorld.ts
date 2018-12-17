class GameWorld{
    /**Tu1 */
    private arr_Tu_1 : Array<Tu>;
    /**Tu2 */
    private arr_Tu_2 : Array<Tu>; 

    /**mouse */
    private mouseTest : MouseTest ;

    /**绿球大小 */
    private greenCSize :  number ;
    /**鼠标走过的路径点 */
    private mousePos : Array<any>;
    /**
     * 链表
     */ 
    private linkManager : LinkManager;

    private arr_greenC : Array<GreenC>; 

    /**Water */
    private arr_Water : Array<Water>; 
    /**穿山甲 */
    private monster : Monster;
    /**水滴数 */
    private waterCount : number = 120;
    /**土数量 */
    private tuCount : number = 50;
    /**水 */
    private getWaters : number ;

    /**位置数组 */
    private arr_PosTu : Array<any>; 
    /**游戏UI */
    private gameUI : ui.gameUI;
    /**eatWater */
    private eatWater : eatWater;
    /**开关 */
    private arr_BtnWind : Array<any>; 
    /**开风扇 */
    private arr_IsOpen: Array<boolean>;
    /**timer */
    private timer : number;
    /**差距x y*/
    private msX : number;
    private msY : number;
    private isControl : boolean;
    private rem_Mouse : number;
    private isRemMouseChange : boolean;
    /**原先xy */
    private xX : number;
    private yY : number;
    /**rotat */
    private rote : number;

    constructor(){
        this.init()
    }
    /**初始化 */
    private init() 
    {
        this.rote = 0;
        this.greenCSize = 30;
        this.rem_Mouse = 0;
        this.isRemMouseChange = false;
        this.getWaters = 0;
        this.xX = 0;
        this.yY = 0;
        /**初始化数组 */
        this.arr_PosTu = new Array<any>();
        this.arr_greenC = new Array<GreenC>();
        this.mousePos = new Array<any>();
        this.arr_BtnWind = new Array<any>();
        this.arr_IsOpen = new Array<boolean>();
        /**创建UI */
        this.gameUI = new ui.gameUI();
        Laya.stage.addChild(this.gameUI);
        /**创建鼠标 */
        this.createMouse();
        /**创建水滴 */
        this.createWater();
        /**创建地图 */
        this.createMap();
        /**创建红绿 链表*/
        this.createGR();
        /**动画播放 */
        this.aniPlay();
        /**启动世界关系 */
        Laya.timer.loop(16,this,this.relationShipRun);
        /**绑定鼠标事件 */
        Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.mouseT);
        /** */
        Laya.stage.on(Laya.Event.MOUSE_UP,this,this.mouseUp);
        /**绑定老鼠 */
        this.gameUI.player.on(Laya.Event.MOUSE_DOWN,this,this.getPlayer);
        this.gameUI.player.on(Laya.Event.MOUSE_UP,this,this.losePlayer);
        this.gameUI.player.on(Laya.Event.MOUSE_OUT,this,this.losePlayer);
        
        
        
    }
//--------------------------------------------操纵怪物
    private getPlayer() : void
    {
        this.msX = this.gameUI.player.x - Laya.stage.mouseX;
        this.msY = this.gameUI.player.y - Laya.stage.mouseY;
        this.isControl = true;
    }
    private losePlayer() : void
    {
        this.isControl = false;
    }
//---------------------动画
    private aniPlay() : void
    {
        this.gameUI.ani1.play(0,true);
    }

    private aniPlayTo(isPlay,index:number) : void
    {
        if(isPlay)
        {
            this.gameUI["ani" + (index+2)].play(0,true);
        }
        else
        {
            this.gameUI["ani" + (index+2)].stop();
        }
    }

    /**开启风扇 */
    private openWind(index) : void
    {
        this.arr_BtnWind[index] = true;
        this.aniPlayTo(true,index);
    }

    /**水珠减少*/
    private showWaterCount() : void
    {
        this.gameUI.labWaterCount.text = ++this.getWaters + "";
    }
//-------------------------------------------------------------------关于鼠标
    /**private */
    private mouseUp() : void
    {
        this.mouseTest.mouseIsDown = false;
        this.mouseTest.mousePos = 0;
    }
    /**鼠标检测 */
    private mouseT() : void
    {
        /**调用鼠标检测 */
        let mX = Laya.stage.mouseX;
        let mY = Laya.stage.mouseY;
        if (this.mouseTest.mouseIsDown) 
        {
            let isColiderTu : boolean = true;
            /**每次刷新碰墙事件 */
            isColiderTu = this.mouseColiderTu(mX,mY);
            //生成区域
            if(isColiderTu)
            {
                if (Math.sqrt(Math.pow(this.mouseTest.mousePos_remX - mX, 2) + Math.pow(this.mouseTest.mousePos_remY - mY, 2)) > 30) 
                {
                    //是否记入点
                    if(this.isControl)
                    {
                        if(this.canKeepInMousePos(mX,mY))
                        {
                            let mousePos: any = {};
                            mousePos.x = mX;
                            mousePos.y = mY;
                            this.mousePos.push(mousePos);//记录坐标点
                            this.mouseTest.drwaC(Laya.stage.mouseX, Laya.stage.mouseY,this.gameUI.sprite_go);
                        }
                            
                            
                            this.mouseTest.mousePos = 0;
                            this.mouseTest.mousePos_remX = mX;
                            this.mouseTest.mousePos_remY = mY;
                            // console.log(Laya.stage.mouseX+","+Laya.stage.mouseX);
                    }
                }
                this.mousePushGreen();    
            }
        }
        if(this.isControl)
        {
            let X = Tool.ins.countDic_2(this.gameUI.player.x,this.gameUI.player.y,this.arr_PosTu[0].x,this.arr_PosTu[0].y);
            let now : number;
            for(let i=1;i < this.arr_PosTu.length; i++)
            {
                now = Tool.ins.countDic_2(this.gameUI.player.x,this.gameUI.player.y,this.arr_PosTu[i].x,this.arr_PosTu[i].y);
                if(X>now)
                {
                    X = now;
                }
            }
            if(X < 35)
            {
                // console.log(Math.floor(this.rem_Mouse) + "now::" + Math.floor(X)  + "  差值::" + Math.floor(this. rem_Mouse - X) + " isRemChang:" + this.isRemMouseChange);
                if(this.rem_Mouse - X > 0)
                {
                    if(this.isRemMouseChange == true)
                    {
                        this.isControl = false;
                        this.isRemMouseChange = false;
                        return;
                    }  
                }
                else
                {               
                    this.rem_Mouse = X;
                    this.isRemMouseChange = true;
                }
            }
            else
            {
                this.rem_Mouse = 0;
                this.isRemMouseChange = false;
            }
            // this.gameUI.player.x = mX + this.gameUI.player.scaleX *this.msX;
            // this.gameUI.player.y = mY + this.gameUI.player.scaleY *this.msY;
            this.gameUI.player.x = Laya.stage.mouseX;
            this.gameUI.player.y = Laya.stage.mouseY;
            this.playerTo(mX,mY);           
        }
        ////////////////刺检测 从做到右
        let isGameOver = false;
        if(this.gameUI.c1.hitTestPoint(this.gameUI.player.x,this.gameUI.player.y))
        {
            isGameOver = true;
        }
        if(this.gameUI.c2.hitTestPoint(this.gameUI.player.x,this.gameUI.player.y))
        {
            isGameOver = true;
        }
        if(this.gameUI.c3.hitTestPoint(this.gameUI.player.x,this.gameUI.player.y))
        {
            isGameOver = true;
        }
        if(this.gameUI.c4.hitTestPoint(this.gameUI.player.x,this.gameUI.player.y))
        { 
            isGameOver = true;
        }
        if(this.gameUI.c5.hitTestPoint(this.gameUI.player.x,this.gameUI.player.y))
        {
            isGameOver = true;
        }
        if(this.gameUI.c6.hitTestPoint(this.gameUI.player.x,this.gameUI.player.y))
        {
            isGameOver = true;
        }
        if(this.gameUI.c7.hitTestPoint(this.gameUI.player.x,this.gameUI.player.y))
        {
            isGameOver = true;
        }

        if(isGameOver)
        {
            console.log("游戏结束");
        }

        ////////玩家的朝向
    }

    /**玩家的朝向 */
    private playerTo(x,y) : void
    {
        if((this.xX == 0 && this.yY==0)||(this.xX == x&&this.yY == y))
        {
            this.xX = x;
            this.yY = y;
        }
        else
        {
            if(Math.abs(this.rote -  this.rotation(this.xX,this.yY,x,y,"cos")) >0.05)
            {
                this.rote = (this.rotation(this.xX,this.yY,x,y,"cos"));
                if(this.rotation(this.xX,this.yY,x,y,"sin") > 0 && (this.rotation(this.xX,this.yY,x,y,"cos") <= 0.3) && (this.rotation(this.xX,this.yY,x,y,"cos") >= -0.3))
                {
                    // console.log("下");
                    this.gameUI.player.scaleX = 1;  
                    this.gameUI.player.rotation = 0;
                    this.gameUI.player.rotation = 90;
                }
                else if(this.rotation(this.xX,this.yY,x,y,"sin") <= 0 && (this.rotation(this.xX,this.yY,x,y,"cos") <= 0.3) && (this.rotation(this.xX,this.yY,x,y,"cos") >= -0.3))
                {
                    // console.log("上");
                    this.gameUI.player.scaleX = 1;  
                    this.gameUI.player.rotation = 0;
                    this.gameUI.player.rotation = -90;                
                }
                else if(this.rotation(this.xX,this.yY,x,y,"cos") >= -1 && this.rotation(this.xX,this.yY,x,y,"cos") < -0.3 )
                {
                    // console.log("左");
                    this.gameUI.player.scaleX = -1;
                    this.gameUI.player.rotation = 0;                

                }
                else if(this.rotation(this.xX,this.yY,x,y,"cos") > 0.3 && this.rotation(this.xX,this.yY,x,y,"cos") <= 1  )
                {
                    // console.log("右");
                    this.gameUI.player.scaleX = 1;      
                    this.gameUI.player.rotation = 0;                                        
                }
                this.xX = 0;
                this.yY = 0;
                // console.log("cos" + this.rotation(this.xX,this.yY,x,y,"cos") + "   sin::" + this.rotation(this.xX,this.yY,x,y,"sin"));
            }
        }
        
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
    private rotation(x,y,mx,my,getString) : number
    {
        /**斜边 */
        let c : number = Math.sqrt(Math.pow(x - mx,2) + Math.pow(y - my,2));
        /**临边 */
        let a : number = mx - x;
        /**对边 */
        let b : number = my - y;

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

    /**判断是否是重合点 */
    private canKeepInMousePos(mX,mY) : boolean
    {
        for (let h = 0; h < this.mousePos.length; h++)  
        {
            if (Tool.ins.countDic_2(this.mousePos[h].x, this.mousePos[h].y, mX, mY) < 25)  
            {
                // console.log("不做记录");
                return false;
            }

        }
        return true;
    }
    /**鼠标碰墙事件 */
    private mouseColiderTu(x,y) : boolean
    {
        for(let i=0; i<this.arr_PosTu.length; i++)
        {
            if(Math.sqrt(Math.pow(this.arr_PosTu[i].x - x, 2) + Math.pow(this.arr_PosTu[i].y - y, 2)) < 20)
            {
                return false;
            }
        }
        return true;
    }

    /**创建鼠标对象 */
    private createMouse() : void
    {
        this.mouseTest = new MouseTest(100,200,30,"#413006","#b09b6f");
        this.gameUI.sprite_go.addChild(this.mouseTest.spriteCircle);                  
    }

    /**鼠标推挤 */
    private mousePushGreen() : void
    {
        if(this.isControl)
        {
            let mX = Laya.stage.mouseX;
            let mY = Laya.stage.mouseY;
            let arr = [];
            //**获取碰撞小球 */
            for(let i=0; i< this.arr_greenC.length ; i++)
            {
                if(Tool.ins.countDic_2(this.arr_greenC[i].spriteCircle.x,this.arr_greenC[i].spriteCircle.y,mX,mY)< 50)
                {
                    arr.push(this.arr_greenC[i]);
                }
            }
            //**计算逻辑 */
            for(let i=0;i<arr.length;i++)
            {
                let dic = 45 - Tool.ins.countDic_2(arr[i].spriteCircle.x,arr[i].spriteCircle.y,mX,mY);
                if(dic > 0)
                {
                    arr[i].spriteCircle.x += dic * this.rotationDeal(arr[i],mX,mY,"cos");
                    arr[i].spriteCircle.y += dic * this.rotationDeal(arr[i],mX,mY,"sin");
                    // console.log("成功移动");
                    // console.log(arr[i].spriteCircle.x + "," + arr[i].spriteCircle.y);
                    let tu = this.getRcentTu("head");
                    let tu_2  = this.getRcentTu("end");
                    //头结点与最近的土
                    this.linkManager.update(tu,tu_2);
                    // this.linkManager.updateDestory(this.mousePos);
                }
            }
        }
    
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
    private rotationDeal(cc : any,mX,mY,getString) : number
    {
        /**斜边 */
        let c : number = Math.sqrt(Math.pow(mX - cc.spriteCircle.x,2) + Math.pow(mY - cc.spriteCircle.y,2));
        /**临边 */
        let a : number = cc.spriteCircle.x - mX;
        /**对边 */
        let b : number = cc.spriteCircle.y - mY;

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
//---------------------------------------------------------------------------------鼠标
//---------------------------------------------------------------------------------链表
    /**创建起始节点 */
    private createGR() : void
    {
        let ch = new GreenC(515,300,this.greenCSize);
        this.arr_greenC.push(ch);
        //this.gameUI.sprite_go.addChild(ch.spriteCircle);
        let ce = new GreenC(660,300,this.greenCSize);
        this.arr_greenC.push(ce);        
        //this.gameUI.sprite_go.addChild(ce.spriteCircle);        
        let head = new GreenPoint(ch);
        let end = new GreenPoint(ce);
        this.linkManager = new LinkManager(head,end,this.gameUI.sprite_go,this.arr_greenC);
        this.linkManager.initHeadEnd(this.getRcentTu("head"),this.getRcentTu("end"));
    }

    /**新创建一个节点 */
    private newPoint() : GreenPoint
    {
        let ch = new GreenC(515,300,15);
        this.arr_greenC.push(ch);
        // this.gameUI.sprite_go.addChild(ch.spriteCircle);
        return new GreenPoint(ch);
    }

    /**寻找最近的tu */
    private getRcentTu(stringName) : any
    {
        let point = this.linkManager.linkEndPoint;
        if(stringName == "head")
        {
            point = this.linkManager.linkHeadPoint;
        }
        let x = point.g.spriteCircle.x;
        let y = point.g.spriteCircle.y;
        let mix = Tool.ins.countDic_2(this.arr_PosTu[0].x,this.arr_PosTu[0].y,x,y);
        let index = 0;
        for(let i =1; i< this.arr_PosTu.length ;i++)
        {
            let dic = Tool.ins.countDic_2(this.arr_PosTu[i].x,this.arr_PosTu[i].y,x,y);
            if(mix > dic)
            {
                index = i;
                mix = dic;
            }
        }
        return this.arr_PosTu[index];
    }
//---------------------------------------------------------------------------------链表
    /**处理水碰撞地面 */
    private coliderTu(water:Water,tu:any) : void
    {
        water.setColider(tu);
    }

    /**创建水滴 */
    private createWater() : void
    {
        this.arr_Water = new Array<Water>();
        let water : Water;
        for(let i=0; i<this.waterCount ; i++)
        {
            water = new Water(520 + i*0.1,230,10,"#00f","#00f");
            this.gameUI.sprite_go.addChild(water.spriteCircle);      
            this.arr_Water.push(water);
        }   
    }

    /**创建地图 */
    private createMap() : void
    {
        /**创建墙壁 */
        this.createTu();
        /**创建吸水虫 */
        this.createChong();
        /**创建风扇按钮 */
        this.createBtnWind();
        /**创建时间 */
        this.timer = 0;
        Laya.timer.loop(1000,this,this.timeRun);
    }

    /** 时间 */
    private timeRun() : void
    {
        this.timer++;
        let h = Math.floor(this.timer/60);
        let s = this.timer%60;
        let hstring = h + "";
        let sstring = s + "";
        if(Math.floor(h/10) <= 0) hstring = "0" + h;
        if(Math.floor(s/10) <= 0) sstring = "0" + s;
        this.gameUI.labTime.text = hstring + ":" + sstring;
    }


    /**穿件风扇按钮 */
    private createBtnWind() : void
    {
        this.arr_BtnWind[0] = this.gameUI.anni1;
        this.arr_IsOpen[0] = false;
        this.arr_BtnWind[1] = this.gameUI.anni2;
        this.arr_IsOpen[1] = false;
        this.arr_BtnWind[2] = this.gameUI.anni3;
        this.arr_IsOpen[2] = false;
    }

    /**创建吸水虫 */
    private createChong() : void
    {
        this.eatWater = new eatWater(this.gameUI.monster,this.arr_Water,this,this.showWaterCount);
    }

    /**创建墙壁 */
    private createTu() : void
    {
        this.arr_Tu_1 = new Array<Tu>();
        let tu;
        let object : any;
        let x=0;
        let y=0;
        for(let i=0; i<3;i++)
        {
            tu = new Tu(650-21+i*10,310-7,30,"#880","#880");
            tu.destroyCircle();
            Laya.Pool.recover("tu",tu);
            this.gameUI.sprite_go.addChild(tu.spriteCircle);                  
            this.arr_Tu_1.push(tu);
        }
        this.arr_PosTu.push({x:478,y:249});
        this.arr_PosTu.push({x:630,y:249});        
        //------------------
         for(let i=0; i<10;i++)
         {
             object = {};
            //  tu = new Tu(650+i*10,310,30,"#880","#880");
            //  this.arr_Tu_1.push(tu);
             object.x = 650+i*10-21;
             object.y = 310-7;
             this.arr_PosTu.push(object);
         }
        //------------------左
         for(let i=0; i<this.tuCount;i++)
         {
             object = {};
            //  tu = new Tu(0+i * 10,310,30,"#880","#880");
            //  this.arr_Tu_1.push(tu);
             object.x = 0+i * 10-21;
             object.y = 310-7;
             this.arr_PosTu.push(object);
         }
         //--------------------落下第一横边
         for(let i=0; i<this.tuCount;i++)
         {
             object = {};
            //  tu = new Tu(250+i * 10,465,30,"#880","#880");
            //  this.arr_Tu_1.push(tu);
             object.x = 255+i * 10 - 21;
             object.y = 465 - 7;
             this.arr_PosTu.push(object);
         }
         // --------------------------第一斜边
         for(let i=0; i<7;i++)
         {
             object = {};
            // tu = new Tu(i * 10 + 175,560 - i*13,30,"#880","#880");
            //  this.arr_Tu_2.push(tu);
             object.x = i * 10 + 175 - 21;
             object.y = 560 - i*13 - 7;
             this.arr_PosTu.push(object);
         }
         //---------------------------第一竖边
         for(let i=0; i<18;i++)
         {
             object = {};
            //  tu = new Tu(179,755 - i*10,30,"#880","#880");
            //  this.arr_Tu_2.push(tu);
             object.x = 179 - 21;
             object.y = 755 - i*10 -7;
             this.arr_PosTu.push(object);
         }
         //_______________第二竖边
         for(let i=0; i<10;i++)
         {
             object = {};
            //   tu = new Tu(133,1172 - i*10,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
              object.x = 133 - 21;
              object.y = 1172 - i*10 -7 ;
              this.arr_PosTu.push(object);         
         }
         //______________最左竖边
         for(let i=0; i<100;i++)
         {
             object = {};
            //   tu = new Tu(-10,1326 - i*10,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
              object.x = -10 - 21;
              object.y = 1326 - i*10 -7;
              this.arr_PosTu.push(object);
         }
         //______________最右竖边
         for(let i=0; i<100;i++)
         {
             object = {};
            //   tu = new Tu(735,1326 - i*10,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
              object.x = 735 - 21;
              object.y = 1326 - i*10 - 7;
              this.arr_PosTu.push(object);
         }
        //______________中间竖边
         for(let i=0; i<65;i++)
         {
             object = {};
            //   tu = new Tu(328,1326 - i*10,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
              object.x = 328 -21;
              object.y = 1326 - i*10 - 7;
              this.arr_PosTu.push(object);
         }
        //______________第二斜边
         for(let i=0; i<5;i++)
         {
             object = {};
            //   tu = new Tu(328 + i*10,665 - i*13,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
              object.x = 328 + i*10 - 21;
              object.y = 665 - i*13 - 7;
              this.arr_PosTu.push(object);
         }
        //______________第二横边
         for(let i=0; i<15;i++)
         {
             object = {};
            //   tu = new Tu(383 + i*10,610,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
              object.x = 383 + i*10 - 21;
              object.y = 610 - 7;
              this.arr_PosTu.push(object);
         }
        //______________第三横边
         for(let i=0; i<15;i++)
         {
             object = {};
            //   tu = new Tu(373 + i*10,760,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
              object.x = 373 + i*10 - 21;
              object.y = 760 - 7;
              this.arr_PosTu.push(object);
         }
        //——————————————第四横边
         for(let i=0; i<3;i++)
         {
             object = {};
            //   tu = new Tu(672 + i*10,760,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
              object.x = 700 + i*10 - 21;
              object.y = 760 - 7;
              this.arr_PosTu.push(object);
         }
        //——————————————第五横边
         for(let i=0; i<10;i++)
         {
             object = {};
            //   tu = new Tu(470 + i*10,909,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
              object.x = 470 + i*10 - 21;
              object.y = 909 - 7;
              this.arr_PosTu.push(object);
         }
        //——————————————第六横边
         for(let i=0; i<10;i++)
         {
             object = {};
            //   tu = new Tu(600 + i*10,940,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
              object.x = 600 + i*10 - 21;
              object.y = 940 - 7;
              this.arr_PosTu.push(object);
         }
         //新加竖边
         for(let i=0; i<5;i++)
         {
             object = {};
            //  tu = new Tu(179,755 - i*10,30,"#880","#880");
            //  this.arr_Tu_2.push(tu);
             object.x = 548 - 21;
             object.y = 817 - i*10 -7;
             this.arr_PosTu.push(object);
         }
    }

    /**获取Tu */
    private  getTu(water:Water) : void
    {
        let tu : Tu;
        for(let i=0;i<this.arr_PosTu.length; i++)
        {
            let isbreak = false;
            if(Math.sqrt(Math.pow(this.arr_PosTu[i].x - water.spriteCircle.x,2) + Math.pow(this.arr_PosTu[i].y - water.spriteCircle.y,2)) < 50)
            {
                for(let t=0; t<this.arr_Tu_1.length; t++)
                {
                    if(this.arr_Tu_1[t].index  == i)
                    {
                        // console.log("已有");
                        isbreak = true;
                        break;
                    }
                }
                if(!isbreak)
                {
                    tu = Laya.Pool.getItem("tu");
                    if(tu)
                    {//对象次有土
                        tu.showCircle(this.arr_PosTu[i].x,this.arr_PosTu[i].y);
                        tu.index = i;
                        // console.log("对象池" + i );
                    }
                    else
                    {
                        tu = new Tu(this.arr_PosTu[i].x,this.arr_PosTu[i].y,30,"#880","#880");
                        this.gameUI.sprite_go.addChild(tu.spriteCircle);                  
                        this.arr_Tu_1.push(tu);
                        tu.index = i; 
                    }
                }
            }
            
        }
    }
//---------------------------------------------------------------------------------------------------------------------
   /**世界关系互联 */
    private relationShipRun() : void
    {
        //动态获取墙壁

        this.arr_Water.forEach(water => {//抽取 水
            if(water.spriteCircle.visible == true){
                this.getTu(water);
                //土碰撞
                this.arr_Tu_1.forEach(tu =>{//抽取 土
                    if(tu.spriteCircle.visible == true)
                    {
                        if(Tool.ins.countDic(tu,water) ==1 || Tool.ins.countDic(tu,water) ==2){
                            //处理碰撞效果
                            if(Tool.ins.countDic(tu,water) ==2.5)
                            {
                                
                            }
                            else
                            {
                                this.coliderTu(water,tu);
                            }
                        }
                        else
                        {
                            water.removeColider(tu);
                            let dic;
                            let r;
                            let isbreak = false;
                            for(let w=0;w<this.arr_Water.length; w++)
                            {
                                isbreak = false;
                                dic = Math.sqrt(Math.pow(tu.spriteCircle.x - this.arr_Water[w].spriteCircle.x,2) + Math.pow(tu.spriteCircle.y - this.arr_Water[w].spriteCircle.y,2));
                                r = (this.arr_Water[w].r + tu.r +5);
                                if(dic < r)
                                {
                                    isbreak = true;
                                    break;
                                }
                            }
                            if(!isbreak)
                            {
                                tu.index = -1;
                                tu.destroyCircle();
                                Laya.Pool.recover("tu",tu);
                            }
                        }
                    }
                });
                //绿球碰撞
                this.arr_greenC.forEach( gC => {
                    if(/**gC.spriteCircle.visible ==**/ true)
                    {
                        if(Tool.ins.countDic(gC,water) ==1 || Tool.ins.countDic(gC,water) ==2){
                            //处理碰撞效果
                            if(Tool.ins.countDic(gC,water) ==2.5)
                            {
                                
                            }
                            else
                            {
                                
                                if(this.coliderTest(gC))
                                {
                                    // console.log("在白点不能碰撞");
                                }
                                else
                                {
                                    water.setColider(gC,this.arr_PosTu);
                                }
                                
                            }
                        }
                        else
                        {
                            water.removeColider(gC);
                        }
                    }
                });
                ///是否在风扇区域
                let x;
                let y;
                if((water.spriteCircle.x > 275 && water.spriteCircle.y > 342 && water.spriteCircle.y<423) && this.arr_BtnWind[0] == true)
                {
                        //施加弹力
                    water.setWindForce("w"+1,-300,0);
                }
                else
                {
                    water.removeColider("w"+1);    
                }
                    
                if((water.spriteCircle.y < 1334&&water.spriteCircle.x>190&&water.spriteCircle.x<291&&water.spriteCircle.y >532)&& this.arr_BtnWind[1] == true)
                {
                    water.setWindForce("w"+2,0,-500);
                 }
                 else
                 {
                     water.removeColider("w"+2);   
                 }
                if(water.spriteCircle.x > 429&&water.spriteCircle.y>753&&water.spriteCircle.y<883&& this.arr_BtnWind[2] == true)
                {
                    water.setWindForce("w"+3,-500,-10);   
                }
                else
                {
                    water.removeColider("w"+3);   
                }
                if(water.spriteCircle.x > 264&&water.spriteCircle.y>496&&water.spriteCircle.y<580&& water.spriteCircle.x < 511 && this.arr_BtnWind[2] == true)
                {
                    water.setWindForce("w"+4,100,0);   
                }
                else
                {
                    water.removeColider("w"+4);   
                }

                ///是否开关
                let mX = Laya.stage.mouseX;
                let mY = Laya.stage.mouseY;
                for(let i=0;i<this.arr_BtnWind.length;i++)
                {
                    if(this.arr_IsOpen[i] == false && (Tool.ins.countDic_2(mX,mY,this.arr_BtnWind[i].x,this.arr_BtnWind[i].y) < 35))
                    {
                        this.openWind(i);
                    }
                }
                /////毒水
                if(water.spriteCircle.x>576 && water.spriteCircle.y > 884  && water.spriteCircle.y <910)
                {
                    water.distroyWater();
                    this.showWaterCount();
                }
                if(water.spriteCircle.y>1300)
                {
                    water.distroyWater();
                    this.showWaterCount();
                    
                }
            }
            ///水落入
                if(this.gameUI.gameWin.hitTestPoint(water.spriteCircle.x,water.spriteCircle.y))
                {
                    water.distroyWater();
                    this.showWaterCount();
                    console.log("成功进水");
                }
        });
    }

    /**是否在白点 */
    private coliderTest(gC) : boolean
    {
        for(let i=0; i< this.mousePos.length;i++)
        {
            if(Tool.ins.countDic_2(gC.spriteCircle.x,gC.spriteCircle.y,this.mousePos[i].x,this.mousePos[i].y) < 35)
            {
                return true;
            }
        }
        return false;
    }

}