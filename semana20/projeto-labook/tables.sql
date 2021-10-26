DROP TABLE labook_users;

CREATE TABLE labook_users (
	id VARCHAR(64) PRIMARY KEY,
	name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL
);

SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE labook_users;
SET FOREIGN_KEY_CHECKS = 1;

SELECT * FROM labook_users;

INSERT INTO labook_users VALUES (
	"111",
    "astrodev",
    "astrodev@gmail.com",
    "123456"
);




DROP TABLE labook_posts;

CREATE TABLE labook_posts (
	id VARCHAR(64) PRIMARY KEY,
    user_id VARCHAR(64) NOT NULL,
	type ENUM("NORMAL", "EVENT") DEFAULT "NORMAL" ,
    photo_url VARCHAR(64) NOT NULL,
    timestamp BIGINT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES labook_users(id)
);

TRUNCATE TABLE labook_posts;

SELECT * FROM labook_posts;

INSERT INTO labook_posts (id, photo_url, user_id, timestamp) VALUES (
	"12345",
    "https://picsum.photos/300",
    "111",
    1635252045094
);