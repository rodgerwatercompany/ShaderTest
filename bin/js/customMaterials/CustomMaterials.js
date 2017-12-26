var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var CustomMaterial = /** @class */ (function (_super) {
    __extends(CustomMaterial, _super);
    function CustomMaterial() {
        var _this = _super.call(this) || this;
        // 設定要使用 Shader 的名稱
        _this.setShaderName("myCustomShader");
        return _this;
    }
    Object.defineProperty(CustomMaterial.prototype, "diffuseTexture", {
        /**
         * 获取漫反射贴图。
         *  漫反射贴图。
         */
        get: function () {
            return this._getTexture(CustomMaterial.DIFFUSETEXTURE);
        },
        /**
         * 设置漫反射贴图。
         * 漫反射贴图。
         */
        set: function (value) {
            this._setTexture(CustomMaterial.DIFFUSETEXTURE, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomMaterial.prototype, "marginalColor", {
        /**
         * 设置边缘光照颜色。
         * 边缘光照颜色。
         */
        set: function (value) {
            this._setColor(CustomMaterial.MARGINALCOLOR, value);
        },
        enumerable: true,
        configurable: true
    });
    CustomMaterial.DIFFUSETEXTURE = 1;
    CustomMaterial.MARGINALCOLOR = 2;
    return CustomMaterial;
}(Laya.BaseMaterial));
//# sourceMappingURL=CustomMaterials.js.map