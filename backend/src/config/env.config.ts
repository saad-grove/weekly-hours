import "dotenv/config";

const envConfig = {
  db_url: process.env.DB_URL!,
  port: process.env.PORT || 5000,
};

export default envConfig;
