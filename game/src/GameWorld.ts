class GameWorld{
    /**Tu1 */
    private arr_Tu_1 : Array<Tu>;
    /**Tu2 */
    private arr_Tu_2 : Array<Tu>; 

    /**mouse */
    private mouseTest : MouseTest ; 


    private arr_greenC : Array<GreenC>; 

    /**Water */
    private arr_Water : Array<Water>; 
    /**穿山甲 */
    private monster : Monster;
    /**水滴数 */
    private waterCount : number = 120;
    /**土数量 */
    private tuCount : number = 50;

    /**位置数组 */
    private arr_PosTu : Array<any>; 
    /**游戏UI */
    private gameUI : ui.gameUI;

    constructor(){
        this.init()
    }
    /**初始化 */
    private init() 
    {
        /**初始化数组 */
        this.arr_PosTu = new Array<any>();
        this.arr_greenC = new Array<GreenC>();
        /**创建UI */
        this.gameUI = new ui.gameUI();
        Laya.stage.addChild(this.gameUI);
        /**创建鼠标 */
        this.createMouse();
        /**创建水滴 */
        this.createWater();
        /**创建地图 */
        this.createMap();
        /**创建红绿 */
        this.createGR();
        //土排版
        this.tuList();
        /**启动世界关系 */
        Laya.timer.loop(16,this,this.relationShipRun);
        /**绑定鼠标事件 */
        Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.mouseT);
        /** */
        Laya.stage.on(Laya.Event.MOUSE_UP,this,this.mouseUp);
        
    }
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
        if (this.mouseTest.mouseIsDown) 
        {
            let isColiderTu : boolean = true;
            let mX = Laya.stage.mouseX;
            let mY = Laya.stage.mouseY;
            /**每次刷新碰墙事件 */
            isColiderTu = this.mouseColiderTu(mX,mY);
            //生成区域
            if(isColiderTu)
            {
                if (Math.sqrt(Math.pow(this.mouseTest.mousePos_remX - mX, 2) + Math.pow(this.mouseTest.mousePos_remY - mY, 2)) > 30) 
                {

                        //this.mouseTest.drwaC(Laya.stage.mouseX, Laya.stage.mouseY);
                        this.mouseTest.mousePos = 0;
                        this.mouseTest.mousePos_remX = mX;
                        this.mouseTest.mousePos_remY = mY;
                        // console.log(Laya.stage.mouseX+","+Laya.stage.mouseX);
                }
            }
        }
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
    /**创建红绿 */
    private createGR() : void
    {
        let c;
        /**绿*/
        for(let i=0; i < 6;i++)
        {
            c = new GreenC(515+i*20,300,15);
            this.gameUI.sprite_go.addChild(c.spriteCircle);
            this.arr_greenC.push(c);
        }
    }

    /**创建鼠标对象 */
    private createMouse() : void
    {
        this.mouseTest = new MouseTest(100,200,30,"#fff","#fff");
        this.gameUI.sprite_go.addChild(this.mouseTest.spriteCircle);                  
        
    }


    /**土排版*/
    private tuList() : void
    {

    }

 
    /**处理水碰撞地面 */
    private coliderTu(water:Water,tu:any) : void
    {
        water.setColider(tu);
    }

    /** */
    private mediatorColider_water(water:Water,Tu : Tu) : void
    {

    }

    /**创建水滴 */
    private createWater() : void
    {
        this.arr_Water = new Array<Water>();
        let water : Water;
        for(let i=0; i<this.waterCount ; i++)
        {
            water = new Water(510 + i*0.1,210+i*0.1,10,"#00f","#00f");
            this.gameUI.sprite_go.addChild(water.spriteCircle);      
            this.arr_Water.push(water);
        }   
    }

    /**创建地图 */
    private createMap() : void
    {
        /**创建墙壁 */
        this.createTu();
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
            tu = new Tu(650+i*10,310,30,"#880","#880");
            tu.destroyCircle();
            Laya.Pool.recover("tu",tu);
            this.gameUI.sprite_go.addChild(tu.spriteCircle);                  
            this.arr_Tu_1.push(tu);
        }

        //------------------
         for(let i=0; i<10;i++)
         {
             object = {};
            //  tu = new Tu(650+i*10,310,30,"#880","#880");
            //  this.arr_Tu_1.push(tu);
             object.x = 650+i*10;
             object.y = 310;
             this.arr_PosTu.push(object);
         }
        //------------------
         for(let i=0; i<this.tuCount;i++)
         {
             object = {};
            //  tu = new Tu(0+i * 10,310,30,"#880","#880");
            //  this.arr_Tu_1.push(tu);
             object.x = 0+i * 10;
             object.y = 310;
             this.arr_PosTu.push(object);
         }
         //--------------------
         for(let i=0; i<this.tuCount;i++)
         {
             object = {};
            //  tu = new Tu(250+i * 10,465,30,"#880","#880");
            //  this.arr_Tu_1.push(tu);
             object.x = 250+i * 10;
             object.y = 465;
             this.arr_PosTu.push(object);
         }
         // --------------------------第一斜边
         for(let i=0; i<7;i++)
         {
             object = {};
            // tu = new Tu(i * 10 + 175,560 - i*13,30,"#880","#880");
            //  this.arr_Tu_2.push(tu);
             object.x = i * 10 + 175;
             object.y = 560 - i*13;
             this.arr_PosTu.push(object);
         }
         //---------------------------第一竖边
         for(let i=0; i<18;i++)
         {
             object = {};
            //  tu = new Tu(179,755 - i*10,30,"#880","#880");
            //  this.arr_Tu_2.push(tu);
             object.x = 179;
             object.y = 755 - i*10;
             this.arr_PosTu.push(object);
         }
         //_______________第二竖边
         for(let i=0; i<15;i++)
         {
             object = {};
            //   tu = new Tu(133,1172 - i*10,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
              object.x = 133;
              object.y = 1172 - i*10;
              this.arr_PosTu.push(object);         
         }
         //______________最左竖边
         for(let i=0; i<100;i++)
         {
             object = {};
            //   tu = new Tu(-10,1326 - i*10,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
              object.x = -10;
              object.y = 1326 - i*10;
              this.arr_PosTu.push(object);
         }
         //______________最右竖边
         for(let i=0; i<100;i++)
         {
             object = {};
            //   tu = new Tu(735,1326 - i*10,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
              object.x = 735;
              object.y = 1326 - i*10;
              this.arr_PosTu.push(object);
         }
        //______________中间竖边
         for(let i=0; i<65;i++)
         {
             object = {};
            //   tu = new Tu(328,1326 - i*10,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
              object.x = 328;
              object.y = 1326 - i*10;
              this.arr_PosTu.push(object);
         }
        //______________第二斜边
         for(let i=0; i<5;i++)
         {
             object = {};
            //   tu = new Tu(328 + i*10,665 - i*13,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
              object.x = 328 + i*10;
              object.y = 665 - i*13;
              this.arr_PosTu.push(object);
         }
        //______________第二横边
         for(let i=0; i<15;i++)
         {
             object = {};
            //   tu = new Tu(383 + i*10,610,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
              object.x = 383 + i*10;
              object.y = 610;
              this.arr_PosTu.push(object);
         }
        //______________第三横边
         for(let i=0; i<7;i++)
         {
             object = {};
            //   tu = new Tu(373 + i*10,760,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
              object.x = 373 + i*10;
              object.y = 760;
              this.arr_PosTu.push(object);
         }
        //——————————————第四横边
         for(let i=0; i<3;i++)
         {
             object = {};
            //   tu = new Tu(672 + i*10,760,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
              object.x = 672 + i*10;
              object.y = 760;
              this.arr_PosTu.push(object);
         }
        //——————————————第五横边
         for(let i=0; i<10;i++)
         {
             object = {};
            //   tu = new Tu(470 + i*10,909,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
              object.x = 470 + i*10;
              object.y = 909;
              this.arr_PosTu.push(object);
         }
        //——————————————第六横边
         for(let i=0; i<10;i++)
         {
             object = {};
            //   tu = new Tu(600 + i*10,940,30,"#880","#880");
            //   this.arr_Tu_2.push(tu);
              object.x = 600 + i*10;
              object.y = 940;
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
                if(gC.spriteCircle.visible == true)
                {
                    if(Tool.ins.countDic(gC,water) ==1 || Tool.ins.countDic(gC,water) ==2){
                        //处理碰撞效果
                        if(Tool.ins.countDic(gC,water) ==2.5)
                        {
                            
                        }
                        else
                        {
                            this.coliderTu(water,gC);
                        }
                    }
                    else
                    {
                        water.removeColider(gC);
                    }
                }
            });
            ///

        });
    }

}