import mongoose from 'mongoose'

const videoSchema = mongoose.Schema({
    videoId: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: Text,
        required: true,
        trim: true
    },
    thumbnail: {
        type: String,
        required: true,
        trim: true
    }
});

export default mongoose.model('Video', videoSchema);