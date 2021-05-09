const sql = require("./db.js");

class Video {
    constructor(title, category, description, owner) {
        this.title = title;
        this.category = category;
        this.description = description;
        this.owner = owner;
    }
    statusPublished = false;

    isPublished(statusPublished) {
        if(statusPublished) {
            this.statusPublished = 'published';
        } else {
            this.statusPublished = 'not published'
        }
    }
}

Video.getAll = result => {
    sql.query("SELECT * FROM videos", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
    
        console.log("videos: ", res);
        result(null, res);
    });
};

module.exports = Video;