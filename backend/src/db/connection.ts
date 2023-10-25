import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
    try {
        if (typeof process.env.MONGODB_URL !== "string") {
            throw new Error("Environment variable MONGODB_URL is not defined");
        } else {
            await connect(process.env.MONGODB_URL);
        }
    } catch (error) {
        console.log(error);
        throw new Error("Could not Connect to MongoDB");
    }
}

async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error);
        throw new Error("Could not Disconnect from MongoDB");
    }
}

export { connectToDatabase, disconnectFromDatabase };
