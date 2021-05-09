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

class Comment {
    constructor(body, relatedVideo, author) {
        this.body = body;
        this.relatedVideo = relatedVideo;
        this.author = author;
    }
    statusOffensive = false;

    markedOffensive() {
        this.statusOffensive = true;
    }
}

class StreamVideo extends Video {
    constructor(title, category, description, owner, startDate, endDate) {
        super(title, category, description, owner);
        this.startDate = startDate;
        this.endDate = endDate;
    }

    statusEvent = 0;
    
    whichStatus(statusEvent) {
        switch (statusEvent) {
            case 0:
                this.statusEvent = 'planned';
                break;
            case 1:
                this.statusEvent = 'on air';
                break;
            case 2:
                this.statusEvent = 'ended';
                break;
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