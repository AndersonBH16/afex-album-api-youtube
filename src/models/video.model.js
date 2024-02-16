import mongoose from 'mongoose'

const videoSchema = new mongoose.Schema({
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
        type: String,
        required: true,
        trim: true
    },
    thumbnail: {
        type: String,
        required: false,
        trim: true
    },
    state: {
        type: String
    },
    watchBefore: {
        type: Boolean
    }
},{
    timestamps: true
});

export default mongoose.model('Video', videoSchema);