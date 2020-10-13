CREATE TABLE "Recipe"
(
    id INTEGER PRIMARY KEY,
    profile_id INTEGER,
    recipeName TEXT,
    thumbnail TEXT,
    prepTime INTEGER,
    ingredients TEXT,
    directions TEXT,
    CONSTRAINT recipe_profile_id_fkey FOREIGN KEY ("profile_id") REFERENCES "Profile" (id)
);
