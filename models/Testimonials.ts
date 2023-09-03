import mongoose from "mongoose";



const TestimonialSchema = new mongoose.Schema ({
    img: {
        type: String, required: true,
    },
}, 
{ timestamps: true }
);


export default mongoose.models.Testimonial || mongoose.model("Testimonial", TestimonialSchema);