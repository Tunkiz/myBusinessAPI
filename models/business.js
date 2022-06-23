// importing mogoose
import mongoose from "mongoose";

// create a scheme
const Business = mongoose.Schema({
    business_name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    // business_id: {
    //     type: Number,
    //     required: true,
    // },
    category_id: {
        type: Number,
        required: true,
    },
    city_id: {
        type: Number,
        required: true,
    }
});

//exporting model
export default mongoose.model('Business', Business);
