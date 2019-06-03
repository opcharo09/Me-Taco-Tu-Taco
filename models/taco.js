var orm = require("../config/orm.js");

var taco = {
    all: function(cb) {
        orm.all("tacos", function(res){
            cb(res);
        });
    },

};

module.export = taco;