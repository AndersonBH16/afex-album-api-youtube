import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        await mongoose.connect('mongodb://localhost/afex-album-api-youtube');        
        console.log('DB is connected succesfully !!');
    } catch (error) {
        console.log(error);
    }
}