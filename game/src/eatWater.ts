/**
 * 吸水虫
 */
class eatWater{
    /**ui */
    public eatUI : Laya.Image;
    /**水数组 */
    private arr_water : Array<Water>;
    /**放大倍数 */
    private sca : number;
    private call : any;
    private caller : Function;

    constructor(eat,water,call,caller){
        this.eatUI = eat;
        this.arr_water = water;
        this.sca = 1;
        this.call = call;
        this.caller = caller;
        Laya.timer.loop(1000,this,this.getWater);
    }

    /**吸水 */
    private getWater() : void
    {
        this.arr_water.forEach(water => {
            if(Tool.ins.countDic_2(this.eatUI.x,this.eatUI.y,water.spriteCircle.x,water.spriteCircle.y) < 20)
            {
               this.biger(water);
                console.log("吃水");
               //this.caller.call(this.call);
            }
        });
    }

    /**变大 */
    private biger(water : Water) : void
    {
        this.sca += 0.03;
        this.eatUI.scale(this.sca,this.sca);
        water.distroyWater();
        if(this.sca > 2.5) Laya.timer.clear(this,this.getWater);
    }
    
}