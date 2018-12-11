// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        this.initStage();
    }
    GameMain.prototype.initStage = function () {
        Laya.init(750, 1334);
        Laya.stage.scaleMode = "exactfix";
        //Laya.stage.screenMode = "vertical";
        Laya.stage.alignV = "middle";
        Laya.stage.alignH = "center";
        //性能检测
        Laya.Stat.show(0, 0);
        //舞台对齐设置
        console.log("舞台初始化完成");
        var arr = [
            { url: "res/atlas/assets.atlas" },
        ];
        Laya.loader.load(arr, Laya.Handler.create(this, this.goGame));
    };
    GameMain.prototype.goGame = function () {
        new GameWorld();
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map