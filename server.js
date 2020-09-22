const express = require("express");

const app = express();

const PORT = process.env.PORT || 8081;

//let notes = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});