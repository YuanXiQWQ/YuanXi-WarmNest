CREATE TABLE "Artist"
(
    id            INT          NOT NULL AUTO_INCREMENT,
    ArtistLName   VARCHAR(255) NOT NULL,
    ArtistFName   VARCHAR(255),
    ArtistAddress VARCHAR(255),
    ArtistPhone   VARCHAR(255),
    ArtistEmail   VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE "Painting"
(
    id            INT          NOT NULL AUTO_INCREMENT,
    ArtistID      INT          NOT NULL,
    PaintingTitle VARCHAR(255) NOT NULL,
    PaintingDate  DATE         NOT NULL,
    PaintingDesc  FLOAT,
    PRIMARY KEY (id),
    FOREIGN KEY (ArtistID) REFERENCES Artist (id) ON UPDATE CASCADE ON DELETE CASCADE
);