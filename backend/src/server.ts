import { connectDatabase } from "./config/database.js";
import { env } from "./config/env.js";
import app from "./app.js";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const startServer = async () => {
  await connectDatabase();

  app.listen(env.PORT, () => {
    console.log(`Server running on port ${env.PORT}`);
  });
};

startServer();
