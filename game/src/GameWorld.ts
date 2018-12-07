class GameWorld{
    /**Tu */
    private arr_Tu : Array<Tu>;
    /**Water */
    private arr_Water : Array<Water>; 
    /**穿山甲 */
    private monster : Monster;
    /**水滴数 */
    private waterCount : number = 1;
    /**土数量 */
    private tuCount : number = 45;
    constructor(){
        this.init();
    }
    /**初始化 */
    private init() 
    {
        /**水 */
        let water : Water;
        this.arr_Water = new Array<Water>();
        for(let i=0; i<this.waterCount ;i++)
        {
            water = new Water(100,100,20);
            this.arr_Water.push(water);
        }
        /**土 */
        this.arr_Tu = Array<Tu>();
        let tu : Tu;
        for(let i=0; i<this.tuCount; i++)
        {
            tu = new Tu(0,300,10);
            this.arr_Tu.push(tu);
        }
        this.tuList();
        /**启动世界关系 */
        Laya.timer.loop(16,this,this.relationShipRun);
    }

    /**土排版*/
    private tuList() : void
    {
        for(let i=0; i<this.arr_Tu.length ; i++)
        {
            this.arr_Tu[i].showCircle(i*2*this.arr_Tu[i].r,1000);
        }
    }

    /**世界关系互联 */
    private relationShipRun() : void
    {
        for(let i=0;i<this.arr_Water.length;i++)
        {
            for(let t=0; t<this.arr_Tu.length ; t++)
            {
                if(this.arr_Water[i].judgeColider(this.arr_Tu[t]))
                {
                    this.mediatorColider_water(this.arr_Water[i]);
                    break;
                }
            }
        }
    }

    /** */
    private mediatorColider_water(water:Water) : void
    {
        water.setSpeedY(-2);
    }
}