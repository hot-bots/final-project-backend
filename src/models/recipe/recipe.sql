CREATE TABLE "Recipe"
(
    id INTEGER PRIMARY KEY,
    profile_id INTEGER,
    author TEXT,
    sourceUrl TEXT,
    recipeName TEXT,
    thumbnail TEXT,
    prepTime INTEGER,
    ingredients TEXT,
    directions TEXT,
    likes INTEGER,
    CONSTRAINT recipe_profile_id_fkey FOREIGN KEY ("profile_id") REFERENCES "Profile" (id)
)
