INSERT INTO usesrs
    (authid, name)
VALUES
    ($1, $2)
RETURNING authid, name;   