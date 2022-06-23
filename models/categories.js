//importing mongoose
import mongoose from "mongoose";


const Category = mongoose.Schema(
    {
        category_name:{
            type: String,
            required: true,
        },
        category_id:{
            type: Number,
            required: true,
        }
    }
);

export default mongoose.model("Category", Category);