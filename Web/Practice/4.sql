CREATE TABLE Artist
(
    ID            int NOT NULL AUTO_INCREMENT,
    artistLName   VARCHAR(255),
    artistAddress VARCHAR(255),
    artistPhone   VARCHAR(255),
    artistEmail   VARCHAR(255),
    PRIMARY KEY (ID)
);

CREATE TABLE Painting
(
    ID          int NOT NULL AUTO_INCREMENT,
    artistID    int NOT NULL,
    title       VARCHAR(255),
    paint_date  DATE,
    description FLOAT,
    PRIMARY KEY (ID),
    FOREIGN KEY (artistID) REFERENCES Artist (ID) ON UPDATE CASCADE ON DELETE CASCADE
)