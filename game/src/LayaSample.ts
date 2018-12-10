// 程序入口
class GameMain{
    constructor()
    {
        this.initStage();
    }

    private initStage() : void
    {
        Laya.init(750,1334);
        Laya.stage.scaleMode = "exactfix";
        //Laya.stage.screenMode = "vertical";
        Laya.stage.alignV = "middle";
        Laya.stage.alignH = "center";
        //性能检测
        Laya.Stat.show(0,0);
        //舞台对齐设置
        console.log("舞台初始化完成");
        // var arr = [
                        
        // ]
        // Laya.loader.load(arr,Laya.Handler.create(this,this.goGame));
        this.goGame();
    }

    private goGame() : void
    {
        new GameWorld();
    }
}
new GameMain();