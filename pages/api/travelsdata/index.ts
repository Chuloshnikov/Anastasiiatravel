import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import Travel from '../../../models/Travel';

type Data = {
  _id: any;
  img: string;
  title: string;
  subTitle: string;
  oldPrice: number;
  price: number;
  priceNote: string;
  description: string;
  eventDate: string;
  
}[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  await dbConnect();

  if (method === 'GET') {
    if (req.query?.id) {
      const travel = await Travel.findOne({ _id: req.query.id });
      res.json(travel);
    } else {
      const travels = await Travel.find();
      res.json(travels);
    }
  }

  if (method === 'POST') {
    const {img, title, subTitle, description, price, oldPrice, priceNote, eventDate } = req.body;
    const travelDoc = await Travel.create({
      title,
      subTitle,
      eventDate,
      description,
      img,
      price, 
      oldPrice, 
      priceNote
    });
    res.json(travelDoc);
  }

  if (method === 'PUT') {
    const { title, subTitle, eventDate, description, img, price, oldPrice, priceNote, _id } = req.body;
    await Travel.updateOne({ _id }, { title, subTitle, eventDate, description, img, price, oldPrice, priceNote, });
    res.json(true);
  }

  if (method === 'DELETE') {
    if (req.query?.id) {
      await Travel.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}