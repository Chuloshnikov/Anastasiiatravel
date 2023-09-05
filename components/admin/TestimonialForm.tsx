import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

type Data = {
    _id: any;
    img: string;
  }[];
  
  interface TravelFormProps {
    _id: any;
    img: string;
  };

const TravelForm: React.FC<TravelFormProps> = ({
    _id,
    img: existingImg,
    btn
}) => {
    const [img, setImg] = useState<string>(existingImg || '');
    const [file, setFile] = useState<any>(null);
    const [goToTravels, setGoToTravels] = useState<boolean>(false);
    const router = useRouter();

    const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const testimonialData: Data = { img };    
            if (_id) {
              await axios.put("/api/testimonialsdata", {...testimonialData, _id});
            } else {
              await axios.post("/api/testimonialsdata", testimonialData);
            }
            setGoToTravels(true); 
    };
    

    if (goToTravels) {
        router.push('/admin/testimonials');
    }

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
          const file = e.target.files[0];
          setFile(file);
      
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "yourtraveluploads");
      
          try {
            const response = await axios.post(
              `https://api.cloudinary.com/v1_1/duufrpcxn/image/upload`,
              data,
              {
                headers: {
                  "Content-Type": "multipart/form-data"
                }
              }
            );
      
            const imageUrl = response.data.secure_url;
            setImg(imageUrl);
          } catch (error) {
            console.log(error);
          }
        }
      };


  return (
        <div>
            <form onSubmit={handleCreate} className="flex flex-col max-w-[500px] mx-auto mb-40">
                <label>Вибери зображення</label>
                    <input type="file" onChange={handleFileChange} required/>
                <button
                    className="bg-[#408692] text-white py-2 px-2 mt-6 text-base font-semibold hover:bg-[#33707a] duration-300 mt-2 rounded-lg"
                    type="submit"
                    >
                    {btn}
                </button>
            </form>
    </div>
  )
}

export default TravelForm;