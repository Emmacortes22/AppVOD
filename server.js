var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to VOD application." });
});

require("./app/routes/videos.routes.js")(app);

// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});

