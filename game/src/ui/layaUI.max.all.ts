
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class gameUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public ani3:Laya.FrameAnimation;
		public ani4:Laya.FrameAnimation;
		public sprite_go:Laya.Sprite;
		public enter:Laya.Image;
		public c1:Laya.Sprite;
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
		public c2:Laya.Sprite;
		public ci58:Laya.Image;
		public ci59:Laya.Image;
		public ci60:Laya.Image;
		public ci61:Laya.Image;
		public ci62:Laya.Image;
		public ci63:Laya.Image;
		public c3:Laya.Sprite;
		public ci64:Laya.Image;
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
		public c4:Laya.Sprite;
		public ci25:Laya.Image;
		public ci26:Laya.Image;
		public ci27:Laya.Image;
		public ci28:Laya.Image;
		public ci29:Laya.Image;
		public c5:Laya.Sprite;
		public c6:Laya.Sprite;
		public c7:Laya.Sprite;
		public gameWin:Laya.Sprite;
		public player:Laya.Sprite;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":271,"x":1,"width":752,"skin":"assets/tu.png","height":1065}},{"type":"Image","props":{"y":372,"x":1,"width":758,"skin":"assets/xiachengnitu.png","height":972}},{"type":"Image","props":{"y":-19,"x":-1,"width":756,"skin":"assets/top.png","height":291}},{"type":"Sprite","props":{"y":0,"x":0,"width":750,"var":"sprite_go","height":1334}},{"type":"Image","props":{"y":960,"x":426,"width":47,"var":"enter","skin":"assets/shuiguan.png","pivotY":9,"pivotX":14,"height":85}},{"type":"Image","props":{"y":-34,"x":-2,"width":758,"skin":"assets/dushui.png","height":1374}},{"type":"Image","props":{"y":-20,"x":0,"width":752,"skin":"assets/qiangbi.png","height":1362}},{"type":"Sprite","props":{"y":513,"x":248,"width":30,"var":"c1","rotation":-90,"pivotY":1,"pivotX":-2,"height":487},"child":[{"type":"Image","props":{"y":191,"x":6,"width":24,"var":"ci39","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":166,"x":5,"width":24,"var":"ci40","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":113,"x":6,"width":24,"var":"ci41","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":88,"x":5,"width":24,"var":"ci42","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":139,"x":6,"width":24,"var":"ci43","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":64,"x":6,"width":24,"var":"ci44","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":39,"x":5,"width":24,"var":"ci45","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":12,"x":6,"width":24,"var":"ci46","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":397,"x":6,"width":24,"var":"ci47","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":372,"x":5,"width":24,"var":"ci48","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":319,"x":6,"width":24,"var":"ci49","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":294,"x":5,"width":24,"var":"ci50","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":345,"x":6,"width":24,"var":"ci51","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":270,"x":6,"width":24,"var":"ci52","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":245,"x":5,"width":24,"var":"ci53","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":218,"x":6,"width":24,"var":"ci54","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":452,"x":6,"width":24,"var":"ci55","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":427,"x":5,"width":24,"var":"ci56","skin":"assets/ci.png","pivotY":13,"height":26}}]},{"type":"Sprite","props":{"y":658,"x":360,"width":33,"var":"c2","rotation":-90,"pivotY":1,"pivotX":-2,"height":168},"child":[{"type":"Image","props":{"y":144,"x":5,"width":24,"var":"ci58","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":91,"x":6,"width":24,"var":"ci59","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":66,"x":5,"width":24,"var":"ci60","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":117,"x":6,"width":24,"var":"ci61","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":42,"x":6,"width":24,"var":"ci62","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":17,"x":5,"width":24,"var":"ci63","skin":"assets/ci.png","pivotY":13,"height":26}}]},{"type":"Sprite","props":{"y":855,"x":465,"width":24,"var":"c3","rotation":-270,"pivotY":1,"pivotX":-2,"height":32},"child":[{"type":"Image","props":{"y":22,"x":-1,"width":24,"var":"ci64","skin":"assets/ci.png","pivotY":13,"height":26}}]},{"type":"Image","props":{"y":53,"x":228,"var":"Time","skin":"assets/fubiaoti.png"}},{"type":"Image","props":{"y":326,"x":64,"width":40,"var":"anni1","skin":"assets/bn.png","pivotY":-1,"pivotX":22,"height":14}},{"type":"Sprite","props":{"y":1182,"x":123,"width":33,"var":"anni2","rotation":1,"pivotY":18,"pivotX":18,"height":30},"child":[{"type":"Image","props":{"y":16,"x":-7,"skin":"assets/bn.png"}}]},{"type":"Image","props":{"y":497,"x":547,"width":40,"var":"monster","skin":"assets/xishuichong.png","pivotY":31,"pivotX":20,"height":62},"compId":14},{"type":"Image","props":{"y":958,"x":414,"width":304,"var":"home2","skin":"assets/end1.png","height":304}},{"type":"Image","props":{"y":958,"x":414,"width":304,"var":"home1","skin":"assets/end2.png","height":304}},{"type":"Sprite","props":{"y":1096,"x":97}},{"type":"Label","props":{"text":"label"}},{"type":"Label","props":{"y":64,"x":487,"width":56,"var":"labWaterCount","text":"0","height":35,"fontSize":30,"font":"Microsoft YaHei","color":"#000000","bold":true,"align":"center"}},{"type":"Label","props":{"y":65,"x":333,"width":130,"var":"labTime","text":"00:55","height":35,"fontSize":30,"font":"Microsoft YaHei","color":"#000000","bold":true,"align":"center"}},{"type":"Sprite","props":{"y":406,"x":711,"rotation":-90},"child":[{"type":"Image","props":{"y":-7,"x":-10,"width":77,"skin":"assets/feng.png","height":72}},{"type":"Image","props":{"y":-60,"x":13,"var":"wind1","skin":"assets/fengfeng.png"},"compId":163}]},{"type":"Sprite","props":{"y":1253,"x":180,"rotation":0},"child":[{"type":"Image","props":{"y":-7,"x":-10,"width":77,"skin":"assets/feng.png","height":72}},{"type":"Image","props":{"y":-58,"x":11,"var":"wind2","skin":"assets/fengfeng.png"},"compId":165}]},{"type":"Sprite","props":{"y":861,"x":717,"rotation":-90},"child":[{"type":"Image","props":{"y":-7,"x":-10,"width":77,"skin":"assets/feng.png","height":72}},{"type":"Image","props":{"y":-63,"x":14,"var":"wind3","skin":"assets/fengfeng.png"},"compId":164}]},{"type":"Image","props":{"y":880,"x":569,"width":184,"skin":"assets/dushui2.png","height":18}},{"type":"Sprite","props":{"y":897,"x":603,"width":33,"var":"anni3","rotation":-180,"pivotY":17,"pivotX":18,"height":34},"child":[{"type":"Image","props":{"y":16,"x":-7,"width":40,"skin":"assets/bn.png","height":18}}]},{"type":"Sprite","props":{"y":1053,"x":67,"width":23,"var":"c4","height":130},"child":[{"type":"Image","props":{"y":8,"x":0,"width":24,"var":"ci25","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":33,"x":1,"width":24,"var":"ci26","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":59,"x":1,"width":24,"var":"ci27","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":86,"x":0,"width":24,"var":"ci28","skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":111,"x":1,"width":24,"var":"ci29","skin":"assets/ci.png","pivotY":13,"height":26}}]},{"type":"Sprite","props":{"y":1170,"x":169,"width":23,"var":"c5","rotation":180,"height":130},"child":[{"type":"Image","props":{"y":8,"x":0,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":33,"x":1,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":59,"x":1,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":86,"x":0,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":111,"x":1,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}}]},{"type":"Sprite","props":{"y":636,"x":260,"width":30,"var":"c6","pivotY":1,"pivotX":-2,"height":626},"child":[{"type":"Image","props":{"y":191,"x":6,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":166,"x":5,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":113,"x":6,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":88,"x":5,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":139,"x":6,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":64,"x":6,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":39,"x":5,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":12,"x":6,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":397,"x":6,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":372,"x":5,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":319,"x":6,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":294,"x":5,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":345,"x":6,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":270,"x":6,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":245,"x":5,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":218,"x":6,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":452,"x":6,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":427,"x":5,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":556,"x":7,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":531,"x":6,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":478,"x":7,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":504,"x":7,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":611,"x":7,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":586,"x":6,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}}]},{"type":"Sprite","props":{"y":505,"x":678,"width":30,"var":"c7","rotation":0,"pivotY":1,"pivotX":-2,"height":238},"child":[{"type":"Image","props":{"y":191,"x":6,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":166,"x":5,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":113,"x":6,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":88,"x":5,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":139,"x":6,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":64,"x":6,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":39,"x":5,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":12,"x":6,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}},{"type":"Image","props":{"y":218,"x":6,"width":24,"skin":"assets/ci.png","pivotY":13,"height":26}}]},{"type":"Sprite","props":{"y":941,"x":412,"width":49,"var":"gameWin","height":95}},{"type":"Sprite","props":{"y":245,"x":472,"width":96,"var":"player","pivotY":28,"pivotX":77,"height":52},"child":[{"type":"Image","props":{"y":32,"x":72,"width":109,"skin":"assets/role.png","pivotY":25,"pivotX":79,"height":49}}]}],"animations":[{"nodes":[{"target":14,"keyframes":{"y":[{"value":498,"tweenMethod":"linearNone","tween":true,"target":14,"key":"y","index":0},{"value":497,"tweenMethod":"linearNone","tween":true,"target":14,"label":null,"key":"y","index":9},{"value":854,"tweenMethod":"linearNone","tween":true,"target":14,"key":"y","index":83},{"value":854,"tweenMethod":"linearNone","tween":true,"target":14,"label":null,"key":"y","index":87},{"value":497,"tweenMethod":"linearNone","tween":true,"target":14,"key":"y","index":151}],"x":[{"value":601,"tweenMethod":"linearNone","tween":true,"target":14,"key":"x","index":0},{"value":601,"tweenMethod":"linearNone","tween":true,"target":14,"label":null,"key":"x","index":9}]}}],"name":"ani1","id":1,"frameRate":24,"action":0},{"nodes":[{"target":163,"keyframes":{"y":[{"value":-60,"tweenMethod":"linearNone","tween":true,"target":163,"key":"y","index":0},{"value":-156,"tweenMethod":"linearNone","tween":true,"target":163,"key":"y","index":23}],"x":[{"value":13,"tweenMethod":"linearNone","tween":true,"target":163,"key":"x","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":163,"key":"x","index":23}],"width":[{"value":30,"tweenMethod":"linearNone","tween":true,"target":163,"key":"width","index":0},{"value":65,"tweenMethod":"linearNone","tween":true,"target":163,"key":"width","index":23}],"height":[{"value":48,"tweenMethod":"linearNone","tween":true,"target":163,"key":"height","index":0},{"value":104,"tweenMethod":"linearNone","tween":true,"target":163,"key":"height","index":23}]}}],"name":"ani2","id":2,"frameRate":24,"action":0},{"nodes":[{"target":165,"keyframes":{"y":[{"value":-58,"tweenMethod":"linearNone","tween":true,"target":165,"key":"y","index":0},{"value":-247,"tweenMethod":"linearNone","tween":true,"target":165,"key":"y","index":21}],"x":[{"value":11,"tweenMethod":"linearNone","tween":true,"target":165,"key":"x","index":0},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":165,"key":"x","index":21}],"width":[{"value":30,"tweenMethod":"linearNone","tween":true,"target":165,"key":"width","index":0},{"value":62,"tweenMethod":"linearNone","tween":true,"target":165,"key":"width","index":21}],"height":[{"value":48,"tweenMethod":"linearNone","tween":true,"target":165,"key":"height","index":0},{"value":100,"tweenMethod":"linearNone","tween":true,"target":165,"key":"height","index":21}]}}],"name":"ani3","id":3,"frameRate":24,"action":0},{"nodes":[{"target":164,"keyframes":{"y":[{"value":-63,"tweenMethod":"linearNone","tween":true,"target":164,"key":"y","index":0},{"value":-237,"tweenMethod":"linearNone","tween":true,"target":164,"key":"y","index":27}],"x":[{"value":14,"tweenMethod":"linearNone","tween":true,"target":164,"key":"x","index":0},{"value":-10,"tweenMethod":"linearNone","tween":true,"target":164,"key":"x","index":27}],"width":[{"value":30,"tweenMethod":"linearNone","tween":true,"target":164,"key":"width","index":0},{"value":87,"tweenMethod":"linearNone","tween":true,"target":164,"key":"width","index":27}],"height":[{"value":48,"tweenMethod":"linearNone","tween":true,"target":164,"key":"height","index":0},{"value":140,"tweenMethod":"linearNone","tween":true,"target":164,"key":"height","index":27}]}}],"name":"ani4","id":4,"frameRate":24,"action":0}]};
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
