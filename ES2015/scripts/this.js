"use strict";
var employee = {
    id: 1,
    greet: function () {
        var _this = this;
        var self = this;
        setTimeout(function () { console.log(self.id); }, 1000);
        //setTimeout(function(){console.log(this.id)}, 1000); //in this scope this will not get the value
        setTimeout(function () { console.log(_this.id); }, 1000);
    }
};
employee.greet();
//# sourceMappingURL=this.js.map