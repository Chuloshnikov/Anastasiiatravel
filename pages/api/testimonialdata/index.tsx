import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import Testimonial from '../../../models/Testimonial';

type Data = {
  _id: any;
  img: string;  
}[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  await dbConnect();

  if (method === 'GET') {
    if (req.query?.id) {
      const testimonial = await Testimonial.findOne({ _id: req.query.id });
      res.json(testimonial);
    } else {
      const testimonials = await Testimonial.find();
      res.json(testimonials);
    }
  }

  if (method === 'POST') {
    const {img} = req.body;
    const testimonialDoc = await Testimonial.create({
      img,
    });
    res.json(testimonialDoc);
  }

  if (method === 'PUT') {
    const { img, _id } = req.body;
    await Testimonial.updateOne({ _id }, { img });
    res.json(true);
  }

  if (method === 'DELETE') {
    if (req.query?.id) {
      await Testimonial.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}