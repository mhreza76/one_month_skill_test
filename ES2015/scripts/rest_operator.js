"use strict";
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
display_color(message, "Red");
display_color(message, "Red", "Blue");
display_color(message, "Red", "Blue", "Green");
//# sourceMappingURL=rest_operator.js.map