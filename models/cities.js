// importing mongoose 
import mongoose from "mongoose";

// creating a city schema
const City  = mongoose.Schema({
    city_name: {
        type: String,
        required: true,
    },
    city_id: {
        type: Number,
        required: true,
    }
});

export default mongoose.model('City', City);

