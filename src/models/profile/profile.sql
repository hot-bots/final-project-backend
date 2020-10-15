CREATE TABLE "Profile"
(
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    firstName TEXT,
    lastName TEXT,
    chefRating INTEGER,
    cookbook TEXT,
    followers TEXT,
    CONSTRAINT profile_user_id_fkey FOREIGN KEY ("user_id") REFERENCES "User" (id)
);
