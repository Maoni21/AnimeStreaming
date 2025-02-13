CREATE TABLE IF NOT EXISTS users (
                                     id SERIAL PRIMARY KEY,
                                     email VARCHAR(120) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
    );
