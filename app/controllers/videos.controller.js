const Video = require("../models/videos.model.js");

exports.findAll = (req, res) => {
    Video.getAll((err, data) => {
        if (err) {
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving videos."
            });
        } else {
            const videos = [];
            for (const key in data) {
                let video = {};
                video.img = "https://picsum.photos/350/250/?random&t=";
                video.title = data[key].title;
                video.owner = data[key].owner;
                videos.push(video);
            }
            res.send(videos);
        }
    });
};