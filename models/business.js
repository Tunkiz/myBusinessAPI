// importing mogoose
import mongoose from "mongoose";

// create a scheme
const Business = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    busissId: {
        type: Number,
        required: true,
    },
    categoryId: {
        type: Number,
        required: true,
    },
    cityId: {
        type: Number,
        required: true,
    }
});

//exporting model
export default mongoose.model('Business', Business);
