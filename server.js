var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();


app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes 
var routes = require("./controller/tacos_controller");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});