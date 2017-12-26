var LayaAir3D = /** @class */ (function () {
    function LayaAir3D() {
        //初始化引擎
        Laya3D.init(0, 0, true);
        //适配模式
        Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        //开启统计信息
        //Laya.Stat.show();
        var scene = Laya.stage.addChild(Laya.Scene.load("res/LayaScene_Table/Table.ls"));
        //加载一个图片
        //Laya.loader.load("res/texture.png", Handler.create(this, this.loadComplete), null, Loader.IMAGE);
        scene.once(Laya.Event.HIERARCHY_LOADED, this, function () {
            var shaderMgr = new ShaderManager();
            var customMaterial = new CustomMaterial();
            customMaterial.diffuseTexture = Laya.Texture2D.load("res/LayaScene_Table/Assets/Model/Turntable_Color_G.jpg");
            console.log(customMaterial);
            var color = this.getChildByUrl(scene, "Table.Color_13");
            color.meshRender.sharedMaterial = customMaterial;
            console.log(color);
        });
    }
    LayaAir3D.prototype.loadComplete = function () {
        //let shaderMgr = new ShaderManager();
        // var texture:Texture = Loader.getRes("res/texture.png");
        // var spe:myShaderSprite = new myShaderSprite();
        // spe.init(texture);
        // spe.pos(50, 50);
        // Laya.stage.addChild(spe);
    };
    LayaAir3D.prototype.getChildByUrl = function (parent, url) {
        var ret = null;
        var paths = url.split(".");
        for (var i = 0; i < paths.length; i++) {
            ret = parent.getChildByName(paths[i]);
            parent = ret;
        }
        return ret;
    };
    return LayaAir3D;
}());
new LayaAir3D();
//# sourceMappingURL=LayaAir3D.js.map