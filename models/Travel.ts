import mongoose from "mongoose";



const TravelSchema = new mongoose.Schema ({
    img: {
        type: String, required: true,
    },
    title: {
        type: String, required: true, 
    },
    subTitle: {
        type: String, required: true,
    },
    description: {
        type: String, required: true,
    },
    price: {
        type: Number, required: true,
    },
    oldPrice: {
        type: Number, required: false,
    },
    priceNote: {
        type: String, required: false,
    },
    eventDate: {
        type: String, required: true,
    },
}, 
{ timestamps: true }
);


export default mongoose.models.Travel || mongoose.model("Travel", TravelSchema);