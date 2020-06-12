require('dotenv').config();
module.exports = {
    PORT: process.env.PORT,
    SECURE_PORT: process.env.SECURE_PORT,
    JWT_SECRET: process.env.JWT_SECRET  
}