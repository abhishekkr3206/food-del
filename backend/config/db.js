import mongoose from "mongoose";

export const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("MongoDB Connection Error: ", error);
    }
}
