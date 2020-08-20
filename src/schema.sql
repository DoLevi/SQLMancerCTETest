CREATE TABLE users (
    id INT,
    username VARCHAR(64),

    PRIMARY KEY (id)
);

CREATE TABLE hobbies (
    id INT,
    title VARCHAR(128),
    user_id INT,

    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);