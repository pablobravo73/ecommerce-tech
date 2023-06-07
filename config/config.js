require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 5000,
    DB: {
        PORT: process.env.DB_PORT || 5432,
        HOST: process.env.DB_HOST || 'localhost',
        USER: process.env.DB_USER,
        NAME: process.env.DB_NAME,
        PASSWORD: process.env.DB_PASSWORD,
        DIALECT: process.env.DB_DIALECT, // Especifica el dialecto como 'postgres'
        ENV: process.env.DB_ENV || 'development'
    }
};
