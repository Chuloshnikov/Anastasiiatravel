import Testimonials from "./Testimonials";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Spinner from "./Spinner";

const TestimonialsContainer = () => {
    const [testimonials, setTestimonials] = useState<any>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('/api/testimonialsdata').then(response => {
            setTestimonials(response.data);
        })
    }, []);
    return (
        <>
            {testimonials ? (<Testimonials testimonials={testimonials}/>) : 
                (
                <div
                className='text-center items-center bg-gray-100 xs:pt-6 mdl:pt-22 md:pb-22 xs:pb-12'
                >
                    <Spinner/>    
                </div>
                )
            }
        </>
    )
}

export default TestimonialsContainer