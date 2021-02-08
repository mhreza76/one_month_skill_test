"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/*
Rest operator specified in function declaration,
Rest takes individual variables and combine into a Array
*/
var display_color = function (msg) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(arguments.length);
    console.log(msg);
    console.log(colors);
    for (var i in colors)
        console.log(colors[i]);
};
var message = "List of colors";
/*
Spread operator specified in function Call,
Spread takes Array and split into individual elements
*/
var colorArray = ["Black", "White", "Green"];
display_color.apply(void 0, __spreadArrays([message], colorArray));
//# sourceMappingURL=spread_operator.js.map