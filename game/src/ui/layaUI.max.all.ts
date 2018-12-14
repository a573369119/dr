
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class gameUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public ani3:Laya.FrameAnimation;
		public ani4:Laya.FrameAnimation;
		public sprite_go:Laya.Sprite;
		public player:Laya.Image;
		public enter:Laya.Image;
		public ci1:Laya.Image;
		public ci2:Laya.Image;
		public ci3:Laya.Image;
		public ci4:Laya.Image;
		public ci5:Laya.Image;
		public ci6:Laya.Image;
		public ci7:Laya.Image;
		public ci8:Laya.Image;
		public ci9:Laya.Image;
		public ci10:Laya.Image;
		public ci11:Laya.Image;
		public ci12:Laya.Image;
		public ci13:Laya.Image;
		public ci14:Laya.Image;
		public ci15:Laya.Image;
		public ci16:Laya.Image;
		public ci17:Laya.Image;
		public ci18:Laya.Image;
		public ci19:Laya.Image;
		public ci20:Laya.Image;
		public ci21:Laya.Image;
		public ci22:Laya.Image;
		public ci23:Laya.Image;
		public ci24:Laya.Image;
		public ci25:Laya.Image;
		public ci26:Laya.Image;
		public ci27:Laya.Image;
		public ci28:Laya.Image;
		public ci29:Laya.Image;
		public ci30:Laya.Image;
		public ci31:Laya.Image;
		public ci32:Laya.Image;
		public ci33:Laya.Image;
		public ci34:Laya.Image;
		public ci35:Laya.Image;
		public ci36:Laya.Image;
		public ci37:Laya.Image;
		public ci38:Laya.Image;
		public ci65:Laya.Image;
		public ci66:Laya.Image;
		public ci67:Laya.Image;
		public ci68:Laya.Image;
		public ci69:Laya.Image;
		public ci39:Laya.Image;
		public ci40:Laya.Image;
		public ci41:Laya.Image;
		public ci42:Laya.Image;
		public ci43:Laya.Image;
		public ci44:Laya.Image;
		public ci45:Laya.Image;
		public ci46:Laya.Image;
		public ci47:Laya.Image;
		public ci48:Laya.Image;
		public ci49:Laya.Image;
		public ci50:Laya.Image;
		public ci51:Laya.Image;
		public ci52:Laya.Image;
		public ci53:Laya.Image;
		public ci54:Laya.Image;
		public ci55:Laya.Image;
		public ci56:Laya.Image;
		public ci57:Laya.Image;
		public ci58:Laya.Image;
		public ci59:Laya.Image;
		public ci60:Laya.Image;
		public ci61:Laya.Image;
		public ci62:Laya.Image;
		public ci63:Laya.Image;
		public ci64:Laya.Image;
		public ci0:Laya.Image;
		public Time:Laya.Image;
		public anni1:Laya.Image;
		public anni2:Laya.Sprite;
		public monster:Laya.Image;
		public home2:Laya.Image;
		public home1:Laya.Image;
		public labWaterCount:Laya.Label;
		public labTime:Laya.Label;
		public wind1:Laya.Image;
		public wind2:Laya.Image;
		public wind3:Laya.Image;
		public anni3:Laya.Sprite;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":271,"x":1,"width":752,"skin":"assets/tu.png","height":1065}},{"type":"Image","props":{"y":372,"x":1,"width":758,"skin":"assets/xiachengnitu.png","height":972}},{"type":"Image","props":{"y":-19,"x":-1,"width":756,"skin":"assets/top.png","height":291}},{"type":"Sprite","props":{"y":0,"x":0,"width":750,"var":"sprite_go","height":1334}},{"type":"Image","props":{"y":244,"x":368,"width":109,"var":"player","skin":"assets/role.png","pivotY":19,"pivotX":67,"height":49}},{"type":"Image","props":{"y":960,"x":426,"width":47,"var":"enter","skin":"assets/shuiguan.png","pivotY":9,"pivotX":14,"height":85}},{"type":"Image","props":{"y":-34,"x":-2,"width":758,"skin":"assets/dushui.png","height":1374}},{"type":"Image","props":{"y":-20,"x":0,"width":752,"skin":"assets/qiangbi.png","height":1362}},{"type":"Image","props":{"y":645,"x":267,"width":24,"var":"ci1","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":670,"x":268,"width":24,"var":"ci2","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":696,"x":268,"width":24,"var":"ci3","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":723,"x":267,"width":24,"var":"ci4","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":748,"x":268,"width":24,"var":"ci5","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":774,"x":268,"width":24,"var":"ci6","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":800,"x":267,"width":24,"var":"ci7","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":825,"x":268,"width":24,"var":"ci8","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":851,"x":268,"width":24,"var":"ci9","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":878,"x":267,"width":24,"var":"ci10","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":903,"x":268,"width":24,"var":"ci11","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":929,"x":268,"width":24,"var":"ci12","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":955,"x":268,"width":24,"var":"ci13","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":980,"x":269,"width":24,"var":"ci14","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":1006,"x":269,"width":24,"var":"ci15","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":1033,"x":268,"width":24,"var":"ci16","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":1058,"x":269,"width":24,"var":"ci17","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":1084,"x":269,"width":24,"var":"ci18","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":1110,"x":268,"width":24,"var":"ci19","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":1135,"x":269,"width":24,"var":"ci20","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":1161,"x":269,"width":24,"var":"ci21","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":1188,"x":268,"width":24,"var":"ci22","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":1213,"x":269,"width":24,"var":"ci23","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":1239,"x":269,"width":24,"var":"ci24","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":1060,"x":65,"width":24,"var":"ci25","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":1085,"x":66,"width":24,"var":"ci26","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":1111,"x":66,"width":24,"var":"ci27","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":1138,"x":65,"width":24,"var":"ci28","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":1163,"x":66,"width":24,"var":"ci29","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":518,"x":685,"width":24,"var":"ci30","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":544,"x":685,"width":24,"var":"ci31","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":571,"x":684,"width":24,"var":"ci32","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":596,"x":685,"width":24,"var":"ci33","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":620,"x":684,"width":24,"var":"ci34","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":645,"x":685,"width":24,"var":"ci35","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":671,"x":685,"width":24,"var":"ci36","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":698,"x":684,"width":24,"var":"ci37","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":723,"x":685,"width":24,"var":"ci38","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":1165,"x":169,"width":24,"var":"ci65","skin":"assets/ci.png","scaleX":-1,"pivotY":13,"height":26}},{"type":"Image","props":{"y":1137,"x":168,"width":24,"var":"ci66","skin":"assets/ci.png","scaleX":-1,"pivotY":13,"height":26}},{"type":"Image","props":{"y":1113,"x":168,"width":24,"var":"ci67","skin":"assets/ci.png","scaleX":-1,"pivotY":13,"height":26}},{"type":"Image","props":{"y":1087,"x":169,"width":24,"var":"ci68","skin":"assets/ci.png","scaleX":-1,"pivotY":13,"height":26}},{"type":"Image","props":{"y":1060,"x":168,"width":24,"var":"ci69","skin":"assets/ci.png","scaleX":-1,"pivotY":13,"height":26}},{"type":"Sprite","props":{"y":531,"x":219,"width":62,"rotation":-90,"pivotY":1,"pivotX":-2,"height":487},"child":[{"type":"Image","props":{"y":218,"x":25,"width":24,"var":"ci39","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":193,"x":24,"width":24,"var":"ci40","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":140,"x":25,"width":24,"var":"ci41","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":115,"x":24,"width":24,"var":"ci42","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":166,"x":25,"width":24,"var":"ci43","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":91,"x":25,"width":24,"var":"ci44","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":66,"x":24,"width":24,"var":"ci45","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":39,"x":25,"width":24,"var":"ci46","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":424,"x":25,"width":24,"var":"ci47","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":399,"x":24,"width":24,"var":"ci48","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":346,"x":25,"width":24,"var":"ci49","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":321,"x":24,"width":24,"var":"ci50","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":372,"x":25,"width":24,"var":"ci51","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":297,"x":25,"width":24,"var":"ci52","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":272,"x":24,"width":24,"var":"ci53","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":245,"x":25,"width":24,"var":"ci54","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":479,"x":25,"width":24,"var":"ci55","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":454,"x":24,"width":24,"var":"ci56","skin":"assets/ci.png","pivotY":13,"height":26}}]},{"type":"Sprite","props":{"y":676,"x":300,"width":62,"rotation":-90,"pivotY":1,"pivotX":-2,"height":235},"child":[{"type":"Image","props":{"y":218,"x":25,"width":24,"var":"ci57","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":193,"x":24,"width":24,"var":"ci58","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":140,"x":25,"width":24,"var":"ci59","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":115,"x":24,"width":24,"var":"ci60","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":166,"x":25,"width":24,"var":"ci61","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":91,"x":25,"width":24,"var":"ci62","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":66,"x":24,"width":24,"var":"ci63","skin":"assets/ci.png","pivotY":13,"height":26}}]},{"type":"Sprite","props":{"y":831,"x":661,"width":62,"rotation":-270,"pivotY":1,"pivotX":-2,"height":235},"child":[{"type":"Image","props":{"y":218,"x":25,"width":24,"var":"ci64","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":193,"x":24,"width":24,"var":"ci0","skin":"assets/ci.png","pivotY":13,"height":26}}]},{"type":"Image","props":{"y":53,"x":228,"var":"Time","skin":"assets/fubiaoti.png"}},{"type":"Image","props":{"y":326,"x":64,"width":40,"var":"anni1","skin":"assets/bn.png","pivotY":-1,"pivotX":22,"height":14}},{"type":"Sprite","props":{"y":1182,"x":123,"width":33,"var":"anni2","rotation":1,"pivotY":18,"pivotX":18,"height":30},"child":[{"type":"Image","props":{"y":16,"x":-7,"skin":"assets/bn.png"}}]},{"type":"Image","props":{"y":497,"x":547,"width":40,"var":"monster","skin":"assets/xishuichong.png","pivotY":31,"pivotX":20,"height":62},"compId":14},{"type":"Image","props":{"y":958,"x":414,"width":304,"var":"home2","skin":"assets/end1.png","height":304}},{"type":"Image","props":{"y":958,"x":414,"width":304,"var":"home1","skin":"assets/end2.png","height":304}},{"type":"Sprite","props":{"y":1300,"x":593}},{"type":"Label","props":{"text":"label"}},{"type":"Label","props":{"y":64,"x":487,"width":56,"var":"labWaterCount","text":"120","height":35,"fontSize":30,"font":"Microsoft YaHei","color":"#000000","bold":true,"align":"center"}},{"type":"Label","props":{"y":65,"x":333,"width":130,"var":"labTime","text":"00:55","height":35,"fontSize":30,"font":"Microsoft YaHei","color":"#000000","bold":true,"align":"center"}},{"type":"Sprite","props":{"y":406,"x":711,"rotation":-90},"child":[{"type":"Image","props":{"y":-7,"x":-10,"width":77,"skin":"assets/feng.png","height":72}},{"type":"Image","props":{"y":-60,"x":13,"var":"wind1","skin":"assets/fengfeng.png"},"compId":163}]},{"type":"Sprite","props":{"y":1253,"x":180,"rotation":0},"child":[{"type":"Image","props":{"y":-7,"x":-10,"width":77,"skin":"assets/feng.png","height":72}},{"type":"Image","props":{"y":-58,"x":11,"var":"wind2","skin":"assets/fengfeng.png"},"compId":165}]},{"type":"Sprite","props":{"y":861,"x":717,"rotation":-90},"child":[{"type":"Image","props":{"y":-7,"x":-10,"width":77,"skin":"assets/feng.png","height":72}},{"type":"Image","props":{"y":-63,"x":14,"var":"wind3","skin":"assets/fengfeng.png"},"compId":164}]},{"type":"Image","props":{"y":880,"x":569,"width":184,"skin":"assets/dushui2.png","height":18}},{"type":"Sprite","props":{"y":897,"x":603,"width":33,"var":"anni3","rotation":-180,"pivotY":17,"pivotX":18,"height":34},"child":[{"type":"Image","props":{"y":16,"x":-7,"width":40,"skin":"assets/bn.png","height":18}}]}],"animations":[{"nodes":[{"target":14,"keyframes":{"y":[{"value":498,"tweenMethod":"linearNone","tween":true,"target":14,"key":"y","index":0},{"value":497,"tweenMethod":"linearNone","tween":true,"target":14,"label":null,"key":"y","index":9},{"value":854,"tweenMethod":"linearNone","tween":true,"target":14,"key":"y","index":83},{"value":854,"tweenMethod":"linearNone","tween":true,"target":14,"label":null,"key":"y","index":87},{"value":497,"tweenMethod":"linearNone","tween":true,"target":14,"key":"y","index":151}],"x":[{"value":601,"tweenMethod":"linearNone","tween":true,"target":14,"key":"x","index":0},{"value":601,"tweenMethod":"linearNone","tween":true,"target":14,"label":null,"key":"x","index":9}]}}],"name":"ani1","id":1,"frameRate":24,"action":0},{"nodes":[{"target":163,"keyframes":{"y":[{"value":-60,"tweenMethod":"linearNone","tween":true,"target":163,"key":"y","index":0},{"value":-156,"tweenMethod":"linearNone","tween":true,"target":163,"key":"y","index":23}],"x":[{"value":13,"tweenMethod":"linearNone","tween":true,"target":163,"key":"x","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":163,"key":"x","index":23}],"width":[{"value":30,"tweenMethod":"linearNone","tween":true,"target":163,"key":"width","index":0},{"value":65,"tweenMethod":"linearNone","tween":true,"target":163,"key":"width","index":23}],"height":[{"value":48,"tweenMethod":"linearNone","tween":true,"target":163,"key":"height","index":0},{"value":104,"tweenMethod":"linearNone","tween":true,"target":163,"key":"height","index":23}]}}],"name":"ani2","id":2,"frameRate":24,"action":0},{"nodes":[{"target":165,"keyframes":{"y":[{"value":-58,"tweenMethod":"linearNone","tween":true,"target":165,"key":"y","index":0},{"value":-247,"tweenMethod":"linearNone","tween":true,"target":165,"key":"y","index":21}],"x":[{"value":11,"tweenMethod":"linearNone","tween":true,"target":165,"key":"x","index":0},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":165,"key":"x","index":21}],"width":[{"value":30,"tweenMethod":"linearNone","tween":true,"target":165,"key":"width","index":0},{"value":62,"tweenMethod":"linearNone","tween":true,"target":165,"key":"width","index":21}],"height":[{"value":48,"tweenMethod":"linearNone","tween":true,"target":165,"key":"height","index":0},{"value":100,"tweenMethod":"linearNone","tween":true,"target":165,"key":"height","index":21}]}}],"name":"ani3","id":3,"frameRate":24,"action":0},{"nodes":[{"target":164,"keyframes":{"y":[{"value":-63,"tweenMethod":"linearNone","tween":true,"target":164,"key":"y","index":0},{"value":-237,"tweenMethod":"linearNone","tween":true,"target":164,"key":"y","index":27}],"x":[{"value":14,"tweenMethod":"linearNone","tween":true,"target":164,"key":"x","index":0},{"value":-10,"tweenMethod":"linearNone","tween":true,"target":164,"key":"x","index":27}],"width":[{"value":30,"tweenMethod":"linearNone","tween":true,"target":164,"key":"width","index":0},{"value":87,"tweenMethod":"linearNone","tween":true,"target":164,"key":"width","index":27}],"height":[{"value":48,"tweenMethod":"linearNone","tween":true,"target":164,"key":"height","index":0},{"value":140,"tweenMethod":"linearNone","tween":true,"target":164,"key":"height","index":27}]}}],"name":"ani4","id":4,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameUI.uiView);

        }

    }
}

module ui {
    export class testUI extends View {
		public gameWord:Laya.Sprite;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"comp/blank.png","height":1334}},{"type":"Sprite","props":{"y":0,"x":0,"width":749,"var":"gameWord","pivotX":0,"height":1341}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.testUI.uiView);

        }

    }
}
