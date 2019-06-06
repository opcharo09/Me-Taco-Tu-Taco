const connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

  var orm = {
    selectAll : function (cb){
        connection.query("SELECT * FROM tacos;", function(err, data) {
            if (err) {
              return res.status(500).end();
            }
            cb(data);
          });
        },
    

  }

module.export = orm;