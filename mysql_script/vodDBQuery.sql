ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY '2222';
FLUSH PRIVILEGES;

DROP DATABASE vodDB;

CREATE DATABASE vodDB;

USE vodDB;

CREATE TABLE IF NOT EXISTS videos (
	id_video SMALLINT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    category VARCHAR(50) NOT NULL,
    description VARCHAR(400),
    owner VARCHAR(30) NOT NULL,
    statusPublished BOOLEAN NOT NULL DEFAULT 0,
    CONSTRAINT pk_idVideo
		PRIMARY KEY (id_video)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
    
CREATE TABLE IF NOT EXISTS comments (
	id_comment SMALLINT(11) NOT NULL AUTO_INCREMENT,
    body VARCHAR(400) NOT NULL,
    author VARCHAR(30) NOT NULL,
    statusOffensive BOOLEAN NOT NULL DEFAULT 0,
    id_video SMALLINT(11) NOT NULL,
    CONSTRAINT pk_idComment
		PRIMARY KEY (id_comment),
    CONSTRAINT fk_idRelatedVideo
		FOREIGN KEY (id_video) 
			REFERENCES videos (id_video)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS streamVideos (
	id_sv SMALLINT(11) NOT NULL AUTO_INCREMENT,
    statusEvent VARCHAR(30) NOT NULL DEFAULT 'planned',
    startDate DATETIME NOT NULL,
    endDate DATETIME NOT NULL,
	id_video SMALLINT(11) NOT NULL,
    CONSTRAINT pk_idSV
		PRIMARY KEY (id_sv),
	CONSTRAINT fk_idVideo
		FOREIGN KEY (id_video) 
			REFERENCES videos (id_video) 
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO videos (title, category, description, owner, statusPublished)
VALUES ('Title1', 'Category1', 'Description of video 1', 'Owner1', 1);

INSERT INTO videos (title, category, description, owner, statusPublished)
VALUES ('Title2', 'Category4', 'Description of video 2', 'Owner2', 0);

INSERT INTO videos (title, category, description, owner, statusPublished)
VALUES ('Title3', 'Category2', 'Description of video 3', 'Owner3', 0);

INSERT INTO videos (title, category, description, owner, statusPublished)
VALUES ('Title4', 'Category3', 'Description of video 4', 'Owner4', 1);

INSERT INTO videos (title, category, description, owner, statusPublished)
VALUES ('Title5', 'Category1', 'Description of video 5', 'Owner5', 0);

INSERT INTO videos (title, category, description, owner, statusPublished)
VALUES ('Title6', 'Category2', 'Description of video 6', 'Owner6', 1);

INSERT INTO videos (title, category, description, owner, statusPublished)
VALUES ('Title7', 'Category2', 'Description of video 7', 'Owner7', 0);

INSERT INTO videos (title, category, description, owner, statusPublished)
VALUES ('Title8', 'Category4', 'Description of video 8', 'Owner8', 1);


INSERT INTO comments (body, author, statusOffensive, id_video)
VALUES ('Comment body 1 of video 1', 'Author1', 0, 1);

INSERT INTO comments (body, author, statusOffensive, id_video)
VALUES ('Comment body 2 of video 1', 'Author1', 1, 1);

INSERT INTO comments (body, author, statusOffensive, id_video)
VALUES ('Comment body 3 of video 1', 'Author1', 0, 2);

INSERT INTO streamVideos (statusEvent, startDate, endDate, id_video)
VALUES ('On air', '2021-05-13 20:00:00', '2021-05-13 22:00:00', 2);

SELECT * FROM videos;
SELECT * FROM comments;
SELECT * FROM streamVideos;

SELECT * FROM comments
WHERE id_video = 1;

SELECT * FROM streamVideos sv
INNER JOIN videos v
WHERE sv.id_video = v.id_video;
