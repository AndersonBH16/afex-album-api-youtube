import mongoose from "mongoose";

export const connectDB = async() => {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/afex-album-api-youtube';

    try {
        await mongoose.connect(MONGODB_URI);
        console.log('DB is connected succesfully !!');
    } catch (error) {
        console.log(error);
    }
}