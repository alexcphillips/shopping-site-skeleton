const appConfig = {
    NODE_ENV: process.env.NODE_ENV || "local",
    PORT: process.env.PORT || 3000,
    DB_PORT: Number(process.env.DB_PORT || 5432),
    DB_PASSWORD: process.env.DB_PASSWORD || "123",
    DB_NAME: process.env.DB_NAME || "postgres",
    DB_USER: process.env.DB_USER || "user",
    DB_HOST: process.env.DB_HOST || "localhost",
};

export default appConfig;
