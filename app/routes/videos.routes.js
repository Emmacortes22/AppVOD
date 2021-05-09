module.exports = app => {
    const videos = require("../controllers/videos.controller.js");

    app.get("/videos", videos.findAll);
};