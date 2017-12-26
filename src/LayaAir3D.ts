

class LayaAir3D {

    constructor() {

        //初始化引擎
        Laya3D.init(0, 0, true);

        //适配模式
        Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;

        //开启统计信息
        //Laya.Stat.show();

        var scene : Laya.Scene = Laya.stage.addChild(Laya.Scene.load("res/LayaScene_Table/Table.ls")) as Laya.Scene;

		//加载一个图片
		//Laya.loader.load("res/texture.png", Handler.create(this, this.loadComplete), null, Loader.IMAGE);

        scene.once(Laya.Event.HIERARCHY_LOADED, this, function () : void {

            let shaderMgr = new ShaderManager();

            let customMaterial = new CustomMaterial();
            customMaterial.diffuseTexture = Laya.Texture2D.load("res/LayaScene_Table/Assets/Model/Turntable_Color_G.jpg");
            console.log(customMaterial);

            let color = this.getChildByUrl(scene,"Table.Color_13");
            color.meshRender.sharedMaterial = customMaterial;

            console.log(color);
        });

    }
    
	loadComplete() : void {

        //let shaderMgr = new ShaderManager();

        // var texture:Texture = Loader.getRes("res/texture.png");
		// var spe:myShaderSprite = new myShaderSprite();
		// spe.init(texture);
		// spe.pos(50, 50);
		// Laya.stage.addChild(spe);
	}
    
    getChildByUrl (parent,url : string) {

        let ret = null;
        let paths = url.split(".");
        
        for (let i = 0; i < paths.length; i++) {

            ret = parent.getChildByName(paths[i]);
            parent = ret;
        }

        return ret;
    }
}
new LayaAir3D();