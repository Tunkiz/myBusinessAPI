// importing mongoose 
import mongoose from "mongoose";

// creating a city schema
const City  = mongoose.Schema({
    city_name: {
        type: String,
        required: true,
    },
    city_Address: {
        type: String,
        required: true,
    }
});

export default mongoose.model('City', City);

