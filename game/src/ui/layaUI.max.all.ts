
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class gameUI extends View {
		public sprite_go:Laya.Sprite;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":271,"x":1,"width":752,"skin":"assets/tu.png","height":1065}},{"type":"Image","props":{"y":-19,"x":-1,"width":756,"skin":"assets/top.png","height":291}},{"type":"Image","props":{"y":194,"x":61,"width":175,"skin":"assets/role.png","height":79}},{"type":"Sprite","props":{"y":0,"x":0,"width":750,"var":"sprite_go","height":1334}},{"type":"Image","props":{"y":962,"x":411,"width":304,"skin":"assets/end1.png","height":304}},{"type":"Image","props":{"y":951,"x":412,"width":47,"skin":"assets/shuiguan.png","height":85}},{"type":"Image","props":{"y":-34,"x":-2,"width":758,"skin":"assets/dushui.png","height":1374}},{"type":"Image","props":{"y":-22,"x":0,"width":752,"skin":"assets/qiangbi.png","height":1362}}]};
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
