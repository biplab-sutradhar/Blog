import mongoose from 'mongoose';

type ConnectionObject = {
    isConnected: number;
};

const connection: ConnectionObject = {
    isConnected: 0,
};

async function connectDB(): Promise<void> {
    if (connection.isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    const MONGO_URI = process.env.MONGO_URI;
    if (!MONGO_URI) {
        console.error("MONGO_URI is not defined in environment variables.");
        process.exit(1);
    }

    try {
        const db = await mongoose.connect(MONGO_URI);
        connection.isConnected = db.connections[0].readyState;
        console.log("MongoDB connected");
    } catch (error) {
        console.log("MongoDB connection failed", error);
        process.exit(1);
    }
}

export default connectDB;