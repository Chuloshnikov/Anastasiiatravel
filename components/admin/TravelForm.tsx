import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

type Data = {
    _id: any;
    img: string;
    title: string;
    subTitle: string;
    eventDate: string;
    description: string;
    price: numder;
    oldPrice: numder;
    priceNote: number;
  }[];
  
  interface TravelFormProps {
    _id: any;
    img: string;
    title: string;
    subTitle: string;
    eventDate: string;
    description: string;
    price: numder;
    oldPrice: numder;
    priceNote: number;
  };

const TravelForm: React.FC<TravelFormProps> = ({
    _id,
    img: existingImg,
    title: existingTitle,
    subTitle: existingSubTitle,
    eventDate: existingEventDate,
    description: existingDescription,
    price: existingPrice,
    oldPrice: existingOldPrice,
    priceNote: existingPriceNote,

}) => {
    const [img, setImg] = useState<string>(existingImg || '');
    const [file, setFile] = useState<any>(null);
    const [title, setTitle] = useState<string>(existingTitle || '');
    const [subTitle, setSubTitle] = useState<string>(existingSubTitle || '');
    const [eventDate, setEventDate] = useState<string>(existingEventDate || '');
    const [description, setDescription] = useState<string>(existingDescription || '');
    const [price, setPrice] = useState<string>(existingPrice || 0);
    const [oldPrice, setOldPrice] = useState<string>(existingOldPrice || 0);
    const [priceNote, setPriceNote] = useState<string>(existingPriceNote || '');
    const [goToTravels, setGoToTravels] = useState<boolean>(false);
    const router = useRouter();

    const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const eventData: Data = { img, title, subTitle, eventDate, description, price, oldPrice, priceNote };    
            if (_id) {
              await axios.put("/api/eventdata", {...eventData, _id});
            } else {
              await axios.post("/api/eventdata", eventData);
            }
            setGoToTravels(true); 
    };
    

    if (goToTravels) {
        router.push('/admin');
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
            <form onSubmit={handleCreate} className="flex flex-col max-w-[400px] mb-12 mx-auto">
                <label>Вибери зображення</label>
                    <input type="file" onChange={handleFileChange} />
                <label>Заголовок</label>
                    <input
                    className="focus:border-yellow-600 focus:border-1 focus:ring-0"
                    type="text"
                    placeholder="Event name..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <label>Підпис під заголовком</label>
                    <input
                    className="focus:border-yellow-600 focus:border-1 focus:ring-0"
                    type="text"
                    placeholder="Event name..."
                    value={subTitle}
                    onChange={(e) => setSubTitle(e.target.value)}
                    />
                <label>Дата відпочинку</label>
                    <input
                        className="focus:border-yellow-600 focus:border-1 focus:ring-0"
                        type="text"
                        placeholder="Event date..."
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                    />
                <label>Опис</label>
                    <textarea
                        className="focus:border-yellow-600 focus:border-1 focus:ring-0"
                        placeholder="Event description..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                />
                 <label>Ціна</label>
                    <input
                        className="focus:border-yellow-600 focus:border-1 focus:ring-0"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <label>Стара ціна (не обов&quot;язково)</label>
                    <input
                        className="focus:border-yellow-600 focus:border-1 focus:ring-0"
                        type="number"
                        value={oldPrice}
                        onChange={(e) => setOldPrice(e.target.value)}
                    />
                    <label>Підпис під ціною (не обов&quot;язково)</label>
                    <input
                        className="focus:border-yellow-600 focus:border-1 focus:ring-0"
                        type="number"
                        value={priceNote}
                        onChange={(e) => setPriceNote(e.target.value)}
                    />
            <button
                className="bg-yellow-400 text-white p-1 px-2 text-base font-semibold hover:bg-yellow-500 duration-300 mt-2"
                type="submit"
                >
                Create
            </button>
      </form>
    </div>
  )
}

export default TravelForm;