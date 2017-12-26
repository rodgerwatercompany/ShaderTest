/*
* name;
*/
class ShaderManager {

    constructor () {

        this.initShader();
    }

    public initShader(): void {

        console.log("initShader");

          var attributeMap = {
            'a_Position': Laya.VertexElementUsage.POSITION0,
            'a_Texcoord0': Laya.VertexElementUsage.TEXTURECOORDINATE0
        };

        var uniformMap = {
            'u_MvpMatrix': [Laya.Sprite3D.MVPMATRIX, Laya.Shader3D.PERIOD_SPRITE],
            'u_texture': [CustomMaterial.DIFFUSETEXTURE, Laya.Shader3D.PERIOD_MATERIAL],
        };

        var customShader: number = Laya.Shader3D.nameKey.add("myCustomShader");

        var vs : string = "attribute vec4 a_Position;\n" +
        "attribute vec2 a_Texcoord0;\n" +
        "uniform mat4 u_MvpMatrix;\n" +
        "attribute vec3 a_Normal;\n\n" +
        "varying vec3 v_Normal;\n\n" +
        "varying vec2 v_Texcoord0;\n" +
        "void main()\n" +
        "{\n" +
              "v_Texcoord0 = a_Texcoord0;\n" +
              "gl_Position = u_MvpMatrix * a_Position;\n  \n" +
        "}";

        var ps : string = "#ifdef FSHIGHPRECISION\nprecision highp float;\n" +
        "#else\nprecision mediump float;\n" + 
        "#endif\n\n" + 
        "#include \"LightHelper.glsl\";\n\n" +
            "uniform sampler2D u_texture;\n" +
            "varying vec2 v_Texcoord0;\n" +
            "void main(){\n" +
            "gl_FragColor=texture2D(u_texture,v_Texcoord0);\n" +
            "}";

        Laya.ShaderCompile3D.add(customShader, vs, ps, attributeMap, uniformMap);

    }
}