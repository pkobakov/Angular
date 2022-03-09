"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Melolemonmelon = exports.Airmelon = exports.Earthmelon = exports.FireMelon = exports.Watermelon = void 0;
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
        this.elementIndex = Number(weight) * melonSort.length;
        this.element = '';
    }
    Melon.prototype.getElementIndex = function () {
        return this.elementIndex;
    };
    Melon.prototype.toString = function () {
        var result = "Element: ".concat(this.element, "\nSort: ").concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex);
        return result;
    };
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = 'Water';
        return _this;
    }
    return Watermelon;
}(Melon));
exports.Watermelon = Watermelon;
var FireMelon = /** @class */ (function (_super) {
    __extends(FireMelon, _super);
    function FireMelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = 'Fire';
        return _this;
    }
    return FireMelon;
}(Melon));
exports.FireMelon = FireMelon;
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = 'Earth';
        return _this;
    }
    return Earthmelon;
}(Melon));
exports.Earthmelon = Earthmelon;
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = 'Air';
        return _this;
    }
    return Airmelon;
}(Melon));
exports.Airmelon = Airmelon;
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = 'Water';
        _this.elements = ['Fire', 'Earth', 'Air', 'Water'];
        _this.index = 0;
        return _this;
    }
    Melolemonmelon.prototype.morph = function (index) {
        this.element = this.elements[this.index];
        console.log("This element is set to ".concat(this.element));
    };
    return Melolemonmelon;
}(Melon));
exports.Melolemonmelon = Melolemonmelon;
var watermelon = new Watermelon(12.5, 'Kingsize');
console.log(watermelon.toString());
var melolemonmelon = new Melolemonmelon(10.5, 'Special');
melolemonmelon.morph(1);
console.log(melolemonmelon.toString());
