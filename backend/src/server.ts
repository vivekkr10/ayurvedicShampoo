import { connectDatabase } from "./config/database.js";
import { env } from "./config/env.js";
import app from "./app.js"

const startServer = async ()=>{
    await connectDatabase();

    app.listen(env.PORT, ()=>{
        console.log(`Server running on port ${env.PORT}`)
    })
}

startServer();